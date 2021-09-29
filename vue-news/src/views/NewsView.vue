<template>
  <div>
      <div v-for="user in this.$store.state.news" :key="user.id">{{ user.title }}</div>
  </div>
</template>

<script>
//import { fetchNewsList } from '../api/index.js';

export default {
  // data() {
  //   return {
  //     news: []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  //   fetchNewsList()
  //     .then(response => this.users = response.data )
  //     .catch(error => console.log(error))
  },
}
</script>

<style>

</style>