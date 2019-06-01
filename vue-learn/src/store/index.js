import Vue from 'vue'
import Vuex from 'vuex'

import money from './modules/a'
import count from './modules/b'

Vue.use(Vuex)

// const state = {
//   count: 1
// }

// const mutations = {
//   increment(state) {
//     state.count++
//   },
//   decrement(state) {
//     state.count--
//   }
// }

// const actions = {
//   increment: ({commit}) => {
//     commit('increment')
//   },
//   decrement: ({commit}) => {
//     commit('decrement')
//   }
// }

// export default new Vuex.Store({
//   state,
//   mutations,
//   actions
// })

export default new Vuex.Store({
  modules: {
    a: money,
    b: count
  }
})