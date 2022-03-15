import {require} from "./require";

//请求详情页的数据
export function getDetail(iid) {
  return require({
    url:'detail',
    params:{
      iid
    }
  })
}
//请求热门推荐的数剧
export function getRecommend() {
  return require({
    url:'/recommend'
  })
  
}
// 请求推荐模块的数据
export class Goods {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services
  }
}
//请求商家模块的数据
export class ShopInfo {
  constructor(shopInfo){
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.title = shopInfo.name;
    this.score = shopInfo.score;
    this.logo = shopInfo.shopLogo
  }
}

