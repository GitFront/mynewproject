//导入vue
import Vue from 'vue';
//导入根组件
import App from '../components/App.vue';
//导入饿了么组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
//创建vm实列
const vm =new Vue({
    el:'#app',
    render:c=>c(App)
});