<template>
  <div class="tab-control">
    <div class="item"
         v-for="(item,index) in title"
         :key="index"
         @click="tabControl(index)" >
      <span :class="{'active':currentIndex===index}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data(){
      return {
        currentIndex:0
      }
    },
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    methods:{
      tabControl(index){
        this.currentIndex = index;
        this.$emit('tabControl',index)
      }
    }
  }
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  padding: 20px 0 10px 0;
}
.item {
  flex: 1;
}
 .active{
   padding: 3px;
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>