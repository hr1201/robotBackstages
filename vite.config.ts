import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/

export default defineConfig((({ mode }) => {
  const config: any = loadEnv(mode, './')

  return {
    plugins: [vue()],
    resolve: {
      // ./src路径的别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: false,//自动打开
      host: "localhost",
      port: 5173,// 代理服务器
      proxy: { // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
        // 正则表达式写法,由于需要匹配两个后台，直接写两个env
        '/api1': {
          target: config.VITE_BASIC_URL, // 后端服务实际地址
          changeOrigin: true, //开启代理,允许3跨域
          rewrite: (path) => path.replace(/^\/api1/, '')
        },
        '/api2': {
          target: config.VITE_BASIC_URL2,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api2/, '')
        }
      }
    }
  }
}))