import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    addTodo: (state, todo) => state.todos.unshift(todo),
    clickToComplete: (state, id) => {
      state.todos.filter((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
      });
    },
    deleteTodo: (state, id) => {
    return state.todos = state.todos.filter((todo) => todo.id !== id)
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/todos"
      );
      return commit("setTodos", response.data);
    },

    async addTodo({ commit }, todo) {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          completed: false,
          title: todo,
        }
      );
      return commit("addTodo", response.data);
    },
    async clickToComplete({ commit }, id) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      commit("clickToComplete", response.data.id);
    },
    async deleteTodo({ commit }, id) {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      if (response.status === 200) {
        commit("deleteTodo", id);
      }
      commit("deleteTodo", id);
      console.log(id, 'the deleted id is')
    },
    async filterTodos({ commit }, limit) {
       const response = await axios(
         `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
       );
      
      commit("setTodos", response.data);
      console.log(response, 'the filtered array is this')
    }
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  modules: {},
});
