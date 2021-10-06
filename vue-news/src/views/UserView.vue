<template>
  <div>
      <user-profile :info="userInfo">
        <div slot="username">{{ userInfo.id }}</div>
        <span slot="karma">{{ userInfo.karma }}</span>
        <!-- tempplate은 태그없이 text만 들어간다. -->
        <span slot="time">Joined {{ userInfo.created }}</span> 
        
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