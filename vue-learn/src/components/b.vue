<template>
  <div class="hello">
    page a: {{ $store.state.b.count }}, {{ countPlusLocalState }}
    <button name="button" @click="add">增加</button>
    <button name="button" @click="substract">凝少</button>
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
  methods: mapActions('b', ['add', 'substract']),
  computed: mapState({
    count: state => state.b.count,
    countAlias: 'count',
    countPlusLocalState(state) {
      return state.b.count + this.localCount
    }
  })
}
</script>

<style scoped>
</style>
