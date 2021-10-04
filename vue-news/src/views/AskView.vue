<template>
  <div>
     <ul class="ask-list">
      <li v-for="item in ask" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>

        <!-- 기타 영역  -->
        <div>
          <p class="ask-title">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="link-text">
            {{ item.time_ago}} by 
            <router-link :to="`/user/${item.user}`" class="link-text">{{ item.user }}</router-link>
          </small>
        </div>
        
        
      </li>
    </ul>        
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

<style scoped>
.ask-list {
  padding: 0;
  margin: 0;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #42B883;
}
.link-text {
  color: #828282;
}
</style>