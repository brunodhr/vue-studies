<template>
  <layout>
    <div slot="content">
      <div class="container">
        <logo />
        <NuxtLink to="/about">Go to about</NuxtLink>
      </div>
    </div>
  </layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Layout from '~/components/Layout.vue'

export default {
  components: {
    Logo,
    Layout
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
