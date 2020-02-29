import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Goods from '../views/Goods.vue'
import evaluate from '../views/Evaluate.vue'
import merchant from '../views/Merchant.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/',component: Main,children:[
    // 商品二级页面
    {path:'/goods',component:Goods},
    // 评价
    {path:'/evaluate',component:evaluate},
    // 商家
    {path:'/merchant',component:merchant}
  ]},
]

const router = new VueRouter({
  routes
})

export default router
