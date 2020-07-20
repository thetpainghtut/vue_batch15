<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" class="img-fluid" width="200">

    <div class="my-3">

      <span v-if="isLoggedIn"> 
        <router-link to="/dashboard" class="btn btn-success mx-3">Dashboard</router-link>
        <router-link to="/item" class="btn btn-primary mx-3">Go to Item</router-link>
        <a @click="logout" class="btn btn-danger mx-3">Logout</a>
      </span>
      <span v-else>
        <router-link to="/" class="btn btn-success mx-3">Login</router-link>
        <router-link to="/register" class="btn btn-success mx-3">Register</router-link>
      </span>

    </div>

    <router-view></router-view>

  </div>
</template>

<script>

export default {
  computed : {
      isLoggedIn : function() { return this.$store.getters.isLoggedIn},
    },
    methods: {
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
      }
    }
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
