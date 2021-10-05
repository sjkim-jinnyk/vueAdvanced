<template>
  <div>
      <user-profile :info="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <div slot="karma">{{ userInfo.karma }}</div>
        <!-- tempplate은 태그없이 text만 들어간다. -->
        <template slot="time">{{ userInfo.created }}</template> 
        
      </user-profile>
  </div>
</template>

<script>
// import axios from 'axios';
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile,
    },
    computed:{
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;
        // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`); => api/index.js에 fetch
        this.$store.dispatch('FETCH_USER', userName);
    }
    
}
</script>

<style>

</style>