<template>
  <div class="menu">
    <div v-for="(item,index) in menu"
         :key="index"
         @click="clickMenu(index)"
         :class="{'isActive':index===currentIndex}"
         class="menu-item"
    >
      {{item.title}}
    </div>
  </div>
</template>

<script>
  export default {
    name: "CateMenu",
    props:{
      menu:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return  {
        currentIndex:0
      }
    },
    methods:{
      clickMenu(index){
        this.currentIndex = index;
        this.$emit('clickMenu',index)
      }
    }
  }
</script>

<style scoped>
.menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 25%;
  margin-top: 44px;
  text-align: center;
}
.menu-item {
  padding: 10px;
}
  .isActive {
    border-left: 3px solid #ff5777;
    background-color: #fff;
  }
</style>