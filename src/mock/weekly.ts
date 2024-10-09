import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

let taskData: Array<any> = []; // 用于存储生成的任务数据
let weeks: Array<string> = []; // 用于存储生成的week数据

export default [
  // 获取所有的周期
  {
    url: "/api/WeekSummary/getWeek",
    method: "get",
    response: () => {
      // 生成固定的 20 个周次数据
      if (weeks.length === 0) {
        weeks = Array.from({ length: 20 }, (_, i) => `第${i + 1}周`);
      }

      return {
        code: 200,
        data: weeks,
      };
    },
  },
  // 获取该组的周报
  {
    url: "/api/WeekSummary/getUrlByWeekGroupId",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { week, groupId } = query;
      if (groupId && week) {
        // 使用 Mock.js 生成模拟数据
        taskData = Mock.mock({
          "list|10-20": [
            {
              id: "@id",
              summary: "@cparagraph", // 随机生成一段文字作为摘要
              userId: "@id",
              userName: "@cname", // 生成一个中文名字
              wordUrl: "https://hr-1313954536.cos.ap-guangzhou.myqcloud.com/%E6%AC%A2%E8%BF%8E%E6%82%A8%E7%9A%84%E5%88%B0%E6%9D%A5.docx", // 生成一个 URL
              week: week, // 使用传入的周次
              time: "@datetime('yyyy-MM-dd HH:mm:ss')", // 随机生成一个时间
            },
          ],
        }).list;

        return {
          code: 200,
          data: taskData,
        };
      } else {
        return {
          code: 400,
          message: "Invalid groupId or week",
        };
      }
    },
  },
] as MockMethod[];
