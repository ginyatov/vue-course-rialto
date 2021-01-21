<template>
  <form class="card" @submit.prevent="updateTask">
    <h1>Редактировать задачу №{{ task.ID }}</h1>
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
      Обновить
    </button>
  </form>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const router = useRouter();
    const pageID = route.params.id;

    const store = useStore();
    const task = computed(() =>
      store.state.tasks.find((task) => task.ID === pageID)
    );

    if (!task.value) {
      router.push("/");
    }

    const formValues = reactive({
      title: task.value.title,
      date: task.value.date,
      description: task.value.description,
    });

    const isValid = computed(
      () =>
        formValues.title.trim().length > 2 &&
        formValues.date &&
        formValues.description.trim().length > 1
    );

    const isFetching = ref(false);

    const updateTask = async () => {
      isFetching.value = true;
      await store.dispatch("updateTask", { ...task.value, ...formValues });
      isFetching.value = false;
      router.push("/");
    };

    return {
      formValues,
      task,
      isValid,
      isFetching,
      updateTask,
    };
  },
};
</script>
