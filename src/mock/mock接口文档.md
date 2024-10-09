mock接口文档

1. get

path：/api/logins/getGroupAllUserDuration

data：{
  "code": 200,
  "data|10-20": [
    {
      "id": "@id",                // 使用 Mock.js 内置的 ID 生成器
      "userName": "@cname",        // 使用 Mock.js 内置的中文名字生成器
      "duration|10-100.1-2": 1     // 生成 10 到 100 之间的随机浮点数，保留 1 到 2 位小数
    }
  ]
}



1. get

```
url`: `/api/logins/getAllTeamMember
method`: `GET
{
  "code": 200,
  "data|30-50": [
    {
      "userName": "@cname", 
      "password": "@string('number', 10)", 
      "phoneNumber": /^1[3-9]\d{9}$/,
      "duration|10-100.1-2": 1, 
      "leaderTaskWeek": "第@natural(1, 18)周"
    }
  ]
}


```



**GET 请求 `/groups/getGroupWeekTask`**

{
  "code": 200,
  "data": {
    "task": "@cparagraph()",
    "description": "@csentence()"
  }
}

**POST 请求 `/groups/saveGroupTask`**

{  "code": 200 }



**GET 请求 `/tasks/getTasksByGroupIdAndDate`**

{
  "code": 200,
  "data|30-50": [
    {
      "id": "@id",
      "task": "@cword(1, 30)", // 生成1到30个汉字的任务描述
      "date": "@date('yyyy-MM-dd')", // 随机生成过去的日期，格式化为 yyyy-MM-dd
      "userName": "@cname", // 生成一个随机中文名字
      "status": "@pick(['已完成', '未完成', '未填写'])" // 随机选择任务状态
    }
  ]
}

**GET 请求 `/tasks/getSearchUserTask`**

{
  "code": 200,
  "data|1-10": [
    {
      "id": "@id",
      "task": "@cword(1, 30)", // 生成任务描述
      "date": "@date('yyyy-MM-dd')", // 随机生成过去的日期
      "userName": "@cname", // 中文名字
      "status": "@pick(['已完成', '未完成', '未填写'])" // 任务状态
    }
  ]
}



**GET 请求 `/WeekSummary/getWeek`**

{
  "code": 200,
  "data|20": [
    {
      "week": "第@increment(1)周" // 从第1周到第20周自动递增
    }
  ]
}

**GET 请求 `/WeekSummary/getUrlByWeekGroupId`**

{
  "code": 200,
  "data|10-20": [
    {
      "id": "@id",
      "summary": "@cparagraph", // 生成随机中文段落
      "userId": "@id",
      "userName": "@cname", // 随机生成中文名字
      "wordUrl": "{
  "code": 200,
  "data|10-20": [
    {
      "id": "@id",
      "summary": "@cparagraph", // 生成随机中文段落
      "userId": "@id",
      "userName": "@cname", // 随机生成中文名字
      "wordUrl": "https://hr-1313954536.cos.ap-guangzhou.myqcloud.com/%E6%AC%A2%E8%BF%8E%E6%82%A8%E7%9A%84%E5%88%B0%E6%9D%A5.docx", // 固定URL
      "week": "@pick(['第1周', '第2周', '第3周', '第4周', '第5周'])", // 随机选择周次
      "time": "@datetime('yyyy-MM-dd HH:mm:ss')" // 随机生成日期时间
    }
  ]
}", // 固定URL
      "week": "@pick(['第1周', '第2周', '第3周', '第4周', '第5周'])", // 随机选择周次
      "time": "@datetime('yyyy-MM-dd HH:mm:ss')" // 随机生成日期时间
    }
  ]
}



