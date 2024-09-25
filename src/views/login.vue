<template>
    <div class="login">
        <!-- 背景图或者视频 -->
        <div class="img-container">
            <img class="logo-img" src="../assets/images/wolf.gif" alt="">
        </div>
        <el-card class="box-card">
            <el-form ref="form" :rules="rules" :model="formInline" class="demo-form-inline" @keyup.enter.native="onSubmit">
                <div class="title">🥕萝卜项管</div>
                <el-form-item prop="user">
                    <el-input v-model="formInline.user" placeholder="请输入账号" clearable />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input show-password type="password" v-model="formInline.password" placeholder="请输入密码" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" class="btn-login" style="height: 35px;" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
import { login,getGroupInfo } from '../http/index';
import { useStore } from '../store/index'
import { FormItemRule, FormInstance, ElMessage } from 'element-plus'
// import { AxiosResponse } from 'axios';

// 使用validate进行验证
// 接一个登录接口,将用户输入的formInline.user和password发送到后端，后端验证完成传回一个token和状态码，将返回内容传入sessionStorage
// 配置动态路由，后端再传入个菜单，使用router.add添加进路由中；跳转
// 将token传入请求头，之后的每一次请求都需要验证token，也就是要在请求和响应拦截器中进行相应的判断

const router = useRouter()
// 调用仓库
const store=useStore()

type From = {
    user: string,
    password: string
}

type Rules = {
    [k in keyof From]?: Array<FormItemRule>
}

const formInline = reactive<From>({
    user: 'Rarrot',
    password: 'Rarrot',
})

const form = ref<FormInstance>()

const rules = reactive<Rules>({
    user: [
        {
            required: true,//设为必填字段
            message: '请输入账号',
            type: 'string',
        }
    ],
    password: [
        {
            required: true,//设为必填字段
            message: '请输入密码',
            type: 'string',
        }
    ]
})

// let token:AxiosResponse<any, any>
const onSubmit = () => {
    // console.log('submit!', form.value)
    form.value?.validate((validate) => {
        // console.log(validate)
        if (validate) {
            login(formInline.user, formInline.password).then((response) => {
                if (response.data.code == '200'&&response.data.data) {
                    ElMessage.success(`欢迎${formInline.user}管理员！！！`)
                    store.setUser(formInline.user,response.data.data?.groupId)
                    getGroupInfo(response.data.data?.groupId).then((response)=>{
                        store.setuserImage(response.data.data.headUrl)
                    })
                    sessionStorage.setItem('token', response.data.data?.token)
                    router.push('/homePage')
                } else {
                    ElMessage.error('账号或密码输入错误！！！')
                    // console.log(response.data)
                }
            })
        } else {
            ElMessage.error('请输入完整！！！')
        }
    })   
}
</script>
<style lang="less" scoped>
/* v-if闪烁问题 */
[v-cloak] {
    display: none !important;
}

.login {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .img-container {
        background-color: white;
        height: 100vh;
        width: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        z-index: 50;

        .logo-img {
            mix-blend-mode: difference;
            height: 100%;
            min-width: 100%;
            object-fit: cover;
        }
    }

    .box-card {
        width: 350px;
        padding: 30px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0px 17px 26px 5px #0c0d0e4d;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 500;

        .demo-form-inline {
            .el-form.item {
                line-height: 20px;
            }
        }

        .title {
            font-family: 'ZCOOL KuaiLe', sans-serif;
            font-size: 32px;
            color: rgba(248, 248, 248, 0.753);
            margin: 16px auto 11px 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn-login {
            width: 100%;
        }
    }

}
</style>