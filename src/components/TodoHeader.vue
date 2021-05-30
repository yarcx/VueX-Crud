/* eslint-disable */
<template>
  <div>
    <form>
      <input type="text" v-model="title" />
      <input type="submit" @click.prevent='addTodos' />
    </form>

      <div>
    Filter Todos:
      <select
        @change="filterTodo"
        title="Filter your todo"
        value="null"
        v-model="sort"
      >
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>

    
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "TodoHeader",
  data() {
    return {
      title: "",
      sort: ''
    };
  },

  methods: {
    ...mapActions(['addTodo', 'filterTodos']),
    addTodos(){
      this.addTodo(this.title)
      this.title = ''
    },
    filterTodo() {
      const filterNumber = parseInt(this.sort)
      this.filterTodos(filterNumber)
    }
  }
};
</script>

<style>
select {
  margin-top: 20px;
  padding: 6px;
  border: #41b883 1px solid;
}
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer
  }
</style>
