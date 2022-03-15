<template>
  <div class="goods-info" v-if="Object.keys(goods).length!== 0">
     <div class="title"> {{goods.desc}}</div>
    <div class="price">
      <span class="newPrice">{{goods.price}}</span>
      <span class="oldPrice"><del>{{goods.oldPrice}}</del></span>
      <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="about">
      <span class="item">{{goods.columns[0]}}</span>
      <span class="item">{{goods.columns[1]}}</span>
      <span class="item">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="services">
        <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
.goods-info {
  padding: 20px 0px 0;
  border-bottom: 6px solid #f2f5f8;
}
.price {
  padding: 10px 0 15px 0;
}
.newPrice {
  font-size: 28px;
  color: var(--color-high-text);
}
  .oldPrice {
    padding: 5px;
    font-size: 12px;
  }
  .discount {
    position: relative;
    top: -8px;
    right: 0;
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    line-height: 15px;
  }
  .about {
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #f8f8f8;
    padding-bottom: 5px;
  }
  .item{
    flex: 1;
  }
  .services{
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 14px;
    color: #333333;
  }
  .services img {
    width: 12px;
    height: 12px;
  }
</style>