<template>
  <div class="check-button" :class="{'selector-active':isChecked}" @click="checkButton">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isChecked:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      checkButton(){
        this.$emit('checkButton')
      }
    },
  }
</script>

<style scoped>
  .check-button {
    margin-right: 5px;
    margin-top: 34px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #a3a3a5;
    background-color: var(--color-tint) ;
    cursor: pointer;
  }
  img {
    height: 24px;
    width: 24px;
  }
  .selector-active {
    vertical-align: center;
    background-color: var(--color-tint);
    border: 2px solid white;
  }
</style>
