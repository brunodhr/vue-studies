<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ counter }}</h1>
    <button v-on:click="addCounter">Adicionar</button>
    <button v-on:click="removeCounter">Remover</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Counter',
  props: {
    msg: String
  },
  methods: {
    ...mapMutations(['ADD_COUNTER', 'REMOVE_COUNTER']),
    addCounter: function() {
      this.ADD_COUNTER()
    },
    removeCounter: function() {
      this.REMOVE_COUNTER()
    }
  },
  computed: {
    ...mapState(['counter'])
  }
}
</script>
