const state = {
  count: 1
}

const mutations = {
  add(state) {
    state.count++
  },
  substract(state) {
    state.count--
  }
}

const actions = {
  add: ({commit}) => {
    commit('add')
  },
  substract: ({commit}) => {
    commit('substract')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}