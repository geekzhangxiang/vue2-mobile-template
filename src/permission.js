import router from "./router"
import store from "./store"
const whiteList = ['/login']


 router.beforeEach( (to, from, next)=>{
    // next()//直接进to 所指路由
    // next(false) //中断当前路由
    // next('route') //跳转指定路由
    // next('error') //跳转错误路由

    const token = localStorage.getItem("token")

    console.log("当前去的路径", to.path)
    console.log(token)
    // 如果没登录都导向登录页
    if (!token) {
        
        // if(to.path!=="/login"){
        //     next("/login")
        // }else{
        //     next()
        // }   

        // next跳转示例

        // next("/login")  next({path: "/login"})    next({name: "login"})


        to.path != "/login" ? next({path: "/login"}) : next()
        
    } else {

        next()
    }


})


router.afterEach((to, from) => {
    if (from.path != '/login' && from.path != '/' && to.path == '/login') {
        window.location.reload();
    }
})