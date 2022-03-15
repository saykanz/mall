<template>
  <div class="detail-show" v-if="Object.keys(dressShow).length!==0">
    <div class="header">
      <div class="start"></div>
      <div class="center">{{dressShow.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="key">{{dressShow.detailImage[0].key}}</div>
    <div class="showImages" v-for="(item,index) in dressShow.detailImage[0].list" :key="index">
      <img :src="item" alt="" @load="detailImageShow">
    </div>
  </div>
</template>

<script>

  export default {
    name: "DetailShow",
    props:{
      dressShow:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {
        counter:0,
        imgLength:0
      }
    },
    methods:{
      detailImageShow(){
        // 当所有的图片都加载出来后，对数据进行传递
        /*if (++this.counter===this.imgLength){
          this.$emit('detailImageShow')
        }*/
        this.$emit('detailImageShow')
      }
    },
    /*watch:{
      detailImgLength(){
        // 获取图片的张数
        this.imgLength = this.dressShow.detailImage[0].list.length
      }
    }*/
  }
</script>

<style scoped>
  .detail-show {
    padding: 20px 0;
  }
  .header {
     margin:0 10px;
    position: relative;
  }
.start,.end {
  width: 25%;
  height: 1px;
  border-bottom: 2px solid #dadada;
}
.end {
  position: absolute;
  right: 0;
  bottom: 0;
}
  .start::after {
    content: '';
    position: absolute;
    top: -3px;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  .end::before {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 5px;
    height: 5px;
    background-color: black;
  }
  .center {
    padding: 10px;
  }
  .key {
    margin:0 10px;
    color: black
  }
  .showImages img  {
    width: 100%;
  }
</style>