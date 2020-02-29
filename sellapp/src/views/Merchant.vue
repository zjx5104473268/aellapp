<template>
    <div class="merchant">
        <div class="top">
           <div class="top-top">
               <div>
               <h2>{{data.name}}</h2>
           <p><Rate allow-half disabled v-model="valueDisabled" /><span>({{data.ratingCount}})</span><span>月销售{{data.sellCount}}单</span></p>
           </div>
           <div class="xin"><Icon type="md-heart" size='30' color='red'/><p>已收藏</p></div>
           </div>
        </div>
     
    </div>
</template>

<script>
import { getseller } from "../api/apis.js";
export default {
  data() {
    return {
      data: {},
      valueDisabled: 4.3
    };
  },
  created() {
    getseller().then(res => {
      console.log(res.data.data);
      this.data = res.data.data;
    //   this.valueDisabled = this.data.serviceScore;
    });
  },
  mounted() {
  },
};
</script>

<style lang="less" scoped>
.merchant {
  height: 500px;
  overflow: scroll;

  .top {
    height: 300px;
    padding: 20px 30px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    .top-top {
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      .ivu-icon-md-heart{
          margin: auto;
      }
    }
  }
}
</style>