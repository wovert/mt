import Vue from 'vue'
import VueRouter from 'vue-router'

import pageA from './pages/pageA'
import pageB from './pages/pageB'
import App from './App'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: App
  },
  {
    path: '/pagea',
    component: pageA
  },
  {
    path: '/pageb',
    component: pageB
  },
]
const router = new VueRouter({
  routes
})
export default router