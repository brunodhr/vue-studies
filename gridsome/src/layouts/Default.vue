<template>
  <div class="layout">
    <Header />
    <div class="body">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
* {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  text-decoration: none;
}
</style>
