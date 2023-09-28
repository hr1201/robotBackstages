import { createRouter,createWebHistory,RouteRecordRaw } from 'vue-router'

// 用declare进行
declare module 'vue-router'{
    interface RouteMeta{
        title:string
    }
}

const routes:Array<RouteRecordRaw>=[
    {
        path:'/',
        name:'login',
        // redirect:'/homePage',
        component:()=>import('../views/login.vue'),
        meta:{
            title:'萝卜项管登录'
        },
    },
    {
        path:'/index',
        redirect:'/homePage',
        component:()=>import('../views/index.vue'),
        meta:{
            title:'萝卜项管后台'
        },
        children:[
            {
                path:'/homePage',
                name:'homePage',
                component:()=>import('../views/homePage.vue'),
                meta:{
                    title:'萝卜项管首页',
                    requiresAuth: true
                },
            },
            {
                path:'/introduceExcel',
                name:'introduceExcel',
                component:()=>import('../views/introduceExcel.vue'),
                meta:{
                    title:'导入Excel表',
                    requiresAuth: true
                },
            },
            {
                path:'/MemberManage',
                name:'MemberManage',
                component:()=>import('../views/MemberManage.vue'),
                meta:{
                    title:'成员管理',
                    requiresAuth: true
                },
            },            {
                path:'/dynamicManage',
                name:'dynamicManage',
                component:()=>import('../views/dynamicManage.vue'),
                meta:{
                    title:'审核动态',
                    requiresAuth: true
                },
            },            {
                path:'/planList',
                name:'planList',
                component:()=>import('../views/planList.vue'),
                meta:{
                    title:'计划清单',
                    requiresAuth: true
                },
            },
        ]
    },
    
]

const router=createRouter({
    history:createWebHistory(),
    // 保存滚动条,返回页面仍然是原先的位置
    // scrollBehavior:(to,from,savePosition)=>{
    //     // console.log(savePosition)
    //     if(savePosition){
    //         return savePosition
    //     }else{
    //         return {
    //             top:0
    //         }
    //     }
    // },
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes
})

/**
 * 重置路由
 */
export function resetRouter() {
    router.replace({ path: '/login' });
    location.reload();
}

export default router