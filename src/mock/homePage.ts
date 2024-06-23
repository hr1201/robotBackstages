import Mock from "mockjs";

export default [
  {
    url: "/api/logins/getGroupAllUserDuration",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { groupId } = query;
      if (groupId) {
        // 使用 Mock.js 生成模拟数据
        const data = Mock.mock({
          "list|10-20": [
            // 随机生成2到10个用户数据
            {
              id: "@id", // id 从 128 开始，每次加 1
              userName: "@cname", // 生成一个单词作为用户名
              "duration|10-100.1-2": 1, // 生成一个 10 到 100 之间的小数，保留 1 到 2 位小数
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
