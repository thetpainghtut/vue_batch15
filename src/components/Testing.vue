<template>
  <div>
    <h1 class="text-danger">Bitcoin Price Index</h1>
    

    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script type="text/javascript">
  const axios = require('axios');
  export default{
    data () {
      return {
        info: null,
        items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    },
    mounted () {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => (this.info =response.data.bpi))
    }
  }
</script>

<style type="text/css">
  
</style>