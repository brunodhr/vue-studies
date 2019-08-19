<template>
  <button class="styled">{{text}}</button>
</template>

<script>
export default {
  name: 'Button',
  props:{
    text: {
      type: String,
      required: true,
      default: ''
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed () {
    
  }
}
</script>

<style scoped>
.styled{
  font-size:20px;
  background-color:red;
}
</style>
