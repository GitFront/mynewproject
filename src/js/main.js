//导入vue
import Vue from 'vue';
//导入路由
import VueRouter from 'vue-router';
//注入
Vue.use(VueRouter);
//导入vue-resource
import VueResource from 'vue-resource';
// 注入
Vue.use(VueResource);
//导入子组件
import Home from '../components/tabbar/Home.vue';
//创建router对象
const router=new VueRouter({
    routes:[
        {path:'/home',component:Home}
        ],
    linkActiveClass:'mui-active'
});
//导入根组件
import App from '../components/App.vue';
//导入饿了么
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//导入mui

import '../libs/mui/css/mui.css';
import '../libs/mui/css/icons-extra.css';
//创建vm实列
const vm =new Vue({
    el:'#app',
    render:c=>c(App),
    //将router挂载在vm上
    router  
});