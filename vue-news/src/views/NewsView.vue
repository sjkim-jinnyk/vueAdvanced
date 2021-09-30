<template>
  <div>
      <p v-for="item in this.$store.state.news" :key="item.id">
        <a :href="item.url">
          {{ item.title }}
        </a>
        <small>{{ item.time_ago}} by {{ item.user }}</small>
      </p>
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