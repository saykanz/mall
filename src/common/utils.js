import {debounce} from "./const";

export const imageLoadListerMixin={
  data(){
    return {
      //将事件总线的bus的回调处理函数保存
      itemImageLoad:null,
      //将refresh进行保存，以便可以在多个组件中调用防抖函数
      refresh:null,
    }
  },
  mounted(){
    this.refresh = debounce(this.$refs.scroll.refresh,200)
    this.itemImageLoad=()=>{
      this.refresh();
    }
    this.$bus.$on('detailImageShow',this.itemImageLoad)
  },
}

