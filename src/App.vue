<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <template v-if="isLoadTasks">
      <app-loader></app-loader>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import TheNavbar from "@components/TheNavbar";
import AppLoader from "@components/AppLoader";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: {
    TheNavbar,
    AppLoader,
  },
  setup() {
    const store = useStore();
    store.dispatch("initConnectionToFireBase");

    const checkEveryFiveSecondsStatus = () => {
      setTimeout(() => {
        store.dispatch("checkStatusTask");
        checkEveryFiveSecondsStatus();
      }, 5000);
    };

    checkEveryFiveSecondsStatus();

    return {
      isLoadTasks: computed(() => store.state.isLoadTasks),
    };
  },
};
</script>

<style></style>
