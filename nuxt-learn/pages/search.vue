<template>
  <section class="container">
    <h1 class="title">
      Search Page
    </h1>
    <ul>
      <li v-for="(item, index) in $store.state.city.list" :key="index">
        {{item}}
      </li>
    </ul>
    <h2>navbar</h2>
    <ul>
      <li v-for="(item, index) in $store.state.navbar.app" :key="index">
        {{item}}
      </li>
    </ul>
    <nuxt-link class="button" to="/">
      Home page
    </nuxt-link>
      <nuxt-link class="button" to="/about">
      About page
    </nuxt-link>
  </section>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'
export default {
  layout: 'default',
  data() {
    return {
      list: ['广州']
    }
  },
  // 服务端请求接口数据
  async asyncData() {
    let { status, data: {list}
     } = await axios.get('http://localhost:3000/city/list')
    if (status === 200) {
      return {
        list
      }
    }
  },
  async fetch ({ store, params }) {
    let { status, data: {list}
     } = await axios.get('http://localhost:3000/city/list')
     console.log(list)
    store.commit('city/setCity', list)
  },
  //客户端请求接口数据
  async mounted () {
    // let { status, data: {list}} = await axios.get('http://localhost:3000/city/list')
    // if (status === 200) {
    //   this.list = list
    // }
  }
}
</script>
<style scoped>
.title
{
  margin: 50px 0;
}
</style>
