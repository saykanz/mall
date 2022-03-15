export default {
  addCart(context,payload){
    // 查找cartlist中是否已有某商品
    let oldProduct = context.state.cartList.find(item=>item.iid===payload.iid)
    if(oldProduct){
      context.commit('addCounter',oldProduct)
    }else{
      context.commit('addCarts',payload)
      payload.counter=1
    }
    
  }
}