<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
//import { fetchNewsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';

export default {
  // data() {
  //   return {
  //     news: []
  //   }
  // },
  // created() {
  //   this.$store.dispatch('FETCH_NEWS');
  //   fetchNewsList()
  //     .then(response => this.users = response.data )
  //     .catch(error => console.log(error))
  // },
  components: {
    ListItem,
  }
}
</script>

<style>

</style>