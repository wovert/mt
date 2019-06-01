const state = {
  money: 1
}

const mutations = {
  add(state, param) {
    state.money += state.money + param
  },
  substract(state) {
    state.money--
  }
}

const actions = {
  add: ({commit}, param) => {
    commit('add', param)
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