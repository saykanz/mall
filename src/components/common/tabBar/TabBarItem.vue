<template>
  <div class="tab-bar-item" @click="tabClick">
    <div class="icon" v-show="!isActive" ><slot name="icon"></slot></div>
    <div class="active-icon" v-show="isActive"><slot name="active-icon"></slot></div>
    <div class="text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      // link主要是动态的决定路由的跳转,跳转到响应的页面
      link:String,
      // 封装的更加彻底，如果开发者用组件的时候，直接传一个颜色，不需要改变源代码
      activeColor:{
        type:String,
      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.link)!==-1
      },
      activeStyle() {
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      // 跳转到相应的页面，
      // 如果使用的是replace方法则需要在相应位置手动判断,
      tabClick(){
        this.$router.push(this.link)
      }
    }
  }
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
 .icon img,.active-icon img {
   margin-top: 3px;
   width: 24px;
   height: 24px;
 }
.tab-bar-item .text {
  font-size: var(--font-size);
}
</style>