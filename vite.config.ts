import { fileURLToPath,URL } from 'url';

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // ./src路径的别名
    alias: {
      '@':fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    open: false,//自动打开
    host: "localhost",
    port: 5173,// 代理服务器
    proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      '/api1': {
        target: 'http://192.168.31.103:8080', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api1/, '')
      },
      '/api2': {
        target: 'http://192.168.31.103:8585',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api2/, '')
      }
    }
  }
})