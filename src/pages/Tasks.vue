<template>
  <h1 class="text-white center" v-if="isEmptyTasks">Задач пока нет</h1>
  <template v-else>
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <task-card v-for="task in tasks" :key="task.ID" :task="task"></task-card>
  </template>
</template>

<script>
import TaskCard from "@components/task/TaskCard";

import { useStore } from "vuex";
import { computed } from "vue";

export default {
  components: { TaskCard },
  setup() {
    const store = useStore();

    return {
      tasks: computed(() => store.state.tasks),
      isEmptyTasks: computed(() => store.getters.isEmptyTasks),
      activeTasks: computed(() => store.getters.activeTasks),
    };
  },
};
</script>
