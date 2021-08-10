let baseURL = ''

if (process.env.NODE_ENV === 'production') {
  // 根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境
  // production 生产环境
   baseURL = 'http://47.101.71.209:11000'
  // baseURL = 'http://192.168.19.10:11000'
} else {
  // development 开发环境
  // baseURL = 'http://192.168.0.205:11000'
  baseURL = 'https://api.juooo.com'
}
export const inteUrl = baseURL