<template>
    <el-container class="layout-container" style="height: 100vh">
        <!-- <el-aside width="200px"> -->
            <sidebars />
        <!-- </el-aside> -->
        <el-container>
            <el-header>
                <headers />
            </el-header>
            <el-main>
                <!-- 接收视图转变 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang='ts'>
// import { ref } from 'vue'
import sidebars from '../components/sidebar.vue'
import headers from '../components/header.vue'

</script>
<style lang="less" scoped>
// .layout-container .el-aside {
//     color: var(--el-text-color-primary);
//     background: #f5f5f5;
// }

.layout-container .el-header {
    --el-header-padding: 0;
}
</style>