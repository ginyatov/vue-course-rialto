import { createRouter, createWebHistory } from "vue-router";

import NewTask from "@pages/New";
import Task from "@pages/Task";
import AllTasks from "@pages/Tasks";
import EditTask from "@pages/Edit";

const routes = [
  { path: "/", component: AllTasks, name: "main" },
  { path: "/new", component: NewTask, name: "new" },
  { path: "/edit/:id", component: EditTask, name: "edit" },
  { path: "/task/:id", component: Task, name: "details" },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
