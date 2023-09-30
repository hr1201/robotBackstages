<template>
    <!-- 缺少选择第几周，还有搜索 -->
    <el-select v-model="value" value-key="id" @change="changeSelect" style="margin-left: 10px;" class="m-2" placeholder="Select" size="large">
        <el-option 
            v-for="item in options" 
            :key="item.value" 
            :label="item.label" 
            :value="item.value"
            loading="true" />
    </el-select>
    
    <span style="color: rgb(156 163 175);">&nbsp&nbsp --本页面可使用浏览器自带的Ctrl+f 进行搜索--</span>
    
    <div class="card-block">
        <div v-for="week in weeklies" class="card" :key="week.id">
            <span class="title">🍪 {{ week.username }}</span>
            <p class="description"><strong>总结：</strong>{{ week.summary }}</p>
            <div class="actions">
                <p class="pref">
                    {{ week.time }}
                </p>
                <docsButton :wordUrl="week.wordUrl" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { getWeekly, getWeek } from '../http/index'
import docsButton from '../components/docsButton.vue'
import { ElMessage } from 'element-plus'
import { useStore } from '../store/index'

const store = useStore();

type weekType = {
    value: string,
    label: string
}

type weeklyType = {
    id: number,
    summary: string,
    usersId: number,
    username: string,
    wordUrl: string,
    week?: string,
    time: string
}

const value = ref('第1周')

let options = ref<weekType[]>([])

getWeek().then((response) => {
    response.data.forEach((value: any) => {
        if (options.value) {
            options.value.push({
                value: value,
                label: value
            })
        }
    })
}).catch((error) => {
    ElMessage.error(error)
})

let weeklies = ref<weeklyType[]>([])

const groupId = store.user.groupId;

const changeSelect=()=>{
    getWeekly(value.value, groupId).then((response) => {
        weeklies.value = response.data
    }).catch((error) => {
        ElMessage.error(error)
    })
}

changeSelect()
</script>
<style lang="less" scoped>
// 卡片位置
.card-block {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
}

// 卡片框
.card {
    width: 23%;
    min-width: 260px;
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
    border: solid #ff822d 1px;
    transition: transform 0.2s ease;
    margin: 12px;

    // &:last-child {
    //     margin-right: 0;
    // }

    .title {
        font-weight: 600;
        color: rgb(31 41 55);
    }

    .description {
        margin-top: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: rgb(75 85 99);
    }

    .actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        -moz-column-gap: 1rem;
        column-gap: 1rem;
        flex-shrink: 0;
    }

    .pref {
        font-size: 1.1rem;
        line-height: 1rem;
        color: rgb(31 41 55);
        transition: all .3s cubic-bezier(0.4, 0, 0.2, 1);
        background-color: transparent;
    }

    .pref:hover {
        color: rgb(156 163 175);
    }

    .pref:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
    }
}

.card:hover {
    transform: scale(1.02); //放大10%
}
</style>