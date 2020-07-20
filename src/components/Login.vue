<template>
  <div class="container">
    <h2>Login Page</h2>

    <div class="row">
      <div class="col-md-6 offset-md-3">
        <p v-if="errored" class="text-danger">{{errMsg}}</p>

        <form v-on:submit.prevent="Login">
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email..." class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label>Password</label>
            <input type="password" name="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <input type="submit" name="btnsubmit" class="btn btn-info" value="Login">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default{
    data(){
      return{
        email: '',
        password: '',
        errMsg: '',
        errored: false
      }
    },
    methods:{
      Login(){
        let username = this.email
        let password = this.password
        // login process
        this.$store.dispatch('login', { username, password })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => {
          this.errMsg = err.response.data.message
          this.errored = true
        })
      }
    }
  }
</script>

<style type="text/css" scoped>
  
</style>