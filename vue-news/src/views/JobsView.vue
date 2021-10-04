<template>
  <div>
    <ul class="jobs-list">
      <li v-for="item in this.$store.state.jobs" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.type }}
        </div>

        <!-- 기타 영역  -->
        <div>
          <p class="jobs-title">
            <a :href="item.url">
              {{ item.title }}
            </a>
          </p>
          <small class="link-text">
            {{ item.time_ago}}, <a :href="item.url">{{ item.domain }}</a>
          </small>
        </div> 
      </li>
    </ul>    
  </div>
</template>

<script>
// import { fetchJobsList } from '../api/index.js';

export default {
  // data() {
  //     return {
  //       jobs: []
  //     }
  //   },
    created() {
      this.$store.dispatch('FETCH_JOBS');
      // fetchJobsList()
      //   .then(response => this.jobs = response.data )
      //   .catch(error => console.log(error));
    },
}
</script>

<style scoped>
.jobs-list {
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