<template>
  <div class="detail-params" v-if="Object.keys(itemParams).length!==0">
    <table class="aboutSize">
      <tr v-for="(item,indexx) in itemParams.rule.tables[0]" :key="indexx">
        <td v-for="(i,indexy) in item" :key="indexy">{{i}}</td>
      </tr>
    </table>
    <table class="aboutGoods">
      <tr v-for="(item,index) in itemParams.info.set" :key="index">
        <td class="itemKey">{{item.key}}</td>
        <td class="itemValue">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props:{
      itemParams:{
        type:Object,
        default(){
          return{}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    padding: 20px 10px;
    border-bottom: 5px solid #f2f5f8;
  }
  table{
    width: 100%;
    border-collapse: collapse;
  }
 tr  {
     height: 49px;
     padding: 5px;
     border-bottom: 2px solid #f0f0f0;
  }
   td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }
  .itemKey {
    width: 25%;
  }
  .itemValue {
    color: var(--color-high-text);
  }

</style>