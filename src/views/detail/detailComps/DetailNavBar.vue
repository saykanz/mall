<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left"><img src="~assets/img/common/back.svg" @click="backHome"></div>
      <div slot="center" class="center">
        <span v-for="(item,index) in titles"
              :key="index" class="item"
              @click="navClick(index)" :class="{'active': currentIndex === index}">{{item}}</span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../../components/common/navBar/NavBar";
  export default {
    name: "DetailNavBar",
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      navClick(index){
        this.currentIndex = index
        this.$emit('navClick',index)
      },
      backHome(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .detail-nav-bar {
    background-color: #fff !important;
  }
  .left {
    width: 100%;
    line-height: 55px;
    text-align: center;
  }
.center {
  display: flex;
}
  .item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>