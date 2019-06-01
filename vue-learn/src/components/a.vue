<template>
  <div class="hello">
    page a: {{ $store.state.a.money }}, {{ countPlusLocalState }}
    <button name="button" @click="add(5)">增加</button>
    <button name="button" @click="substract">减少</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      localCount: 10
    }
  },
  methods: mapActions('a', ['add', 'substract']),
  computed: mapState({
    money: state => state.a.money,
    countAlias: 'money',
    countPlusLocalState(state) {
      return state.a.money + this.localCount
    }
  })
}
</script>

<style scoped>
</style>
