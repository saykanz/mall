<template>
  <swiper>
    <swiper-item v-for="(item,index) in swiper" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
  import Swiper from "../../../components/common/swiper/Swiper";
  import SwiperItem from "../../../components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props:{
      swiper:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperImageLoad(){
        this.$emit('swiperImageLoad')
      }
    }
  }
</script>

<style scoped>

</style>