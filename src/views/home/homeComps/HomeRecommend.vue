<template>
  <div class="home-recommend">
    <div class="item" v-for="(item,index) in recommend" :key="index" >
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props:{
      recommend:{
        type:Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
.home-recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 15px 0;
  border-bottom: 8px solid #eee;
  width: 100%;
}
.item {
  flex: 1;
}
  .item img {
    width: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
</style>