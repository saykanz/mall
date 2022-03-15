<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  import TabBarItem from "./TabBarItem";
  export default {
    name: "TabBar",
    components:{
      TabBarItem,
    }
  }
</script>

<style scoped>
.tab-bar {
  
  /*flex 布局*/
  display: flex;
  
  /*定位相关*/
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  
  /*自身样式*/
  width: 100%;
  height: 49px;
  text-align: center;
  background-color: #f6f6f6;
}
</style>