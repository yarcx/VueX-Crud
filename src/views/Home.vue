<template>
  <div class="home">
    <TodoHeader  />
    <Todos  />
  </div>
</template>

<script>
// @ is an alias to /src
import TodoHeader from "@/components/TodoHeader.vue";
import Todos from "@/components/Todos.vue";

export default {
  name: "Home",
  components: {
    TodoHeader,
    Todos,
  },
};
</script>
