import {require} from "./require";

export function getHomeMultiData() {
  
  return require({
    url: '/home/multidata'
  })
}

export function getGoodsInfo(type,page) {
  return require({
    url:'/home/data',
    params:{
      type,page
    }
  })
}