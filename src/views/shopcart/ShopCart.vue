<template>
  <div>
    <nav-bar class="cartHeader"><div slot="center" >购物车</div></nav-bar>
    <div class="content">
      <cart-items v-for="item in cartList" :product="item">{{item}}</cart-items>
    </div>
    <cart-bottom/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CartItems from "./cartComps/CartItems";
  import cartBottom from "./cartComps/cartBottom";
  
  import {mapGetters} from 'vuex'
  export default {
    name: "ShopCart",
    components:{
      NavBar,
      CartItems,
      cartBottom
    },
    computed:{
      // 通过辅助函数将getters里面的cartLength映射到computed里面
      ...mapGetters([
          'cartLength',
          'cartList'
      ])
    }
  }
</script>

<style scoped>
.cartHeader {
  background-color: #ff8198;
  font-size: 20px;
  color: white;
}
  .content {
    margin-top: 44px;
  }
</style>