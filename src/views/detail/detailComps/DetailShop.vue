<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length!==0">
    <div class="top">
      <img :src="shopInfo.logo" alt="">
       <span class="title">{{shopInfo.title}}</span>
    </div>
    <div class="center">
      <div class="left item">
           <div class="cfav lc">
             <div class="num">{{shopInfo.cSells | showSells}}</div>
             <div>总销量</div>
         </div>
          <div  class="goods ">
            <div class="all">{{shopInfo.cGoods}}</div>
            <div>全部宝贝</div>
          </div>
      </div>
      <div class="right item">
       <table>
         <tr v-for="(item,index) in shopInfo.score" :key="index">
           <td>{{item.name}}</td>
           <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
           <td class="description" :class="{'description-better':item.isBetter}">{{item.isBetter ? '高':'低'}}</td>
         </tr>
       </table>
      </div>
    </div>
    <div class="bottom"><a href="#">进店逛逛</a> </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props:{
      shopInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showSells(value){
        if (value>=10000){
          return (value/10000).toFixed(1)+'万'
        }
          return value
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 20px 10px;
    border-bottom: 5px solid #f2f5f8;
  }
.top img {
  width: 45px;
  height: 45px;
  vertical-align: middle;
  border-radius: 50%;
  border:2px solid #f2f5f8;
}
.center {
  display: flex;
}
.item {
  flex: 1;
}
  .title {
    padding-left: 15px;
    font-size: 20px;
  }
  .left {
    display: flex;
    border-right: 3px solid #f2f5f8;
    font-size: 12px;
    text-align: center;
  }
  .cfav,.goods {
    flex: 1;
  }
 .left .num,.left .all {
    padding: 15px;
    font-size: 18px;
  }
  
  tr,td {
    font-size: 15px;
    padding: 5px;
  }
 .score{
   color: rgb(94, 167, 50);
 }
  .score-better{
    color: rgb(241, 62, 58);
  }
  .description {
    color: white;
    background-color: rgb(94, 167, 50);
  }
  .description-better{
    color:white ;
    background-color:  rgb(241, 62, 58);
  }
  .bottom {
    text-align: center;
    margin-top: 10px;
  }
  .bottom a{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>