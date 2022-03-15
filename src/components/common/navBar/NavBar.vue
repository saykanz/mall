<template>
  <div class="nav-bar">
    <div class="nav-left"> <slot name="left"></slot> </div>
    <div class="nav-center"><slot name="center"></slot></div>
    <div class="nav-right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar {
  display: flex;
  
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  z-index: 9;
}
.nav-center {
  flex: 1;
}
.nav-left,.nav-right {
    width: 60px;
  }
</style>