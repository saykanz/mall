<template>
  <div class="goods-list" >
    <goods-list-item  v-for="(item,index) in goods" :goodsItem="item" :key="index"/>
  </div>
</template>

<script>
  import GoodsListItem  from "./GoodsListItem";
  export default {
    name: "GoodsList",
   props:{
     goods:{
       type:Array,
       default(){
         return []
       }
     }
   },
    components:{
      GoodsListItem
    }
  }
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px ;
  width: 100%;
  transform: none !important;
}
</style>