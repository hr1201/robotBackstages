import http from "../utils/request";

let urls: string

if (import.meta.env.MODE === 'development') {
    // 开发环境
    urls = '';
    console.log('当前环境: development', urls);
} else {
    // 生产环境
    urls = import.meta.env.VITE_BASIC_URL || 'https://mock.rarrot.ren/mock/66f26b73cf4407324fb66b1c';
    console.log('当前环境: production', urls);
}

// 登录
export const login = (username: string, password: string) => {
    return http.post(urls + '/groups/loginManagement', { groupName: username, password: password })
}

// 组员管理页面获取组员
export const getMember = (groupId: number) => {
    return http.get(urls + '/logins/getAllTeamMember', { params: { groupId: groupId } })
}

// 组员管理页面删除
export const deleteMember = (id: number) => {
    let url = urls + `/users/${id}`
    return http.delete(url)
}

// 组员管理页面修改
export const editMember = (menber: object) => {
    return http.put(urls + '/logins', { ...menber })
}

// 获取用户所有动态
export const getDynamic = () => {
    return http.get(urls + '/Share/getAll')
}

// 获取野狼组员的任务
export const getPlan = (date: string, groupid: string) => {
    return http.get(urls + '/tasks/getTasksByGroupIdAndDate', { params: { date: date, groupId: groupid } })
}

// 获取指定野狼组员的任务
export const getownPlan = (name: string) => {
    return http.get(urls + '/tasks/getSearchUserTask', { params: { userName: name } })
}

// 获取用户时长
export const getDuration = (groupId: number) => {
    return http.get(urls + '/logins', { params: { groupId: groupId } })
}

// 获取该组的周报
export const getWeekly = (week: string, groupId: number) => {
    return http.get(urls + '/WeekSummary/getUrlByWeekGroupId', { params: { week: week, groupId: groupId } })
}

// 获取所有的周期
export const getWeek = () => {
    return http.get(urls + '/WeekSummary/getWeek')
}

// 获取组内用户以及用户上周时长
export const getGroupAllUserDuration = (groupId: number) => {
    return http.get(urls + '/logins/getGroupAllUserDuration', { params: { groupId: groupId } })
}

// 获取用户的头像
export const getGroupInfo = (groupId: number) => {
    return http.get(urls + '/groups/getGroupInfo', { params: { groupId: groupId } })
}

// 设置正式队员的任务
export const setTask = (task: object) => {
    return http.post(urls + '/LeaderTask/setFormalTeamMemberLeaderTask', { ...task })
}

// 保存或修改组别任务
export const saveGroupTask = (task: object) => {
    return http.post(urls + '/groups/saveGroupTask', { ...task })
}

// 获取组别本周任务
export const getGroupWeekTask = (groupId: number) => {
    return http.get(urls + '/groups/getGroupWeekTask', { params: { groupId: groupId } })
}
