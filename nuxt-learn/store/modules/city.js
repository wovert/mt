const state = () => ({
  list: ['a', 'b']
})

const mutations = {
  add(state, text) {
    state.list.push(text)
  },
  setCity(state, obj) {
    state.list = obj
  }
}

const actions = {
  add: ({commit}, text) => {
    commit('add', text)
  },
  setCity: ({commit}, obj) => {
    commit('setCity', obj)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
