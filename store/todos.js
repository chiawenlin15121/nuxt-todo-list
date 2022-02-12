export const state = () => ({
  list: []
})

export const actions = {
  add({commit},text) {
    const newTodo = {
      text,
      processing: true,
      done: false
    }
    commit('add',newTodo)
    setTimeout(() => {
      commit('updateTodo', {todo: newTodo, patch:{processing: false}})
    }, 1000);
  },
  remove({commit, state},toRemoveIndex) {
    if(state.list.length <= toRemoveIndex){
      return
    }
    const todo = state.list[toRemoveIndex]
    commit('updateTodo', {todo, patch:{processing: true}})
    setTimeout(() => {
      commit('remove', todo)
    }, 500);
  },
  toggle({commit, state},todoIndex) {
    if(state.list.length <= todoIndex){
      return
    }
    const todo = state.list[todoIndex]
    commit('updateTodo', {todo, patch:{processing: true}})
    setTimeout(() => {
      commit('toggle',todo)
      commit('updateTodo', {todo, patch:{processing: false}})
    }, 500);
  },
}

export const mutations = {
  updateTodo(state, {todo, patch}){
    state.list[state.list.indexOf(todo)] = Object.assign(todo, patch)
  },
  add(state, todo) {
    state.list.unshift(todo)
  },
  remove(state, todo) {
    state.list.splice(state.list.indexOf(todo),1)
  },
  toggle(state, todo) {
    const todoIndex = state.list.indexOf(todo)
    state.list[todoIndex].done = !state.list[todoIndex].done
  }
}