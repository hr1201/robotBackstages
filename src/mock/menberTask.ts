import { MockMethod } from "vite-plugin-mock";
import Mock from "mockjs";

export default [
  {
    url: "/api/groups/getGroupWeekTask",
    method: "get",
    response: ({ query }: { query: any }) => {
      const { groupId } = query;
      if (groupId) {
        // 使用 Mock.js 生成模拟数据
        const data = Mock.mock(
            // 随机生成2到10个用户数据
            {
              task:"@cparagraph()",
              description:"@csentence()"
            },
        );
        return {
          code: 200,
          data: data,
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
    url: "/api/groups/saveGroupTask",
    method: "post",
    response: ({ body }: { body: any }) => {
      const { task } = body;
      if (task) {
        // 使用 Mock.js 生成模拟数据
        return {
          code: 200,
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
