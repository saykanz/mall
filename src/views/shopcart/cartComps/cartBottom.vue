<template>
  <div class="cart-bottom">
    <check-button class="check-button"></check-button>
    <span class="select-all">全选</span>
    <span>合计：{{totalPrice}}</span>
    <span class="calculate">去计算{{checkLength}}</span>
  </div>
</template>

<script>
  import checkButton from "./checkButton";
  import {mapGetters} from 'vuex'
  export default {
    name: "cartBottom",
    components:{
      checkButton
    },
    computed:{
      ...mapGetters(['cartLength',]),
      totalPrice(){
        const cartList = this.$store.getters.cartList
        return cartList.filter(item=>{
          return item.isChecked
        }).reduce((preValue,item)=>{
         return preValue+item.price*item.counter
        },0).toFixed(2)
      },
      checkLength() {
        return this.$store.state.cartList.filter(item=>item.isChecked).length
      },
    }
  }
</script>

<style scoped>
.cart-bottom {
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 49px;
  height: 40px;
  width: 100%;
  line-height: 40px;
  background-color:#eeeeee ;
}
  .check-button {
    position: absolute;
    top:-28px;
    left: 12px;
    width: 24px;
    height: 24px;
    margin-right: 3px;
  }
  .select-all {
    margin: 0 25px 0 43px;
  }
  .calculate {
    position: absolute;
    right: 0;
    padding: 0 15px;
    background-color: #ff4500;
  }
</style>