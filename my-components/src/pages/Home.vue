<template>
  <div>
    <img src='@/assets/logo.png' alt='logo-vue'>
    <Hello msg='Welcome to Your Vue.js App' />
  </div>
</template>

<script>
import Hello from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
      Hello
  }
}
</script>

<style scoped>

</style>
