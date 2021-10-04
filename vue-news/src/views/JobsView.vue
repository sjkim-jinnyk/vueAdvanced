<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
  // data() {
  //     return {
  //       jobs: []
  //     }
  //   },
    // created() {
    //   this.$store.dispatch('FETCH_JOBS');
      // fetchJobsList()
      //   .then(response => this.jobs = response.data )
      //   .catch(error => console.log(error));
    // },
}
</script>

<style>

</style>