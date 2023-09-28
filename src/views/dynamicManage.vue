<template>
    <div class="cards" v-for="item in DynamicData">
        <div class="card">
            <div class="card-details">
                <p class="text-title">{{ item.content }}</p>
                <p class="text-body">Card Details</p>
            </div>
            <div>
                <p class="card-button" @click="pass">通过</p>
                <p class="card-button2" @click="nopass">删除</p>
            </div>
        </div>
        <!-- <div class="demo-image__lazy">
            <el-image v-for="url in urls" :key="url" :src="url" lazy />
        </div> -->
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { getDynamic} from '../http/index'
import { ElMessage } from 'element-plus'

type dynamicDataType={
    auditing: true
    content: string
    dataclass: string
    date: string
    id: number
    imgurl: string
    location?: string
    username: string
    usersid:number 
}

let DynamicData=ref<dynamicDataType[]>()

getDynamic().then((response)=>{
    DynamicData.value=response.data
}).catch((error)=>{
    ElMessage.error(error)
})

const pass=()=>{
    console.log("通过")
}

const nopass=()=>{
    console.log("不通过")
}

// const urls = [
//   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
//   'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
//   'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
//   'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
//   'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
//   'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
//   'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
// ]


</script>
<style lang="less" scoped>
.cards{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;    
}
.demo-image__lazy {
  height: 400px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

// 以下为弹出按钮的样式
.card {
  width: 290px;
  height: 300px;
  border-radius: 2px;
  background: #f5f5f5;
  position: relative;
  padding: 1.8rem;
  margin: 10px 30px 30px 20px;
  border: 2px solid #c3c6ce;
  -webkit-transition: 0.5s ease-out;
  transition: 0.5s ease-out;
  overflow: visible;
}

.card-details {
  color: rgb(162, 0, 255);
  height: 100%;
  gap: .5em;
  display: grid;
  place-content: center;
  font-family: 'Courier New', Courier, monospace;
}

.card-button {
  text-decoration: none;
  text-align:center;
  -webkit-transform: translate(-50%, 125%);
  -ms-transform: translate(-50%, 125%);
  transform: translate(-50%, 125%);
  width: 30%;
  border-radius: 1rem;
  border: none;
  background-color: #0dbc79;
  color: #fff;
  font-size: 1rem;
  padding: .5rem .5rem;
  position: absolute;
  left: 25%;
  bottom: 0;
  opacity: 0;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
}
.card-button2 {
  text-decoration: none;
  text-align: center;
  -webkit-transform: translate(-50%, 125%);
  -ms-transform: translate(-50%, 125%);
  transform: translate(-50%, 125%);
  width: 30%;
  border-radius: 1rem;
  border: none;
  background-color: #ff5555;
  color: #fff;
  font-size: 1rem;
  padding: .5rem .5rem;
  position: absolute;
  left: 75%;
  bottom: 0;
  opacity: 0;
  -webkit-transition: 0.3s ease-out;
  transition: 0.3s ease-out;
  cursor: pointer;
  font-family: 'Courier New', Courier, monospace;
}

.text-body {
  color: rgb(134, 134, 134);
}

/*Text*/
.text-title {
  font-size: 1.5em;
  font-weight: bold;
}

/*Hover*/
.card:hover {
  border-color: #6c00f8;
  -webkit-box-shadow: 10px 5px 18px 0 rgba(255, 255, 255, 0.877);
  box-shadow: 10px 5px 18px 0 rgba(255, 255, 255, 0.877);
}

.card:hover .card-button {
  -webkit-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  opacity: 1;
}

.card:hover .card-button2 {
  -webkit-transform: translate(-50%, 50%);
  -ms-transform: translate(-50%, 50%);
  transform: translate(-50%, 50%);
  opacity: 1;
}
</style>