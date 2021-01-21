<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <app-status :type="task.type"></app-status>
    </h2>
    <p>
      <strong>
        <small>
          {{ new Date(task.date).toLocaleString() }}
        </small>
      </strong>
    </p>
    <div class="card__footer">
      <router-link :to="`/task/${task.ID}`" class="btn primary btn--link"
        >Посмотреть</router-link
      >
      <TaskActions :ID="task.ID" />
    </div>
  </div>
</template>

<script>
import AppStatus from "@components/AppStatus";
import TaskActions from "@components/task/TaskActions";
export default {
  components: { AppStatus, TaskActions },
  props: {
    task: Object,
  },
};
</script>

<style></style>
