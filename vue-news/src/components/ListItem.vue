<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" :key="item.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ item.points || 0 }}
        </div>

        <!-- 기타 영역  -->
        <div>
        <!-- 타이틀 영역 -->
          <p class="news-title">
              <!-- item.domain은 news랑 jobs만 있기 때문에 밑 template은 news랑 jobs에서만 보인다.-->
            <template v-if="item.domain">
              <a :href="item.url">
                {{ item.title }}
              </a>
            </template>
            <!-- 여기서는 domain이 없는 ask에서만 보인다. -->
            <template v-else>
              <router-link :to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago}} 
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link-text">by {{ item.user }}</router-link>
            <a :href="item.url" v-else> {{ item.domain }} </a>
          </small>
        </div>
        
        
      </li>
    </ul>    
  </div>
</template>

<script>
export default {

    computed: {
        listItems() {
          return this.$store.state.list;
        }
    }
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