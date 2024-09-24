// import Mock from 'mockjs'

// export default [
//   {
//     url: '/api/groups/loginManagement',
//     method: 'post',
//     response: ({ body }: { body: any }) => {
//       const { groupName, password } = body
//       if (groupName === 'Rarrot' && password === 'Rarrot') {
//         return {
//           code: 200,
//           data: {
//             token: Mock.mock('@guid'), // 使用 mockjs 生成一个模拟的 token
//             groupId: Mock.mock('@integer(1, 8)'), // 使用 mockjs 生成一个模拟的 groupId
//           }
//         }
//       } else {
//         return {
//           code: 400,
//           message: 'Invalid username or password'
//         }
//       }
//     }
//   },
//   {
//     url: '/api/groups/getGroupInfo',
//     method: 'get',
//     response: ({ query }: { query: any }) => {
//       const { groupId } = query
//       if (groupId) {
//         return {
//           code: 200,
//           data: {
//             headUrl: Mock.mock('@image'), // 使用 mockjs 生成一个模拟的图片 URL
//             // ...其他组信息
//           }
//         }
//       } else {
//         return {
//           code: 400,
//           message: 'Invalid groupId'
//         }
//       }
//     }
//   }
// ]