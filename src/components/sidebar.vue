<template>
    <el-aside width="collapse" style="border-right: 1px solid #ccc">
        <el-col :span="30">
            <el-menu class="el-menu-vertical" text-color="#000" active-text-color="#ff822d" :default-active=defaultUrl
                :collapse="isCollapse">
                <p class="mb2">{{ isCollapse ? '🥕' : '🥕萝卜项管' }}</p>

                <el-menu-item v-for="item in itemList" :key="item.index" @click="toPage(`${item.url}`)" :index="item.index.toString()">
                    <el-icon>
                        <component :is="item.iconHtml" />
                    </el-icon>
                    <template #title><span>{{ item.urlName }}</span></template>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-aside>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useRouter,useRoute } from 'vue-router'
import { HomeFilled, UserFilled, Promotion, List } from '@element-plus/icons-vue'
import { useStore } from '../store/index'

const router = useRouter()

// 获取当前页面的url，防止刷新后所在页面焦点移到默认页面
const route=useRoute()
const defaultUrl=route.path
console.log(route.path)

// const handleOpen = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//     console.log(key, keyPath)
// }

const toPage = (pageName: string) => {
    router.push({
        name: pageName
    })
}

type ItemType = {
    index: string;
    url: string;
    urlName: string;
    iconHtml: any;
};

const itemList: ItemType[] = [
    {   
        index: '/homePage',
        url: 'homePage',
        urlName: '主页',
        iconHtml: HomeFilled
    },
    // icon图标：UploadFilled
    // {
    //     index: '/introduceExcel',
    //     url: 'introduceExcel',
    //     urlName: '导入Excel表',
    //     iconHtml: UploadFilled
    // },
    {
        index: '/MemberManage',
        url: 'MemberManage',
        urlName: '组员管理',
        iconHtml: UserFilled
    },
    {
        index: '/dynamicManage',
        url: 'dynamicManage',
        urlName: '审核动态',
        iconHtml: Promotion
    },
    {
        index: '/planList',
        url: 'planList',
        urlName: '计划清单',
        iconHtml: List
    },
]

// 接收store.getCollapse的值
const store = useStore()

// 解决computed要写两个，注意使用computed的数据，其余改变它就会改变
// 解决方式：在HTML直接使用isCollapse，就可以使用isCollapse的监听器
const isCollapse = computed<boolean>(() => store.Collapse)

// const logo = computed<string>(() => isCollapse.value ? '🥕' : '🥕萝卜项管')
</script>
<style lang="less" scoped>
@font-face {
    font-family: 'ZCOOL KuaiLe';
    src: url('./fonts/ZCOOLKuaiLe-Regular.ttf') format('truetype');
}

.el-menu-vertical {
    background-color: #f5f5f5;
    border-right: 0;

    .mb2 {
        font-family: 'ZCOOL KuaiLe', sans-serif;
        font-size: 32px;
        color: #000;
        margin: 16px auto 11px 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .el-menu-item::before {
        content: '';
        position: absolute;
        background: #ff6723;
        width: 0;
        height: 2px;
        bottom: 0;
        left: 0px;
        transition: 0.3s ease;
    }

    .el-menu-item:hover::before {
        width: 100%;
    }

    .el-menu-item:hover {
        background-color: #fdf5f0;
    }
}

.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
}

.layout-container .el-aside {
    color: var(--el-text-color-primary);
    background: #f5f5f5;
}
</style>