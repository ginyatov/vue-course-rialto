<template>
  <div class="card" v-if="task">
    <div class="card__header">
      <h2>{{ task.title }}</h2>
      <TaskActions :ID="task.ID" />
    </div>
    <p><strong>Статус</strong>: <AppStatus :type="task.type" /></p>
    <p><strong>Дэдлайн</strong>: {{ new Date(task.date).toLocaleString() }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div v-if="task.type !== 'overdue'">
      <button class="btn" @click="setStatusTask({ task, type: 'pending' })">
        Взять в работу
      </button>
      <button
        class="btn primary"
        @click="setStatusTask({ task, type: 'done' })"
      >
        Завершить
      </button>
      <button
        class="btn danger"
        @click="setStatusTask({ task, type: 'cancelled' })"
      >
        Отменить
      </button>
      <button class="btn " @click="setStatusTask({ task, type: 'active' })">
        Сбросить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ pageID }}</strong> нет.
  </h3>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import AppStatus from "@components/AppStatus";
import { computed } from "vue";
import TaskActions from "@components/task/TaskActions";

export default {
  components: { AppStatus, TaskActions },
  setup() {
    const route = useRoute();
    const pageID = route.params.id;

    const store = useStore();
    const task = computed(() =>
      store.state.tasks.find((task) => task.ID === pageID)
    );

    return {
      task,
      pageID,
      setStatusTask: (type) => store.dispatch("handlerStatusTask", type),
    };
  },
};
</script>

<style scoped></style>
