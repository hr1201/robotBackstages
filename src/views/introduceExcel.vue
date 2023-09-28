<template>
    <div class="blocks">
        <el-button class="excelButton" type="success">导入Excel表<el-icon class="el-icon--right"><Upload /></el-icon></el-button>
          <!-- <input class="input" name="file" type="file">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" stroke-linejoin="round" stroke-linecap="round" viewBox="0 0 24 24" stroke-width="2" fill="none" stroke="currentColor" class="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
            </div> -->
        <div class="block">

        </div>
    </div>
</template>

<script setup lang='ts'>
// import { ref } from 'vue'
import { Upload } from '@element-plus/icons-vue'

</script>
<style lang="less" scoped>
.excelButton{
    width: 200px;
    height: 50px;
    font-size: 20px;
}
.blocks{
    display: flex;

}
.block{
    width:500px;
    height: 80vh;
    margin-left: 30px;
    background-color: rgb(255, 255, 255);
    border:solid 2px #67c23a;
}

</style>