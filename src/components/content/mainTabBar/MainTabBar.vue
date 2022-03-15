<template>
  <div class="main-tab-bar">
     <tab-bar>
       <tab-bar-item link="/home" active-color="#ff5777">
         <img slot="icon" src="~assets/img/tabbar/home.svg" alt="首页" >
         <img slot="active-icon" src="~assets/img/tabbar/home_active.svg" alt="首页" >
         <div slot="text">首页</div>
       </tab-bar-item>
       <tab-bar-item link="/category" active-color="#ff5777">
         <img slot="icon"  src="~assets/img/tabbar/category.svg" alt="分类">
         <img slot="active-icon"  src="~assets/img/tabbar/category_active.svg" alt="分类">
         <div slot="text">分类</div>
       </tab-bar-item>
       <tab-bar-item link="/shopcart" active-color="#ff5777">
         <img slot="icon"  src="~assets/img/tabbar/shopcart.svg" alt="购物车">
         <img slot="active-icon"  src="~assets/img/tabbar/shopcart_active.svg" alt="购物车">
         <div slot="text">购物车</div>
       </tab-bar-item>
       <tab-bar-item link="/profile" active-color="#ff5777">
         <img slot="icon"  src="~assets/img/tabbar/profile.svg" alt="我的">
         <img slot="active-icon"  src="~assets/img/tabbar/profile_active.svg" alt="我的">
         <div slot="text">我的</div>
       </tab-bar-item>
     </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabBar/TabBar";
  import TabBarItem from "../../common/tabBar/TabBarItem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>