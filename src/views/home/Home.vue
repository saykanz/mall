<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物车</div></nav-bar>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scroll="currentScroll"
            @pullingUp="loadMore" >
      <home-swiper  class="home-swiper" :swiper="banner" @swiperImageLoad="swiperImageLoad" />
      <home-recommend :recommend="recommend"/>
      <home-weeky/>
      <tab-control :title="['流行','新款','精选']" @tabControl="tabControl"/>
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top class="back-top" @click.native="backTop" v-show="backShow"/>
  </div>
</template>

<script>
  // 自己写的的组件引入
  import NavBar from "../../components/common/navBar/NavBar";
  import HomeSwiper from "./homeComps/HomeSwiper";
  import HomeRecommend from "./homeComps/HomeRecommend";
  import HomeWeeky from "./homeComps/HomeWeeky";
  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goodsList/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";
  
  import {debounce} from "../../common/const";

  // 引入的第三方插件
  import Scroll from "../../components/common/scroll/Scroll";
  
  // 引入的数据请求
  import {getHomeMultiData,getGoodsInfo} from "../../network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeWeeky,
      TabControl,
      GoodsList,
      BackTop,
      Scroll,
    },
    data(){
      return {
        banner:[],
        recommend:[],
        currentType:'pop',
        goods:{
          'pop':{page:1,list:[]},
          'new':{page:1,list:[]},
          'sell':{page:1,list:[]},
        },
        backShow:false
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    created() {
      //请求轮播图数据和推荐部分的数据
     this._getHomeMultiData();
      //请求商品列表的数据
      this._getGoodsInfo('pop')
      this._getGoodsInfo('new')
      this._getGoodsInfo('sell')
    },
    activated(){
      this.$refs.scroll.refresh();
    },
    mounted(){
      // 图片加载的监听
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on('itemImage', () => {
        refresh()
      })
    },
    
    methods:{
      /**
       * 网络相关的方法
       * @private
       */
      _getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banner = res.data.banner.list;
          this.recommend= res.data.recommend.list
        })
      },
      _getGoodsInfo(type){
        const page = this.goods[type].page;
        getGoodsInfo(type,page).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page++;
          
          this.$refs.scroll.finishPullUp()
        })
        
  },
      /**
       * 事件相关的方法
       */
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      currentScroll(position){
        this.backShow = (-position.y)>1000;
      },
      swiperImageLoad(){
        this.$refs.scroll.refresh()
      },
      tabControl(index){
         switch (index) {
           case 0 :
             this.currentType = 'pop';
             break;
           case 1 :
             this.currentType = 'new';
             break;
           case 2 :
             this.currentType = 'sell';
             break;
         }
      },
      loadMore() {
        this._getGoodsInfo(this.currentType)
      }
    },
  }
</script>

<style scoped>
  #home {
    position: relative;
  }
.nav-bar {
  position: relative;
  color: white;
  background-color: #ff8198;
}

  .content {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
  }
  .back-top {
    position: fixed;
    right: 30px;
    bottom: 72px;
    z-index: 9;
  }
</style>