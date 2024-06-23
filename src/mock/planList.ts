import Mock from "mockjs";

let taskData: Array<any> = []; // 用于存储生成的任务数据

// 生成相对日期的函数
function getRandomPastDate(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - Math.floor(Math.random() * daysAgo));
  return date.toISOString().split('T')[0]; // 格式化为 yyyy-MM-dd
}

export default [
  // 组员管理页面获取组员
  {
    url: "/api/tasks/getTasksByGroupIdAndDate",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { date, groupId } = query;
      if (groupId && date) {
        // 使用 Mock.js 生成模拟数据
        taskData = Mock.mock({
          "list|30-50": [
            {
              id: "@id",
              task: "@cword(1, 30)", // 生成一个1到30个汉字的任务描述
              date: () => getRandomPastDate(10), // 生成过去10天内的随机日期
              userName: "@cname", // 生成一个中文名字
              status: "@pick(['已完成', '未完成', '未填写'])", // 随机选择一个状态
            },
          ],
        }).list;

        // 过滤数据，只有 date 相同的才返回
        const filteredData = taskData.filter((item: { date: string }) => item.date === date);

        return {
          code: 200,
          data: filteredData,
        };
      } else {
        return {
          code: 400,
          message: "Invalid groupId or date",
        };
      }
    },
  },
  // 搜索用户任务
  {
    url: "/api/tasks/getSearchUserTask",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { userName } = query;
      if (userName) {
        // 过滤数据，只有 userName 模糊匹配的才返回
        const filteredList = taskData.filter((item: { userName: string }) =>
          item.userName.includes(userName)
        );

        return {
          code: 200,
          data: filteredList,
        };
      } else {
        return {
          code: 400,
          message: "Invalid userName",
        };
      }
    },
  },
];
