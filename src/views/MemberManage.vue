<template>
    <h2>组员管理</h2>
    <!-- 搜索框 -->
    <div class="mt-4">
        <el-input v-model="input3" size="large" placeholder="输入组员姓名" class="input-with-select">
            <template #prepend>
                <el-select v-model="select" @change="findMember" size="large" placeholder="选择" style="width: 150px">
                    <el-option label="所有组员" value="1" />
                    <el-option label="上周时长达标" value="2" />
                    <el-option label="上周时长未达标" value="3" />
                    <el-option label="正式队员" value="4" />
                </el-select>
            </template>
            <template #append>
                <el-button :icon="Search" @click.native="findMember" />
            </template>
        </el-input>
    </div>

    <!-- 表格 -->
    <el-table :data="findMember.slice((currentPages - 1) * pageSize, currentPages * pageSize)"
        style="width: 97%; height: 445px">
        <el-table-column prop="userName" label="姓名" style="width:20%" />
        <el-table-column prop="password" label="密码" style="width:21%" />
        <el-table-column prop="phoneNumber" label="手机号码" style="width:18%" />
        <el-table-column prop="duration" align="center" label="上周时长" style="width:12%" />
        <el-table-column prop="leaderTaskWeek" align="center" label="任务的周期" style="width:13%" />

        <el-table-column align="center" fixed="right" label="操作" style="width:16%">
            <template #default="scope">
                <el-button link type="primary" size="large" @click="handleEdit(scope.row.id)">修改</el-button>
                <!-- <el-button link type="primary" size="large" @click="handleDelete(scope.row.id)">删除</el-button> -->
                <el-button link type="success" size="large" :disabled="!scope.row.mailbox"
                    @click="addTasks(scope.row.id,scope.row.leaderTaskWeek)">添加任务</el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination-block">
        <el-pagination :hide-on-single-page="false" v-model:current-page="currentPages" v-model:page-size="pageSize"
            :background="background" layout="prev, pager, next, jumper" :page-count='Math.ceil(findMember.length / 10)'
            @size-change="handleSizeChange" @current-change="handleCurrentChange" hide-on-single-page:true />
    </div>

    <!-- 修改抽屉 -->
    <el-drawer v-model="table" title="修改组员信息" direction="rtl" size="30%">
        <div class="drawer__content">
            <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                    <el-input v-model="form.userName" autocomplete="off" disabled />
                </el-form-item>
                <el-form-item label="密码" :label-width="formLabelWidth">
                    <el-input v-model="form.password" autocomplete="off" />
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                    <el-input v-model="form.phoneNumber" autocomplete="off" />
                </el-form-item>
            </el-form>
            <div align="center" class="drawer__footer">
                <el-button @click="cancelForm">取消</el-button>
                <el-button type="primary" :loading="loading" @click="onClick">{{
                    loading ? '提交中...' : '提交'
                }}</el-button>
            </div>
        </div>
    </el-drawer>

    <!-- 添加任务的弹出框 -->
    <el-dialog v-model="dialogFormVisible" title="添加任务">
        <el-form :model="form">
            <el-form-item label="任务安排" :label-width="dialogWidth">
                <el-input v-model="dialogForm.leaderTask" autocomplete="off" />
            </el-form-item>
            <el-form-item label="任务描述" :label-width="dialogWidth">
                <el-input v-model="dialogForm.description" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" :loading="loading" @click="addTask">{{
                    loading ? '提交中...' : '提交'
                }}</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import { reactive, ref, computed } from 'vue'
import { getMember, editMember, setTask } from '../http/index'
import { ElDrawer, ElMessage, MessageParamsWithType } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { useStore } from '../store/index'

type tableDataType = {
    userName: string,
    password: string,
    phoneNumber: number,
    duration: number,
    leaderTaskWeek: string,
    leaderTask?: string,
    description?: string,
    mailbox?: string,
    location?: string | undefined,
    id?: number | undefined,
    groupid?: number | undefined,
}

let tableData = ref<tableDataType[]>([])

const store = useStore();
const groupId: number = store.user.groupId;

