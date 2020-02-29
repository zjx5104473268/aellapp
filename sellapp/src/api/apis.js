// 所有请求封装在一起   方便统一管理
import axios from 'axios'

// axios.defaults.baseURL='http://localhost:3000'

let req = axios.create({
    baseURL:'http://localhost:3000',
    timeout:10000  //请求10秒  如果还没请求到提示请求超时
})
export function getseller(){
   return req.get('/api/seller')
}
export function getgoods(){
   return req.get('/api/goods')
}
export function getRating(){
   return req.get('/api/ratings')
}