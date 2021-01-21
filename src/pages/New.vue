<template>
  <form class="card" @submit.prevent="createTask">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model.trim="formValues.title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="datetime-local" id="date" v-model.trim="formValues.date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea
        id="description"
        v-model.trim="formValues.description"
      ></textarea>
    </div>

    <button
      type="submit"
      class="btn primary"
      :disabled="!isValid || isFetching"
    >
      Создать
    </button>
  </form>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const formValues = reactive({
      title: "",
      date: "",
      description: "",
    });

    const isValid = computed(
      () =>
        formValues.title.trim().length > 2 &&
        formValues.date &&
        formValues.description.trim().length > 1
    );

    const isFetching = ref(false);
    const store = useStore();
    const router = useRouter();

    const createTask = async () => {
      isFetching.value = true;
      await store.dispatch("createTask", formValues);
      isFetching.value = false;
      router.push("/");
    };

    return {
      formValues,
      isValid,
      isFetching,
      createTask,
    };
  },
};
</script>
