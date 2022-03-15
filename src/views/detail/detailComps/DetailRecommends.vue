<template>
  <div class="recommends">
    <div class="itemName">热门推荐</div>
    <goods-list :goods="recommend"/>
  </div>
</template>

<script>
import GoodsList from "../../../components/content/goodsList/GoodsList";
  export default {
    name: "DetailRecommends",
    components:{
      GoodsList
    },
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommends {
    padding: 15px 0;
  }
.itemName {
  padding-bottom: 15px;
}
</style>