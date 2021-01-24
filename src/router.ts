import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Task from "@pages/Task.vue";
import AllTasks from "@pages/Tasks.vue";
import EditTask from "@pages/Edit.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: AllTasks, name: "main" },
  {
    path: "/new",
    component: () => import(/* webpackChunkName: "new" */ "@pages/New.vue"),
    name: "new",
  },
  {
    path: "/edit/:id",
    component: () => import(/* webpackChunkName: "edit" */ "@pages/Edit.vue"),
    name: "edit",
  },
  {
    path: "/task/:id",
    component: () =>
      import(/* webpackChunkName: "details" */ "@pages/Task.vue"),
    name: "details",
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
