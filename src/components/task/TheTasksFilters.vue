<template>
  <div class="tasks-filters">
    <h2>Фильтр</h2>
    <form class="tasks-form">
      <div class="form-control">
        <label for="type">Показывать задачи со статусом:</label>
        <select id="type" v-model="filters.type">
          <option value="all">Все</option>
          <option :value="name[0]" v-for="name in validNames" :key="name[0]">{{
            name[1]
          }}</option>
        </select>
      </div>
      <div class="form-control">
        <label for="date">Сортировать по:</label>
        <select id="date" v-model="filters.date">
          <option value="default">По умолчанию</option>
          <option value="time">По дате создания таска</option>
          <option value="deadline">По дате дедлайна</option>
        </select>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { validNames } from "@utils/helpers";

export default {
  setup() {
    const store = useStore();

    const filters = reactive({
      type: "all",
      date: "default",
    });

    return {
      filters,
      validNames: Object.entries(validNames),
      types: computed(() => store.getters.availableTypes),
    };
  },
};
</script>

<style scoped>
.tasks-form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.tasks-filters {
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
}

@media (min-width: 768px) {
  .tasks-form {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
