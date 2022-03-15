export default {
  addCounter(state,payload){
    payload.counter++
  },
  addCarts(state,payload) {
    state.cartList.push(payload)
    payload.isChecked=true
  }
}