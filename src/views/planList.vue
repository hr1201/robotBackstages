<template>
  <div class="planBlocks">
    <div class="datas">
      <div class="monthData">
        选择日期：
        <DatePicker
          placeholder="请选择日期"
          mode="date"
          :max-date="new Date()"
          format="yyyy-MM-dd"
          v-model="dateValue"
        />
      </div>
      <el-form
        class="select"
        @submit.prevent
        @keyup.enter.native="selectChange(input1)"
      >
        <el-input
          v-model="input1"
          class="w-50 m-2"
          size="large"
          placeholder="请输入组员姓名"
        />
        <el-button :icon="Search" @click="selectChange(input1)" size="large" />
      </el-form>
    </div>

    <el-divider content-position="left">以下为组员任务</el-divider>

    <div class="planBlock">
      <el-row :gutter="20">
        <el-col :span="10">
          <div class="grid-content1 ep-bg-purple">
            <el-icon>
              <Sunny />
            </el-icon>
            <p>已完成</p>
          </div>
          <div v-for="list in finished" :key="list.id" class="page">
            <div class="margin">
              <p>{{ list.userName ? list.userName + "：" : "" }}</p>
            </div>
            <p style="line-height: 27px">{{ list.task }}</p>
            <p class="time">{{ list.date ? "--" + list.date : "" }}</p>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content2 ep-bg-purple">
            <el-icon>
              <Lightning />
            </el-icon>
            <p>未完成</p>
          </div>
          <div v-for="list in unfinished" :key="list.id" class="page">
            <div class="margin">
              <p>{{ list.userName ? list.userName + "：" : "" }}</p>
            </div>
            <p style="line-height: 27px">{{ list.task }}</p>
            <p class="time">{{ list.date ? "--" + list.date : "" }}</p>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content3 ep-bg-purple">
            <el-icon>
              <WarnTriangleFilled />
            </el-icon>
            <p>未填写</p>
          </div>
          <div class="papper">
            <p>
              {{
                unwriteName
                  ? unwriteName.slice(0, unwriteName.length - 1) + "。"
                  : "无"
              }}
            </p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { getPlan, getownPlan } from "../http/index";
import { useStore } from "../store/index";
import { ElMessage } from "element-plus";
import {
  Sunny,
  Lightning,
  WarnTriangleFilled,
  Search,
} from "@element-plus/icons-vue";
import { DatePicker } from "vue-amazing-ui";
import "vue-amazing-ui/css";

const user = useStore();

type plan = {
  id: number;
  task: string;
  date: string;
  userName: string;
  status?: string;
};

// 已完成任务
const finished = ref<plan[]>([
  {
    userName: "",
    task: "暂无",
    id: 0,
    date: "",
  },
]);

// 未完成任务
const unfinished = ref<plan[]>([
  {
    userName: "",
    task: "暂无",
    id: 0,
    date: "",
  },
]);

// 未填写任务
const unwriteName = ref("");

// 将finished和unfinished置空
function empty(): void {
  unfinished.value.length = 0;
  finished.value.length = 0;
  unwriteName.value = "";
}

// 用来判断finished和unfinished是否为空
function isEmpty(): void {
  if (finished.value.length === 0) {
    finished.value.push({
      userName: "",
      task: "暂无",
      id: 0,
      date: "",
    });
  }
  if (unfinished.value.length === 0) {
    unfinished.value.push({
      userName: "",
      task: "暂无",
      id: 0,
      date: "",
    });
  }
}

