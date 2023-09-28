<template>
    <el-row :gutter="15">
        <el-col v-for="item in itemList" :span="8">
            <!-- 成员数 -->
            <el-card shadow="hover">
                <div>
                    <p class="numText">{{ item.userName }}</p>
                </div>
                <div class="numPosition">
                    <p class="peopleNum">{{ item.num }}</p>
                    <img :src="item.svgImg" :alt="item.svgAlt">
                </div>
            </el-card>
        </el-col>
        <barchat :yAxisData="yAxisData" :seriesData="seriesData" />
    </el-row>
</template>

<script setup lang='ts'>
import { ref, computed } from 'vue';
import { useStore } from '../store/index'
import { getDuration } from '../http/index'
import { ElMessage } from 'element-plus'
import barchat from '../components/BarChart.vue';

const store = useStore();

// 管理员账号名和组id
const managerName = store.user.username;
const groupId = store.user.groupId;

// 成员数量
let num = ref<number>(0);

// 成员平均时长
let time = ref<number>(0);

// 时长达标人数
let standard = ref<number>(0);

// 柱状图的yAxis数据
let yAxisData = ref<string[]>([]);

// 柱状图的series数据
let seriesData = ref<number[]>([]);

// 获取数据
async function getNum(): Promise<void> {
    try {
        const response = await getDuration(groupId);
        num.value = response.data.length;
        time.value = response.data.reduce((prev: number, cur: { duration: number; }) => {
            return (prev + (cur.duration || 0) / num.value);
        }, 0);
        response.data.forEach((value: { username: string; compliance: string; duration: number; }) => {
            if (value.duration > 25 && value.compliance == '达标') {
                standard.value++;
            }
            yAxisData.value?.push(value.username)
            seriesData.value?.push(value.duration)
        });
    } catch (error) {
        ElMessage.error('获取用户数量失败');
    }
}

// 初始化用户数量
getNum();

type itemType = {
    span: number,
    userName: string,
    num: string | number,
    svgImg: string,
    svgAlt: string
}

const itemList = computed((): itemType[] => [
    {
        span: 8,
        userName: `${managerName}成员数`,
        num: num.value,
        svgImg: "/member.svg",
        svgAlt: "memberIcon"
    },
    {
        span: 8,
        userName: `${managerName}平均时长`,
        num: time.value.toFixed(2) + 'h',
        svgImg: "/time.svg",
        svgAlt: "timeIcon"
    },
    {
        span: 8,
        userName: `${managerName}时长达标人数(>25h)`,
        num: standard.value,
        svgImg: "/standard.svg",
        svgAlt: "standard"
    }
]);

</script>
<style lang="less" scoped>
.numPosition {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        width: 40px;
        height: 40px;
    }
}
</style>