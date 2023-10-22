import { createApp, createVNode, render } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import piniaPlugin from './utils/piniaPlugin'
import router from './router/index'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
import loadingBar from './components/loadingBar.vue'
import { ElMessage } from 'element-plus'
// import 'element-plus/theme-chalk/dark/css-vars.css'

const Vnode = createVNode(loadingBar)
render(Vnode, document.body)

const store = createPinia()

store.use(piniaPlugin({
    key: 'rarrot'
}))

let app = createApp(App)

// 配置生产环境和开发环境下的环境变量
// app.config.globalProperties.getEnv =import.meta.env

app.use(store)
app.use(router)
app.use(ElementUi)

// 白名单
const whileList = ['/']

// 前置守卫，进行拦截
router.beforeEach((to, _from, next) => {
    Vnode.component?.exposed?.startLoading()
    // to.path为跳转的地址，如果正好在whileList中，就允许跳转
    // to.meta.requiresAuth ||
    if (whileList.includes(to.path) || sessionStorage.getItem('token')) {
        next()
    }else {
        ElMessage({
            message: '请登录后再来！！！',
            type: 'error',
            duration: 1200
        })
        setTimeout(() => {
            next('/')
        }, 500)
    }
})

// 后置守卫，放了一个顶部的进度条
router.afterEach((_to, _from) => {
    Vnode.component?.exposed?.endLoading()
})

app.mount('#app')
