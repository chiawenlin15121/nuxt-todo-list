<template lang="pug">
.app
  NavBar
  .todo-container
    TodoList.todo-list(
      :list='todos',
      :onTodoToggled='toggle',
      :onTodoRemoved='removeTodo',
      :onTodoAdded="addTodo"
    )
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    ...mapActions({
      toggle: 'todos/toggle',
      add: 'todos/add',
      removeTodo: 'todos/remove'
    }),
    addTodo(todo){
      this.add(todo)
    }
  },
}
</script>

<style lang="scss">

*{
  box-sizing: border-box;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}

button{
  color: #fff;
  background-color: #fff;
  border: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 1rem;
  font-weight: inherit;
  margin: 0;
  padding: 0;
  display: inline-block;
  line-height: inherit;
}
.cursor-pointer:hover{
  cursor: pointer;
}
</style>
<style lang="scss" scoped>
@import "./scss/variables.scss";

.app{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  background-color: $background-color;
}
.extend {
  position: absolute;
  inset: 0;
}
.todo-container{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 2em;
}
.todo-list{
  flex-grow: 1;
  flex-basis: 100%;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px){
    width: 50%
  }
}
</style>
