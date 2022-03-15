<template>
  <div class="detail">
    <detail-nav-bar @navClick="navClick" ref="nav"/>
    <scroll class="content" ref="scroll" @scroll="currentScroll" :probe-type="3">
      <detail-swiper :swiper-images="swiperImages"/>
      <detail-goods-info :goods="goods"/>
      <detail-shop :shop-info="shopInfo"/>
      <detail-show :dressShow="dressShow" @detailImageShow="detailImageShow"/>
      <detail-params :itemParams="params" ref="params"/>
      <detail-common :userCommen="userCommen" ref="userComment"/>
      <detail-recommends :recommend="recommends" ref="recommends"/>
    </scroll>
    <detail-bottom @addToCart="addToCart"/>
    <back-top class="back-top" @click.native="backTop" v-show="backShow"/>
  </div>
</template>

<script>
  import DetailNavBar from "./detailComps/DetailNavBar";
  import DetailSwiper from "./detailComps/DetailSwiper";
  import DetailGoodsInfo from "./detailComps/DetailGoodsInfo";
  import DetailShop from "./detailComps/DetailShop";
  import DetailShow from "./detailComps/DetailShow";
  import DetailParams from "./detailComps/DetailParams";
  import DetailCommon from "./detailComps/DetailCommon";
  import DetailRecommends from "./detailComps/DetailRecommends";
  import DetailBottom from "./detailComps/DetailBottom";
  import BackTop from "../../components/content/backTop/BackTop";
  import {getDetail,Goods,ShopInfo,getRecommend} from "../../network/detail"
  

  import Scroll from "../../components/common/scroll/Scroll";
  import {imageLoadListerMixin} from "../../common/utils";
  import {debounce} from "../../common/const";

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailGoodsInfo,
      DetailShop,
      DetailShow,
      DetailParams,
      DetailCommon,
      DetailRecommends,
      DetailBottom,
      BackTop,
      Scroll
    },
    data(){
      return {
        iid:null,
        swiperImages:[],
        goods:{},
        shopInfo:{},
        dressShow:{},
        params:{},
        userCommen:{},
        recommends:[],
        backShow:false,
        themePositionY:[],
        getPositionY:null,
        currentIndex:0,
      }
    },
    created(){
      // 保存商品详情的iid
      this.iid = this.$route.params.iid
      //请求详情页的数据
      getDetail(this.iid).then(res=>{
        console.log(res);
        //请求轮播图图片
        const data = res.result
        this.swiperImages = data.itemInfo.topImages
        // 请求商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //请求店铺信息
        this.shopInfo = new ShopInfo(data.shopInfo)
        //请求详情页穿着效果展示模块
        this.dressShow = data.detailInfo
        //请求参数模块信息
        this.params = data.itemParams
        //请求用户评价模块
        this.userCommen = data.rate.list[0]
      });
      
      //请求热门推荐部分的数据
      getRecommend().then(res=>{
        console.log(res);
        this.recommends=res.data.list
      })
      this.getPositionY=debounce(()=>{
        this.themePositionY=[];
        this.themePositionY.push(0)
        this.themePositionY.push(this.$refs.params.$el.offsetTop)
        this.themePositionY.push(this.$refs.userComment.$el.offsetTop)
        this.themePositionY.push(this.$refs.recommends.$el.offsetTop)
        this.themePositionY.push(Number.MAX_VALUE)
      },500)
    },
    mixins:[imageLoadListerMixin],
    methods:{
      detailImageShow(){
        this.refresh()
        this.getPositionY()
      },
      backTop(){
        this.$refs.scroll.scrollTo(0,0)
      },
      currentScroll(position){
        this.backShow = (-position.y)>1000;
        let positonY = -position.y
        let len = this.themePositionY.length
        for(let i = 0;i<len;i++){
          if(this.currentIndex!==i&&(positonY<this.themePositionY[i+1]&&positonY>=this.themePositionY[i])){
             this.currentIndex = i;
             this.$refs.nav.currentIndex = this.currentIndex
          }
        }
      },
      navClick(index){
      this.$refs.scroll.scrollTo(0,-this.themePositionY[index],500)
      },
      addToCart() {
        const product = {};
        product.iid = this.iid
        product.desc = this.goods.desc
        product.img = this.swiperImages[0]
        product.price = this.goods.realPrice
        product.title = this.goods.title
        // 添加商品到store中
        // 1、在mutations中修改state的状态，但是这种方式不易调试，不易追踪
        // this.$store.commit('addCart',product)
        // 2、通过actions和mutations修改state的值，这种方式易调试，易追踪
        this.$store.dispatch('addCart',product)
      }
    }
  }
</script>

<style scoped>
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 60px;
}
.back-top {
  position: fixed;
  right: 30px;
  bottom: 72px;
  z-index: 9;
}
</style>