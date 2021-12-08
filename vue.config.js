module.exports = {
    devServer:{
      host:'localhost',  //主机
      port:8080,
      proxy:{    
        // '/activity':{
        //   target:'https://www.imooc.com',  //代理到慕课网
        //   changeOrigin:true,   //是否将主机头的原点更改为目标url地址
        //   pathRewrite:{
        //     '/activity':'/activity'   //路径的转换规则
        //   }
        // }
        '/api':{   
          target:'https://api.juooo.com',
          changeOrigin:true,  
          secure: false,
          pathRewrite:{
            '^/api':''   
          }
        }
  
      }
    }
  }
  