<template>
  <div class="goods-list-item" @click="itemGoodsClick">
    <img :src="showImage" alt="" @load="itemImage">
    <div class="title">{{goodsItem.title}}</div>
    <div class="item-bottom">
      <span class="price">{{goodsItem.price}}</span>
      <span>{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:{
      goodsItem:{
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      itemImage(){
       this.$bus.$emit('itemImage')
      },
      itemGoodsClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
      }
    },
    computed:{
      showImage(){
        return  this.goodsItem.img||this.goodsItem.image || this.goodsItem.show.img
      }
    }
  }
</script>

<style scoped>
.goods-list-item {
  width: 49%;
  font-size: 12px;
}
.goods-list-item img  {
  border-radius: 10px;
  width: 100%;
}
.item-bottom {
  padding-bottom: 5px;
  text-align: center;
}
.goods-list-item .title {
  padding: 3px 0;
  text-overflow-ellipsis: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
  .goods-list-item .price {
    color: var(--color-high-text);
  }
</style>