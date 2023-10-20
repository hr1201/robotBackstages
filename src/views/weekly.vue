<template>
    <!-- 周报预览 -->
    <el-dialog v-model="dialogTableVisible" title="预览周报">
        <iframe width="100%" height="500px" :src="urlString">
        </iframe>
    </el-dialog>

    <!-- 缺少选择第几周，还有搜索 -->
    <el-select v-model="values" value-key="id" @change="changeSelect" style="margin-left: 10px;" class="m-2"
        placeholder="Select" size="large">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" loading="true" />
    </el-select>

    <span style="color: rgb(156 163 175);">&nbsp&nbsp --点击下拉框选择，本页面可使用浏览器自带的Ctrl+f 进行搜索--</span>

    <div class="card-block">
        <div v-for="week in weeklies" class="card" :key="week.id">
            <span class="title">🍪 {{ week.userName }}</span>
            <p class="description"><strong>总结：</strong>{{ week.summary }}</p>
            <div class="actions">
                <p class="pref">
                    {{ week.time }}
                </p>
                <docsButton :wordUrl="week.wordUrl" @DocsPreview="urlClick" />
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
    userId: number,
    userName: string,
    wordUrl: string,
    week?: string,
    time: string
}

const values = ref('第1周')

let options = ref<weekType[]>([])

let weeklies = ref<weeklyType[]>([])

const groupId = store.user.groupId;

// 组员的指定周期的周报 
const changeSelect = () => {
    getWeekly(values.value, groupId).then((response) => {
        weeklies.value = response.data.data
    }).catch((error) => {
        ElMessage.error(error)
    })
}

// 选择框中的周期数
getWeek().then((response) => {
    response.data.data.forEach((value: any) => {
        if (options.value && response.data.data.length == 1) {
            values.value = value
            options.value.push({
                value: value,
                label: value
            })
            changeSelect()
        }
        else if (options.value) {
            options.value.push({
                value: value,
                label: value
            })
            values.value = options.value[0].value
            changeSelect()
        }
    })
}).catch((error) => {
    ElMessage.error(error)
})

// changeSelect()

// 用于dialog的开启和关闭
const dialogTableVisible = ref(false)
let urlString: string

const urlClick = (val: any) => {
    dialogTableVisible.value = true
    urlString = val.urlPre
}

</script>
<style lang="less" scoped>
// 卡片位置
.card-block {
    display: grid;
    // 当卡片只有一个时，会撑的很长，可以通过判断卡片数量，然后使用动态的添加css
    // 以此来适配只有一个时的情况
    grid-template-columns:repeat(auto-fit,minmax(265px,1fr));
    gap:20px;
    margin: 10px 0 0 10px;
}

// 卡片框
.card {
    padding: 1rem;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, .05);
    border: solid #ff822d 1px;
    transition: transform 0.2s ease;

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