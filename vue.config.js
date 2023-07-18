const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 80
    // proxy: {
    //   '/gateway': {
    //     target: 'http://localhost:10010/',
    //     changeOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //     pathRewrite: {
    //       '^/gateway': '' // 这里理解成用'/gateway'代替target里面的地址,
    //     }
    //   }
    // }
  }
})
