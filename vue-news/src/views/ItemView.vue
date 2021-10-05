<template>
  <div>
    <section>
      <!-- 사용자 정보 -->
      <user-profile :info="ItemInfo">
        <div slot="username">{{ ItemInfo.user }}</div>
        <template slot="time">{{ ItemInfo.time_ago }}</template>
      </user-profile>
      <!-- <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${ItemInfo.user}`">{{ ItemInfo.user }}</router-link>
          <div class="time">
            {{ ItemInfo.time_ago }}
          </div>
        </div>
      </div> -->
    </section>
    <section>
       <h2> {{ ItemInfo.title }} </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
    </section>
      <div v-html="ItemInfo.content">
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: { 
      UserProfile 
  },
  computed: {
    // ItmeInfo()를 mapGetters로 
    ...mapGetters(['ItemInfo']),
    
    // ItemInfo() {
    //   return this.$store.state.item;
    // }
  },
  created() {
      const itemId = this.$route.params.id;
      this.$store.dispatch('FETCH_ITEM', itemId);
  },
}
</script>

<style scoped>
.user-container{
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.time {
  font-size: 0.78rem;
}
.user-description {
  padding-left: 10px;
}

</style>