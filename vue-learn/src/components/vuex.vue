<template>
  <div class="hello">
    vuex {{ $store.state.count }}, {{ countPlusLocalState }}
    <button name="button" @click="increment">增加</button>
    <button name="button" @click="decrement">凝少</button>
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
  methods: mapActions([
    'increment',
    'decrement'
  ]),
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.count + this.localCount
    }
  })
}
</script>

<style scoped>
</style>
