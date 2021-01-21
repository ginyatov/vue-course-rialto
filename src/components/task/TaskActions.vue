<template>
  <div class="card__actions">
    <router-link :to="`/edit/${ID}`" class="card__edit"
      ><img :src="IconEdit" alt=""
    /></router-link>

    <TaskDeleteButton :ID="ID" />
  </div>
</template>

<script>
import IconEdit from "@img/edit.svg";
import TaskDeleteButton from "@components/task/TaskDeleteButton";
export default {
  components: { TaskDeleteButton },
  props: {
    ID: String,
  },
  setup() {
    return {
      IconEdit,
    };
  },
};
</script>

<style></style>
