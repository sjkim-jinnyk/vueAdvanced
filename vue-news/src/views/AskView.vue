<template>
  <div>
      <div v-for="item in ask" :key="item.id">{{ item.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from '../api/index.js';

import { mapState, mapGetters } from 'vuex'; // 2.

export default {

  // data() {
  //     return {
  //       ask: []
  //     }
  //   },
    computed: {
      // 1.
      // ask() {
      //   return this.$store.state.ask;
      // }
      
      // 2.
      // ...mapState({
      //   ask: state => state.ask
      // }),
      
      // 3.
      // ...mapGetters ({
      //   ask : 'ask'
      // }),

      // 4.
      ...mapGetters([
        'ask'
      ]),
    },
    // 컴포넌트가 생성되자마자 실행되는 로직
    created() {
      this.$store.dispatch('FETCH_ASK');
    //   fetchAskList()
    //     .then(response => this.ask = response.data )
    //     .catch(error => console.log(error));
    },
}
</script>

<style>

</style>