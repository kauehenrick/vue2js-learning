<template>
  <div id="app">
    <ClothingStore title="Vue2.js Learning Store" />
  </div>
</template>

<script>
import ClothingStore from './components/ClothingStore.vue';

export default {
  name: 'App',
  components: {
    ClothingStore
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: antiquewhite;
}
</style>
