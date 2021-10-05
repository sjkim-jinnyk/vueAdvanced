<template>
  <div>
    <div class="user-container">
    <div>
        <i class="fas fa-user"></i>
    </div>
    <div class="user-description">
        <!-- <div>username : {{ info.id }}</div> -->
        <slot name="username"></slot>
        <div>
            <slot name="karma"></slot>
        </div>
        <div class="time">
            <!-- time : {{ info.created }} -->
            <slot name="time"></slot>
        </div>
             
    </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        info : Object,
    },
    // computed:{
    //     userInfo() {
    //         return this.$store.state.user;
    //     }
    // },
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