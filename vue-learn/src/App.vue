<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <Vuex></Vuex> -->
    <PageA />
    <PageB />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import Vuex from './components/vuex.vue'
import PageA from './components/a.vue'
import PageB from './components/b.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    // Vuex,
    PageA,
    PageB
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
