<template>
  <div id="app">
    <router-view />
    <x-loading v-model="isLoading" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoading () {
      return this.$store.state.router.isLoading
    }
  }
}
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
