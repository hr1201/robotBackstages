<template>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" background-color="#fff" text-color="#000"
        active-text-color="#000" :ellipsis="false" @select="handleSelect">
        <!-- 汉堡菜单 -->
        <div class="hamburgSwitch">
            <!-- Fold需要动态修改，根据sidebar中的格式 -->
            <el-icon @click="switchSide" class="hoverReact" color="#ff822d">
                <component :is="hamburgIcon" />
            </el-icon>
        </div>

        <!-- 用来隔开面包菜单和头像 -->
        <div class="flex-grow" />

        <!-- 头像 -->
        <el-dropdown :hide-on-click="false">
            <div class="basic--circle">
                <div class="block">
                    <el-avatar :size="40" :src="circleUrl" />
                    <p class="avator-content">{{ content }}</p>
                </div>
            </div>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

    </el-menu>
</template>

<script setup lang='ts'>
import { ref, computed, reactive, toRefs } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'
import { useStore } from '../store/index'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()

// 头像
const state = reactive({
    circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)
const content = store.user.username

const logout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('pinia-store')
    router.push({name:'login'})
}

// 选择
const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

// 侧边栏的开关
const hamburgIcon = computed<any>(() => store.Collapse ? Expand : Fold)

const switchSide = () => {
    store.setCollapse()
}

</script>
<style lang="less" scoped>
.el-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .hamburgSwitch {
        transition: transform 0.05s;

        .el-icon {
            font-size: 2em;
            margin: 13px;
        }
    }

    .hamburgSwitch :hover {
        transform: scale(1.03);
    }

    .hamburgSwitch :active {
        transform: scale(1.1);
    }

    .flex-grow {
        flex-grow: 1;
        // transition: 0.5s ease;
    }

    // 用于解决头像边框
    .el-dropdown-link:focus-visible {
        outline: none;
    }
    .el-dropdown-link:focus {
        outline: none;
    }
    .el-tooltip__trigger { 
        outline: none; 
    }

    .basic--circle {
        margin: 13px 20px;

        .block {
            display: flex;
            flex-direction: row;
            justify-self: center;
            align-items: center;

            .avator-content {
                margin: 0 10px;
            }
        }
    }
}
</style>