// 日期
const dateValue = ref(
  new Date().toLocaleDateString("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
);
function getPlans() {
  // 获取组别任务
  getPlan(dateValue.value, user.user.groupId.toString())
    .then((response) => {
      // 选择其他日期，重新调用此回调函数时，置为空
      empty();
      response.data.data.forEach((value: plan) => {
        if (value.status == "已完成") {
          finished.value.push(value);
        } else if (value.status == "未完成") {
          unfinished.value.push(value);
        } else {
          unwriteName.value += value.userName + ",";
        }
      });
      // 判断是否为空
      isEmpty();
    })
    .catch((error) => {
      ElMessage.error(error);
    });
}

watchEffect(() => {
  getPlans();
});

// 选择框
const input1 = ref<string>("");

let selectChange: any = (input: string) => {
  if (input1.value) {
    getownPlan(input)
      .then((response) => {
        // 选择其他日期，重新调用此回调函数时，置为空
        empty();
        response.data.data.forEach((value: plan) => {
          if (value.status == "已完成") {
            finished.value.push(value);
          } else if (value.status == "未完成") {
            unfinished.value.push(value);
          } else {
            unwriteName.value += value.userName + `(${value.date})` + ",";
          }
        });

        // 判断是否为空
        isEmpty();
      })
      .catch((error) => {
        ElMessage.error(error);
      });
  } else if (input1.value == "") {
    getPlans();
  }
};
</script>
<style lang="less" scoped>
.planBlocks {
  display: flex;
  flex-direction: column;

  .datas {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;

    .select {
      width: 260px;
      display: flex;
      flex-direction: row;
    }
  }

  .planBlock {
    .el-row {
      margin-bottom: 20px;
    }

    .el-row:last-child {
      margin-bottom: 0;
    }

    .el-col {
      border-radius: 4px;
    }

    .ep-bg-purple {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 4px;
      min-height: 36px;
      font-weight: 600;
      font-size: 19px;
    }

    .grid-mixin(@color) {
      // border: solid 2px @color;
      .el-icon {
        margin-left: 5px;
        color: @color;
      }

      p {
        padding-left: 5px;
        color: @color;
      }
    }

    .grid-content1 {
      .grid-mixin(#0dbc79);
    }

    .grid-content2 {
      .grid-mixin(#dc362e);
    }

    .grid-content3 {
      .grid-mixin(#c0c4cc);
    }
  }
}

.page {
  position: relative;
  box-sizing: border-box;
  // max-width: 300px;
  font-family: cursive;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background: #fff;
  background-image: linear-gradient(#f5f5f0 1.1rem, #ccc 1.2rem);
  background-size: 100% 1.2rem;
  line-height: 1.2rem;
  padding: 1.4rem 0.5rem 0.3rem 4.5rem;
  margin-top: 20px;

  .time {
    text-align: right;
    padding-top: 2px;
    padding-right: 8px;
  }
}

// 任务本
.page::before,
.page::after {
  position: absolute;
  content: "";
  bottom: 10px;
  width: 25%;
  height: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
  z-index: -1;
  transition: all 0.3s ease;
}

.page::before {
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
}

.page::after {
  right: 15px;
  transform: skew(5deg) rotate(5deg);
}

.page:hover::before,
.page:hover::after {
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.4);
}

.page p {
  margin: 0;
  text-indent: 2.5rem;
  padding-bottom: 0.4rem;
  color: black;
  line-height: 20px;
  padding-top: 18px;
}

.margin {
  position: absolute;
  border-left: 1px solid #d88;
  height: 100%;
  left: 3.3rem;
  top: 0;

  p {
    text-indent: 1rem;
    padding: 15px 0;
  }
}

// 小本本
.papper {
  position: relative;
  box-sizing: border-box;
  min-height: 200px;
  background: #ffffff;
  background-image: linear-gradient(#ffffff 1.8rem, #ccc 1.9rem);
  background-size: 100% 1.9rem;
  border-radius: 10px;
  margin-top: 20px;
  line-height: 31px;

  p {
    font-size: 22px;
    font-weight: 600;
    font-family: cursive;
  }
}

.papper::before,
.papper::after {
  position: absolute;
  content: "";
  bottom: 10px;
  width: 40%;
  height: 10px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.7);
  z-index: -1;
  transition: all 0.3s ease;
}

.papper::before {
  left: 15px;
  transform: skew(-5deg) rotate(-5deg);
}

.papper::after {
  right: 15px;
  transform: skew(5deg) rotate(5deg);
}

.papper:hover::before,
.papper:hover::after {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}
</style>
