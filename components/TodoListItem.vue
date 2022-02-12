<template lang="pug">
.item(:class="itemClass")
  .checkbox-wrapper(:class="{'checked':todo.done}" @click.prevent="onTodoToggled(index)")
    .text-primary(v-show="todo.done") v
  .todo-content(:class="{'text-primary':todo.done}") {{todo.text}}
  button.delete-btn(@click="onTodoRemoved(index)" :disabled="processing")
    img.cursor-pointer(src="~/assets/trashcan.png")
</template>

<script>
export default {
  props:{
    index:{
      type: Number,
      default: 0
    },
    todo:{
      type: Object,
      default: ()=>({})
    },

    onTodoToggled:{
      type: Function,
      default: ()=>{}
    },
    onTodoAdded:{
      type: Function,
      default: ()=>{}
    },
    onTodoRemoved:{
      type: Function,
      default: ()=>{}
    },
  },
  computed:{
    processing(){
      return this.todo.processing
    },
    itemClass() {
      return {
        'skeleton': this.processing,
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./scss/variables.scss";

.item{
  display: flex;
  align-items: center;
  margin-bottom: .5em;
}
.checkbox-wrapper{
  flex-shrink: 0;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid $border-color;
  border-radius: 2px;
  flex-basis: 22px;
  height: 20px;
  &:hover{
    cursor: pointer;
  }
  &.checked{
    border-color: $primary-color;
  }
}
.text-primary{
    color: $primary-color
}
.todo-content{
  margin: 0 1em;
  flex-grow: 1;
  flex-basis: 100%;
  overflow: scroll;
}
.skeleton{
  position: relative;
  user-select: none;
}
.skeleton::after{
  content: "";
  position: absolute;
  opacity: .6;
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
}

@keyframes shine {
  to {
    background-position: 100% 0;
  }
}
</style>