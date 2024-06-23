import Mock from "mockjs";

export default [
  // 组员管理页面获取组员
  {
    url: "/api/logins/getAllTeamMember",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { groupId } = query;
      if (groupId) {
        // 使用 Mock.js 生成模拟数据
        const data = Mock.mock({
          "list|30-50": [
            // 随机生成30到50个用户数据
            {
              userName: "@cname", // 生成一个中文名字
              password: "@string('number', 10)", // 生成一个10位数字字符串作为密码
              phoneNumber: /^1[3-9]\d{9}$/, // 生成一个符合中国手机号格式的随机数字
              "duration|10-100.1-2": 1, // 生成一个 10 到 100 之间的小数，保留 1 到 2 位小数
              leaderTaskWeek: "第@natural(1, 18)周", // 生成第1到第18周之间的随机周数
            },
          ],
        });
        return {
          code: 200,
          data: data.list,
        };
      } else {
        return {
          code: 400,
          message: "Invalid groupId",
        };
      }
    },
  },
  {
    url: "/api/logins/getAllTeamMember",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { groupId } = query;
      if (groupId) {
        // 使用 Mock.js 生成模拟数据
        const data = Mock.mock({
          "list|30-50": [
            // 随机生成30到50个用户数据
            {
              userName: "@cname", // 生成一个中文名字
              password: "@string('number', 10)", // 生成一个10位数字字符串作为密码
              phoneNumber: /^1[3-9]\d{9}$/, // 生成一个符合中国手机号格式的随机数字
              "duration|10-100.1-2": 1, // 生成一个 10 到 100 之间的小数，保留 1 到 2 位小数
              leaderTaskWeek: "第@natural(1, 18)周", // 生成第1到第18周之间的随机周数
            },
          ],
        });
        return {
          code: 200,
          data: data.list,
        };
      } else {
        return {
          code: 400,
          message: "Invalid groupId",
        };
      }
    },
  },
];
