<template>
  <div class="post-position">
    <div class="post-card">
      <h3>组员的任务</h3>
      <textarea
        placeholder="安排组员的默认任务"
        v-model="tasks.task"
      ></textarea>

      <h3>提示</h3>
      <textarea
        class="description"
        placeholder="给组员的提示"
        v-model="tasks.description"
      ></textarea>

      <button @click="post" class="post">
        <Promotion style="width: 1em; height: 0.8em; margin-right: 0px" />
        发布
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Promotion } from "@element-plus/icons-vue";
import { useStore } from "../store/index";
import { getGroupWeekTask, saveGroupTask } from "../http/index";
import { ElMessage } from "element-plus";

const store = useStore();
const groupId: number = store.user.groupId;

type taskType = {
  task: string;
  groupId: number;
  description: string;
  date: string;
};

const tasks = ref<taskType>({
  task: "",
  description: "",
  groupId: groupId,
  date: "",
});

// 获取之前写的任务安排
async function getGroupWeekTaskData(groupId: number) {
  const response = await getGroupWeekTask(groupId);
  if (response.data.data.task) {
    tasks.value.task = response.data.data.task;
  }
  if (response.data.data.description) {
    tasks.value.description = response.data.data.description;
  }
}

getGroupWeekTaskData(groupId);

// 获取当前时间
function getCurrentDateTime(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 修改任务安排
const post = () => {
  const currentDateTime = getCurrentDateTime();
  tasks.value.date = currentDateTime;
  saveGroupTask(tasks.value)
    .then((response) => {
      if (response.data.code === 200) {
        ElMessage.success("发布成功");
      }
    })
    .catch((error) => {
      ElMessage.error(error);
    });
};
</script>
<style lang="less" scoped>
.post-position {
  display: flex;
  align-items: center;
  justify-content: center;
}

.post-card {
  width: 50vw;
  height: 80vh;
  background-image: url(/menberTaskbg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local, scroll;
  box-shadow: 10px 10px 20px #afafaf, -10px -10px 20px #ffffff;
  padding: 10px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  textarea {
    resize: none;
    width: 99%;
    height: 85%;
    padding: 5px;
    margin: 20px;
    font-family: Sans-serif;
    font-size: 16px;
    // background-color: #effedd;
    background-color: rgba(239, 254, 223, 0.3);
    border: none;
    border-radius: 10px;
    outline: 1px solid #effedf;
    color: #000200;
    line-height: 25px;
  }

  .description {
    height: 30%;
  }
}

// .post-card hr {
//     border: 1px solid #effedf;
//     width: 100%;
//     border-radius: 10em;
// }

.post {
  width: 100%;
  padding: 10px;
  margin: 7px 0;
  border: none;
  border-radius: 11px;
  font-size: 18px;
  font-family: Sans-serif;
  font-family: "ZCOOL KuaiLe";
  color: #000100;
  background-size: 200% 100%;
  background-image: linear-gradient(145deg, #73a987, #c5d08b, #bccdab);
  transition: 0.3s ease-out;
}

.post:hover {
  background-position: 99%;
}
</style>
