<template>
  <div class="cate-Detail">
    <div v-for="(item,index) in menuDetail" :key="index" class="menu-detail">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateDetail",
    props:{
      menuDetail:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
 .cate-Detail{
   position: relative;
   top: 44px;
   left: 25%;
   right: 0;
   bottom: 49px;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
  }
  .menu-detail {
    flex: 1;
    display: flex;
    width: 33%;
    padding: 20px 15px;
  }
  .menu-detail img{
    padding-bottom: 20px;
    width: 65px;
    height: 100px;
  }
  .menu-detail p {
    font-size: 12px;
    text-align: center;
  }
</style>