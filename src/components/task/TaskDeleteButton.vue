<template>
  <div class=" confirm">
    <transition name="fade">
      <div
        class="card__delete-confirm"
        v-if="isWantDelete"
        v-closable="{
          exclude: [$refs.iconDelete],
          handler: onClose,
        }"
      >
        <p>Точно удалить?</p>
        <div class="confirm__buttons">
          <button class="btn danger" @click="handlerDeleteTask(ID)">
            Да
          </button>
          <button class="btn" @click="isWantDelete = false">Отмена</button>
        </div>
      </div>
    </transition>
    <img
      ref="iconDelete"
      :src="IconDelete"
      alt="Удалить"
      @click="isWantDelete = !isWantDelete"
      class="card__delete"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import IconDelete from "@img/delete.svg";
import closable from "@utils/closable";
import { useRoute, useRouter } from "vue-router";
export default {
  props: {
    ID: String,
  },
  directives: {
    closable,
  },
  setup() {
    const isWantDelete = ref(false);
    const state = useStore();
    const route = useRoute();
    const router = useRouter();

    const onClose = () => {
      isWantDelete.value = false;
    };

    const handlerDeleteTask = async (ID) => {
      await state.dispatch("handlerDeleteTask", ID);

      if (route.name === "details") {
        router.push("/");
      }
    };

    return {
      IconDelete,
      handlerDeleteTask,
      isWantDelete,
      onClose,
    };
  },
};
</script>

<style></style>
