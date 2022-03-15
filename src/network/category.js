import {require} from "./require";

export function getCategory() {
  return require({
    url:"category",
  })
}

export function getCateMenu(maitKey) {
  return require({
    url:'/subcategory',
    params:{
      maitKey
    }
  })
}

export function getCateRecommend(miniWallkey,type) {
  return require({
    url:'/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}