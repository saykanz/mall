<template>
  <div class="detail-common" v-if="Object.keys(userCommen).length!==0">
     <header>用户评价</header>
     <div class="user">
       <img :src="userCommen.user.avatar" alt="">
       <span>{{userCommen.user.uname}}</span>
     </div>
    <div>{{userCommen.content}}</div>
    <div class="user-bottom">
      <span>{{userCommen.created | showDate}}</span>
      <span>{{userCommen.style}}</span>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "../../../common/const";

  export default {
    name: "DetailCommon",
    props:{
      userCommen:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value) {
        let date = new Date(value*1000);
        return formatDate(date,'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detail-common {
    padding: 0 10px;
    border-bottom: 5px solid #f2f5f8;
  }
header {
  padding: 15px 0;
  border-bottom: 3px solid #f2f5f8;
  font-size: 18px;
}
.user {
  padding: 15px 0;
}
  .user img {
    margin-right: 10px;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    vertical-align: middle;
  }
  .user-bottom {
    padding: 15px 0;
  }
  .user-bottom span:first-child {
    padding-right: 10px;
  }
</style>