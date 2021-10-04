<template>
  <div>
    <ul class="news-list">
      <li v-for="item in this.$store.state.news" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points }}
        </div>

        <!-- 기타 영역  -->
        <div>
          <p class="news-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
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

<style scoped>
.news-list {
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