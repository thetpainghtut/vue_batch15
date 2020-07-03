<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/mylogo.png" class="img-fluid" width="200">

    <div class="my-3">
      <router-link to="/testing" class="btn btn-primary mx-3">Go to Testing</router-link>
      <router-link to="/item" class="btn btn-primary mx-3">Go to Item</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
