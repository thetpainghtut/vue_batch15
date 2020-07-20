<template>
  <div class="container">
    <h2>Register Page</h2>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <p v-if="errored" class="text-danger">
          <ul>
            <li v-for="em in errMsg" v-bind:key="em">{{em}}</li>
          </ul>
        </p>
        <form v-on:submit.prevent="Register">
          <div class="form-group">
            <label class="text-left">Name</label>
            <input type="text" name="name" class="form-control" placeholder="Your Name..." v-model="name">
          </div>
          <div class="form-group">
            <label class="text-left">Email</label>
            <input type="email" name="email" placeholder="Email..." class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label class="text-left">Password</label>
            <input type="password" name="password" class="form-control" v-model="password">
          </div>
          <div class="form-group">
            <label class="text-left">Password Confirmation</label>
            <input type="password" name="password_confirmation" class="form-control" v-model="password_confirmation">
          </div>
          <div class="form-group">
            <input type="submit" name="btnsubmit" class="btn btn-info" value="Register">
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
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errored: false,
        errMsg: []
      }
    },
    methods:{
      Register(){
        let name = this.name
        let email = this.email
        let password = this.password
        let password_confirmation = this.password_confirmation
        this.$store.dispatch('register', { name, email, password, password_confirmation })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => {
          console.log(err.response.data)
          this.errMsg = err.response.data.original
          this.errored = true
        })
      }
    }
  }
</script>

<style type="text/css" scoped>
  
</style>