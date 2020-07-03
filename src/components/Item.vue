<template>
  <div>
    <h2 class="text-success">Show Items</h2>

    <b-table striped hover :info="info"></b-table>
  </div>
</template>

<script type="text/javascript">
  const axios = require('axios');

  export default{
    data () {
      return {
        info: []
      }
    },
    mounted () {
      axios
        .get('http://ecommerce.thetpainghtut.com/api/items')
        .then(response => {
          const myObj = response.data
          // const myArr = Object.keys(myObj).map(i => myObj[i])
          const myArr = Object.entries(myObj);
          console.log(typeof myArr);
          this.info = myArr;

        })
    }
  }
</script>

<style type="text/css">
  
</style>