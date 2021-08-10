import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes=[
  {
  path: '/',
  name: 'home',
  meta:{
    // 路由全局守卫通过自定义字段判断登录权限
    requireAuth: true,
    roles: ['admin']
  },
  component: () => import('@/views/home.vue')
  },
  {
    name: 'show',
    path: '/show',
    component: ()=>import('@/views/show/show.vue'),
    // children:[
    //   {
    //     name: 'tab',
    //     path: 'tab',
    //     component: ()=>import('@/views/Main/Show/Tab/Tab.vue')
    //   }
    // ]
  },
  {
    name: "calender",
    path: "/calender",
    component: ()=>import("@/views/calender/calender.vue")
  },
  {
    name: 'login',
    path: '/login',
    component: ()=>import("@/views/login/index.vue")
  }
  // {
  //   name: 'schedule',
  //   path:  '/schedule',
  //   component: ()=>import('@/views/Main/Show/Schedule.vue')
  // }

]

const router= new Router({
routes,
})

export default router;