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
          <b-button variant="warning" :href="data.item.id.toString()" class="mx-2">Edit</b-button>
          <b-button variant="danger" :href="data.item.id.toString()" class="mx-2">Delete</b-button>
        </template>
        
      </b-table>
    </b-container>
  </div>
</template>

<script type="text/javascript">
  export default{
    data () {
      return {
        token: localStorage.getItem('token'),
        info: [],
        fields: ['no', 'name', 'photo', 'perprice', 'actions',]
      }
    },
    mounted () {
      this.getItems();
    },
    methods:{
      getItems(){
        this.$http.get('http://ecommerce.thetpainghtut.com/api/items',{
          headers: {
            'Authorization': `Bearer ${this.token}`
          }
        })
        .then(response => {
          const myObj = response.data
          this.info = myObj;
        })
        .catch(err=> console.log(err));
      }
    }

  }
</script>

<style type="text/css">
  
</style>