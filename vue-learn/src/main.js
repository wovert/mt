import Vue from 'vue'
import Router from './router'
import store from './store'
// import App from './App'
Vue.config.productionTip = false

new Vue({
  router: Router,
  store,
  // render: h => h(App)
}).$mount('#app')
