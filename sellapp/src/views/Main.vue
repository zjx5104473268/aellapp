<template>
    <div>
         <div class="header" :style="{backgroundImage:`url(${data.avatar})`}">
             <div class="header-top">
                 <Avatar style="background-size: 100% 100%;" :style="{backgroundImage:`url(${data.avatar})`}" shape="square"  size="100"/>
                 <div class="header-rigth">
                     <p><img src="../assets/imgs/brand@2x.png" alt=""><span>{{data.name}}</span></p>
                     <p>{{data.description}}/{{data.deliveryTime}}分钟送达</p>
                     <p><img src="../assets/imgs/decrease_2@2x.png" alt=""><span>在线支付满28减5，满50减10</span></p>
                 </div>
         </div>
             <div class="header-botton"><img src="../assets/imgs/bulletin@2x.png" alt=""><p>{{data.bulletin}}</p><span>></span></div>
         </div>
         
         <div class="index-nav">
             <router-link to="/goods">商品</router-link>
             <router-link to="/evaluate">评价</router-link>
             <router-link to="/merchant">商家</router-link>
         </div>
         <!-- 路由出口 -->
         <router-view></router-view>
         <div id="shop-bar">
             <div class="img"><Icon type="md-cart" size="40"/></div>
             <p>￥0 | 另配送费￥4元</p>
             <div class="btn">￥20元起送</div>
         </div>
    </div>
</template>
<script>
import { getseller } from "../api/apis.js";
export default {
  data() {
    return {
      data: {},
    };
  },
  created() {
    getseller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 182px;
  background-color: #ccc;
  background-size: 100% 100%;
  // filter: blur(3px);
  .header-top {
    padding: 24px 24px 15px;
    display: flex;
    .header-rigth {
      color: white;
      p {
        line-height: 38px;
      }
      p:nth-of-type(1) {
        font-size: 20px;
        line-height: 20px;
        img {
          width: 38px;
          margin-right: 8px;
        }
      }
      p:nth-of-type(2) {
        font-size: 14px;
      }
      p:nth-of-type(3) {
        font-size: 14px;
        img {
          width: 18px;
          margin-right: 8px;
        }
      }
    }
    .ivu-avatar {
      margin-right: 20px;
    }
  }
  .header-botton {
    display: flex;
    padding: 10px 10px;
    background-color: rgb(114, 114, 114);
    color: white;
    p {
      width: 90%;
      height: 18px;;
      white-space: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
    }
    img {
      width: 22px;
      margin-right: 8px;
    }
  }
}
.index-nav {
  height: 40px;
  display: flex;
  justify-content: space-around;
  line-height: 40px;
  a{
      color: #141c27;
      font-size: 18px;
  }
}
#shop-bar {
  position: fixed;
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  bottom: 0;
  background-color: #141c27;
  padding-left:30px;
  .img{
      position: relative;
      top: -10px;
      border-radius: 50%;
      border: 10px solid#141c27 ; 
      background-color: #2a343c;
  }
  p{
      line-height: 60px;
      font-size: 16px;
  }
  .btn{
      margin-left: 20px;
      height: 100%;
      width: 40%;
      background-color: #2a353a;
      color: #979a9a;
      line-height: 60px;
      text-align: center;
      font-size: 22px;
  }
}
</style>
