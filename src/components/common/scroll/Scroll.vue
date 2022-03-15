<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name: "Scroll",
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default: false
      }
    },
    data(){
      return {
        scroll:null,
      }
    },
    mounted() {
      this.scroll = new  BScroll(this.$refs.wrapper,{
       click:true,
        /*当probetype的取值：
        0：不监测
        1：在特定的时候监测
        2：手指滑动的时候监测
        3：手指滑动后，因为惯性滑动的距离仍然被监测*/
       probeType:this.probeType,
        // 上啦加载，需要配合 finnishPull,提醒页面此次的加载完成，准备下一次的
        pullUpLoad:this.pullUpLoad,
    })
      
      // 监听滚动的位置
      if (this.probeType===2||this.probeType===3) {
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
        })
      }
      
      //监听上啦加载更多
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
      
    },
    
    methods:{
      refresh(){
       this.scroll && this.scroll.refresh();
      },
      scrollTo(x,y,time=500){
        this.scroll&&this.scroll.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>