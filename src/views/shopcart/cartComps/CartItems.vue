<template>
  <div class="cart-list-item">
    <check-button :is-checked="product.isChecked" @checkButton="checkButton" />
    <div class="product-img">
      <img :src="product.img" alt="">
    </div>
    <div class="product-info">
      <div class="title">{{product.title}}</div>
      <div class="desc">{{product.desc}}</div>
      <div class="product-bottom">
        <span class="price">{{product.price}}元</span>
        <span class="count">x{{product.counter}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import checkButton from "./checkButton";
  export default {
    name: "CartListItem",
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    components:{
      checkButton
    },
    methods:{
      checkButton:function () {
        console.log('clicked');
        this.product.isChecked = !this.product.isChecked
      }
    }
  }
</script>

<style scoped>
  .cart-list-item {
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 2px solid #e9e7e9;
  }
  .product-img img {
    margin-right: 10px;
    width: 66px;
    height: 88px;
    border-radius: 5px;
  }
  .product-info {
    overflow: hidden;
  }
  .title,.desc {
    padding-bottom: 18px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .title{
    font-size: 18px;
  }
  .desc {
    font-size: 14px;
  }
  .product-bottom {
    position: relative;
  }
  .price {
    color: var(--color-high-text);
  }
  .count {
    position: absolute;
    right: 0;
    bottom: 0;
  }
</style>
