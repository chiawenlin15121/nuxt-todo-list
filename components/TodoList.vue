<template lang="pug">
.container
  h1.title Todo List
  section.todo-list-wrapper
    TodoListItem(
      v-for='(todo, index) in list',
      :key='index',
      v-bind='$props',
      :todo='todo',
      :index='index'
    )
  .input
    input(
      v-model='newTodo',
      type='text',
      placeholder='請輸入要做的事情',
      @keydown.enter='addTodo'
    )
    .add-btn.cursor-pointer
      img(src='~/assets/add.svg', @click='addTodo')
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    onTodoToggled: {
      type: Function,
      default: () => {},
    },
    onTodoAdded: {
      type: Function,
      default: () => {},
    },
    onTodoRemoved: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo.length) {
        return
      }
      this.onTodoAdded(this.newTodo)
      this.newTodo = ''
    },
  },
}
</script>

<style lang="scss" scoped>
@import './scss/variables.scss';

.title{
  font-size: 1.5em;
  font-weight: 700;
}

.input {
  margin-top: 5px;
  display: flex;
  align-items: stretch;
  input {
    margin: 0;
    border: 2px solid $border-color;
    border-radius: 2px;
    flex-basis: 100px;
    flex-grow: 1;
  }
}
.container {
  display: flex;
  flex-direction: column;
  padding: 1em;
  background-color: #fff;
  border: 1px solid $border-color;
  border-radius: 0.6em;
}
.todo-list-wrapper {
  flex-grow: 1;
  flex-basis: 0;
  overflow: scroll;
}
.add-btn {
  width: 24px;
  height: 24px;
  margin-left: 5px;
  background-color: $primary-color;
  color: #fff;
  border-radius: 3px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>