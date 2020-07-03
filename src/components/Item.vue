<template>
  <div>
    <h1 class="text-success">Item List</h1>

    <b-container>
      <b-table striped hover :items="info" :fields="fields">

        <!-- A virtual column -->
        <template v-slot:cell(no)="data">
          {{ data.index + 1 }}
        </template>

        <template v-slot:cell(photo)="data">
          <img :src="data.item.photo" alt="" width="50" height="50">
        </template>

        <template v-slot:cell(actions)="data">
          <b-button variant="warning" :href="data.item.id" class="mx-2">Edit</b-button>
          <b-button variant="danger" :href="data.item.id" class="mx-2">Delete</b-button>
        </template>
        
      </b-table>
    </b-container>
  </div>
</template>

<script type="text/javascript">
  const axios = require('axios');

  export default{
    data () {
      return {
        info: [],
        fields: ['no', 'name', 'photo', 'perprice', 'actions',]
      }
    },
    mounted () {
      axios
        .get('http://ecommerce.thetpainghtut.com/api/items')
        .then(response => {
          const myObj = response.data
          // const myArr = Object.keys(myObj).map(i => myObj[i])
          // const myArr = Object.entries(myObj);
          console.log(myObj);
          this.info = myObj;
        })
    }
  }
</script>

<style type="text/css">
  
</style>