// 用于高亮某些行的属性highlight-current-row，当有用户时长不足35h时，背景为红
// 以下为接口传过来的数据
function getMembers() {
    getMember(groupId).then((response: { data: any; }) => {
        tableData.value = response.data.data
    }).catch((error: MessageParamsWithType) => {
        ElMessage.error(error)
    })
}
getMembers()

// 搜索框
const input3 = ref('')//输入框
const select = ref('')//选择框

const findMember = computed(() => {
    if (select.value == "2") {
        return tableData.value.filter((value) => {
            return value.duration >= 25 && value.userName.includes(input3.value)
        })
    } else if (select.value == "3") {
        return tableData.value.filter((value) => {
            return value.duration < 25 && value.userName.includes(input3.value)
        })
    } else if (select.value == "4") {
        return tableData.value.filter((value) => {
            return value.mailbox && value.userName.includes(input3.value)
        })
    } else {
        return tableData.value.filter((value) => {
            return value.userName.includes(input3.value)
        })
    }
})

// 修改按钮的表单数据
const formLabelWidth = '80px'
let timer: string | number | NodeJS.Timeout | undefined

let table = ref(false)
const dialog = ref(false)
const loading = ref(false)

let form = reactive<tableDataType>({
    userName: '',
    password: '',
    phoneNumber: 0,
    duration: 0,
    leaderTaskWeek: '第0周'
})

// 修改抽屉的提交按钮
const onClick = () => {
    editMember(form).then(() => {
        ElMessage.success("修改成功")
        getMembers()
        table.value = false
    }).catch((error) => {
        ElMessage.error(error)
    })
}

// 修改抽屉的取消按钮
const cancelForm = () => {
    loading.value = false
    dialog.value = false
    table.value = false
    clearTimeout(timer)

}

// 修改按钮
const handleEdit = (id: number) => {
    table.value = true
    tableData.value.forEach((value) => {
        if (value.id == id) {
            Object.assign(form, value)
        }
    })
}

// 删除按钮
// const handleDelete=(id:number)=>{
//     ElMessageBox.confirm(
//     '确定要删除这个组员吗？',
//     '警告',
//     {
//       confirmButtonText: '确定',
//       cancelButtonText: '取消',
//       type: 'warning',
//     }
//   )
//     .then(() => {
//         deleteMember(id).then(()=>{
//             getMembers()
//             ElMessage.success("人生有梦，各自精彩！")
//         }).catch((error)=>{
//             ElMessage.error(error)
//         })
//     })
//     .catch(() => {
//       ElMessage({
//         type: 'info',
//         message: '取消删除',
//       })
//     })
// }

// 添加任务按钮
const dialogFormVisible = ref(false)
const dialogWidth = '100px'

type dialogFormType = {
    id: number,
    leaderTask: string | undefined,
    description: string | undefined
}

const dialogForm = reactive<dialogFormType>({
    id: 0,
    leaderTask: '',
    description: '',
})

const addTasks = (id: number,leaderTaskWeek:string) => {
    dialogFormVisible.value = true
    tableData.value.forEach((value) => {
        if (value.id == id&&value.leaderTaskWeek==leaderTaskWeek) {
            dialogForm.id = value.id
            dialogForm.leaderTask = value.leaderTask
            dialogForm.description = value.description
        }
    })
}

const addTask = () => {
    setTask(dialogForm).then(() => {
        // console.log(dialogForm)
        ElMessage.success("修改成功")
        dialogFormVisible.value = false
        getMembers()
    }).catch((error) => {
        ElMessage.error(error)
    })
}

// 分页
const currentPages = ref(1)// 当前页数
const pageSize = ref(10)// 每页显示条目个数
const background = ref(false)
// page-size 改变时触发
const handleSizeChange = (size: number) => {
    pageSize.value = size;
}
// current-page 改变时触发
const handleCurrentChange = (currentPage: number) => {
    currentPages.value = currentPage;
}
</script>

<style lang="less" scoped>
.mt-4 {
    .input-with-select {
        margin: 20px 0;
        width: 97%;
    }
}

.pagination-block {
    display: flex;
    justify-content: end;
    margin-top: 30px;
    margin-right: 3%;
}
</style>