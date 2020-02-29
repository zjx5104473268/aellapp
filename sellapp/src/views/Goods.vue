<template>
    <div class="goods-div">
       <div class="left-div">
         <ul class="content">
           <ul  v-for="(v,i) in data" :key="i">
               <li @click="leftbtn(i)" :class="curseler==i?'active':''">
                 <img v-show="v.type==1" src="../assets/imgs/cn01.png"/>
                 <img v-show="v.type==2" src="../assets/imgs/cn02.png"/>
                 {{v.name}}</li>
           </ul>
           </ul>
       </div>
       <div class="rigth-div">
         <ul class="content">
           <ul v-for="(v,i) in data" :key="i" :id="i">
               <p>{{v.name}}</p>
               <li  v-for="(c,i) in v.foods" :key="i">
                   <img :src="c.image" />
                   <div class="wen">
                       <h3>{{c.name}}</h3>
                   <p>{{c.description}}</p>
                   <p>月销售：{{c.sellCount}}，好评率：100%</p>
                   <div class="btn">
                       <div class="btn-left">￥{{c.price}}<span>{{c.rating}}</span></div>
                       <div class="btn-rigth">
                           <!-- <button type="button">—</button>
                           {{num}} -->
                           <Button type="primary" shape="circle" icon="md-add"></Button>
                        </div>
                   </div>
                   
                   
                   </div>
                   </li>
           </ul>
           </ul>
           <!-- <BackTop></BackTop> -->
       </div>
    </div>
</template>

<script>
import { getgoods } from "../api/apis.js";
import BScroll from "better-scroll"; //滚动插件

export default {
  data() {
    return {
      data: [],
      // num: 1,
      curseler: 0,
      rigthdiv:'',
    };
  },
  created() {
    getgoods().then(res => {
      this.data = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.querySelector(".left-div"), { click: true });
    this.rigthdiv=new BScroll(document.querySelector(".rigth-div"));
  },
  methods: {
    leftbtn(i) {
      this.curseler = i;
      this.rigthdiv.scrollToElement(document.getElementById(i),500)
    }
  }
};
</script>

<style lang="less" scoped>
.goods-div {
  display: flex;
  height: 500px;
  .left-div {
    width: 80px;
    height: 90%;
    text-align: center;
    overflow: scroll;
    border: 1px solid #ccc;
    .active {
      background-color: white;
    }
    li {
      height: 60px;
      padding: 10px 0 0 3px;
      background-color: #f3f6f6;
      img {
        width: 13px;
      }
    }
  }
  .rigth-div {
    flex: 1; //撑满父容器
    height: 91%;
    background-color: #f3f6f6;
    overflow: scroll;
    ul > p {
      height: 40px;
      line-height: 40px;
      font-size: 16px;
    }
    li {
      display: flex;
      height: 200px;
      background-color: white;
      padding: 30px 0 0 10px;
      border-bottom: 1px solid #ccc;
      img {
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
      h3 {
        color: #000;
      }
      .wen {
        width: 100%;
        p {
          line-height: 30px;
        }
        .btn {
          display: flex;
          justify-content: space-between;
          .btn-left {
            color: red;
            font-size: 18px;
            span {
              margin-left: 5px;
              text-decoration: line-through;
              color: #ccc;
            }
          }
          .btn-rigth {
            button:nth-of-type(1) {
              color: #00a1da;
              border: 1px solid #00a1da;
              border-radius: 50%;
              background-color: white;
            }
            button {
              width: 25px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
