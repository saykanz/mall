<template>
  <div>
     <nav-bar class="cate-bar"><div slot="center">商品分类</div></nav-bar>
    <cate-menu :menu="totalCategories" class="cate-menu" @clickMenu="clickMenu"/>
    <cate-detail :menu-detail="menuDetail"/>
    <tab-control :title="['综合','新品','销量']"
                 class="cate-tab"
                 @tabControl="tabClick"
    />
    <goods-list :goods = 'recommendType[currentType]' class="cate-good"/>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import CateMenu from "./Catecomps/CateMenu";
  import CateDetail from "./Catecomps/CateDetail";
  import TabControl from "../../components/content/tabControl/TabControl";
  import {getCategory,getCateMenu,getCateRecommend} from "../../network/category";
  import GoodsList from "../../components/content/goodsList/GoodsList";

  export default {
    name: "Category",
    data(){
      return{
        totalCategories:[],
        menuDetail:[],
        recommendType:{
         'pop':[],
         'new':[],
         'sell':[],
        },
        currentIndex:0,
        currentType:'pop'
      }
    },
    components:{
      NavBar,
      CateMenu,
      CateDetail,
      TabControl,
      GoodsList
    },
    created() {
      // 请求分类数据
      this._getCategory()
    },
    methods:{
      /**
       * 网络相关
       * @private
       */
      _getCategory() {
        getCategory().then(res=>{
          console.log(res);
          this.totalCategories = res.data.category.list
          this._getCateMenu(0)
        })
      },
     _getCateMenu(index){
        this.currentIndex = index
        let maitKey = this.totalCategories[index].maitKey
        getCateMenu(maitKey).then(res=>{
          console.log(res);
          this.menuDetail = res.data.list
          this._getCateRecommend('pop')
          this._getCateRecommend('new')
          this._getCateRecommend('sell')
        })
     },
      _getCateRecommend(type){
        const miniWallkey = this.totalCategories[this.currentIndex].miniWallkey
        getCateRecommend(miniWallkey,type).then(res=>{
          console.log(res);
          this.recommendType[type] = res
        })
      },
      /**
       *
       *事件相关
       */
      clickMenu(index) {
        this._getCateMenu(index)
      },
      tabClick(index){
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
      }
    }
  }
</script>

<style scoped>
.cate-bar{
  background-color: var(--color-high-text);
  font-weight: 700;
  color: #fff;
}
  .cate-menu {
    background-color: #f6f6f6;
  }
  .cate-tab{
    width: 75%;
    margin-left: 25%;
    margin-top: 20px;
  }
  .cate-good {
    position: relative;
    top: 0;
    left: 25%;
    right: 0;
    bottom: 49px;
    width: 75%;
    display: flex;
    flex-wrap: wrap;
  }
</style>