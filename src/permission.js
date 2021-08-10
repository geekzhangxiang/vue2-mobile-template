import router from "./router"
import store from "./store"
const whiteList = ['/login']

const token=localStorage.getItem("token")
router.beforeEach((to,from,next)=>{
    // next()//直接进to 所指路由
    // next(false) //中断当前路由
    // next('route') //跳转指定路由
    // next('error') //跳转错误路由

    console.log(to.path)
    console.log(localStorage.getItem("token"))
     if(token){
         //如果用户信息存在则往下执行。
         next()
     }else{
       //如果用户token不存在则跳转到login页面
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
     }

    
  })