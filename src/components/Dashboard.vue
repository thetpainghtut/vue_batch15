<template>
  <div>
    <h1 class="text-success">Dashboard</h1>

    <b-container>
      <ul class="list-unstyled mt-2">
        <b-media tag="li" class="my-4">
          <template v-slot:aside>
            <b-img blank blank-color="#abc" width="64" alt="placeholder"></b-img>
          </template>
          <h5 class="mt-0 mb-1 text-left">About Dashboard Component</h5>
          <p class="mb-0 text-left">
            It is simple and not include api call in this component.
          </p>
        </b-media>

        <b-media tag="li" class="my-4">
          <template v-slot:aside>
            <b-img blank blank-color="#bac" width="64" alt="placeholder"></b-img>
          </template>

          <h5 class="mt-0 mb-1 text-left">About Item Component</h5>
          <p class="mb-0 text-left">
            We use item component to show data from an authenticated api link in server.So, Every API is stateless, not store auth information in session and every api call must include token. 
          </p>
        </b-media>
      </ul>
    </b-container>
  </div>
</template>

<script type="text/javascript">
  // const axios = require('axios');

  export default{
    data () {
      return {
        
      }
    },
    mounted () {
      
    }
  }
</script>

<style type="text/css">
  
</style>