import { fileURLToPath, URL } from 'url';
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer';
import { viteMockServe } from "vite-plugin-mock";

// https://vitejs.dev/config/

export default defineConfig((({ command, mode }) => {
  const env: any = loadEnv(mode, process.cwd(), '')

  return {
    base:'./',
    define: {
      __APP_ENV__: env.APP_ENV,
    },
    plugins: [
      vue(), 
       // 根据环境变量应用viteMockServe插件
       env.VITE_USE_MOCK === 'true' && viteMockServe({
        mockPath: "./src/mock", // 指定模拟文件的路径
        supportTs: true,
      }),
    ].filter(Boolean), // 过滤掉虚假值
    build: {
      chunkSizeWarningLimit: 600,//达到600k打包才会提示
      cssCodeSplit: false, //css 拆分
      sourcemap: false, //不生成sourcemap
      minify: false, //是否禁用最小化混淆，esbuild打包速度最快，terser打包体积最小。
      assetsInlineLimit: 5000 //小于该值 图片将打包成Base64 
    },
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
        '/api': {
          target: env.VITE_BASIC_URL, // 后端服务实际地址
          changeOrigin: true, //开启代理,允许跨域
          rewrite: (path) => path.replace(/^\/api/, '')
        },
      }
    }
  }
}))