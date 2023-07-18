const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: [
      'wxl475.cn' // 允许访问的域名地址，即花生壳内网穿透的地址
    ],
    host: '0.0.0.0',
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
