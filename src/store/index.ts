import { createStore } from "vuex";
import firebase from "../firebase";
import { isCorrectDate } from "@utils/helpers";

const refDatabase = firebase.database().ref("tasks");

export default createStore({
  state: {
    tasks: [],
    isLoadTasks: true,
  },
  getters: {
    isEmptyTasks: (state) => state.tasks.length === 0,
    availableTypes: (state) => state.tasks.map((task: any) => task.type),
    activeTasks: (state) =>
      state.tasks.filter((task: any) => task.type === "active").length,
  },
  actions: {
    initConnectionToFireBase: ({ state, commit, dispatch }) => {
      refDatabase.on("value", (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const correctData = Object.values(data);
          commit("setTasks", correctData.reverse());
        }

        dispatch("checkStatusTask");

        commit("setStatusLoaderTasks", false);
      });

      refDatabase.on("child_removed", () => {
        if (state.tasks.length === 1) {
          commit("setTasks", []);
        }
      });
    },

    updateTask: async (_, task) => {
      if (task.type === "overdue" && isCorrectDate(task.date)) {
        task.type = "active";
      }

      return refDatabase.child(task.ID).update(task);
    },

    handlerStatusTask: async (_, { task, type }) => {
      const data = { ...task, type };
      await refDatabase.child(task.ID).update(data);
    },

    handlerDeleteTask: (_, ID) => {
      return refDatabase.child(ID).remove();
    },

    checkStatusTask: ({ state }) => {
      state.tasks.filter((task: any) => {
        if (!isCorrectDate(task.date)) {
          task.type = "overdue";
        }
      });
    },

    createTask: (_, formValues) => {
      const ID = new Date().getTime().toString();

      const type = isCorrectDate(formValues.date) ? "active" : "overdue";

      return refDatabase.child(ID).set({
        ...formValues,
        type,
        ID,
      });
    },
  },
  mutations: {
    setTasks: (state, tasks) => {
      state.tasks = tasks;
    },
    setStatusLoaderTasks: (state, status) => {
      state.isLoadTasks = status;
    },
  },
});
