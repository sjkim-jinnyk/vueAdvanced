<template>
  <div>
      <user-profile></user-profile>
      <!-- <p>name : {{ userInfo.id}}</p>
      <p>karma : {{ userInfo.karma}}</p>
      <p>create : {{ userInfo.created}}</p> -->
  </div>
</template>

<script>
// import axios from 'axios';
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile,
    },
    // computed:{
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
    created() {
        const userName = this.$route.params.id;
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); => api/index.js에 fetch
        this.$store.dispatch('FETCH_USER', userName);
    }
    
}
</script>

<style>

</style>