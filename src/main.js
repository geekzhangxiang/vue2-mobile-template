import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


// import '@/assets/js/rem.js'
import "@/utils/rem"
import '@/assets/css/reset.css'
import  '@/assets/css/common.css'
// import  '@/assets/font/iconfont.css'
import router from './router'
import store from './store'
// 全局路由守卫
import './permission'
//全局组件注册
import "@/components/global"
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
new Vue({
router,
store,
render: h => h(App),
}).$mount('#app')
