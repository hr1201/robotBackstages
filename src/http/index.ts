import http from "../utils/request";

// 登录
export const login = (username: string, password: string) => {
    return http.post('groups/loginManagement', { groupName: username, password: password })
}

// 组员管理页面获取组员
export const getMember = (groupId:number) => {
    return http.get('/logins',{ params:{groupId:groupId} })
}

// 组员管理页面删除
export const deleteMember = (id: number) => {
    let url = `/users/${id}`
    return http.delete(url)
}

// 组员管理页面修改
export const editMember = (menber: object) => {
    return http.put('/logins', { ...menber })
}

// 获取用户所有动态
export const getDynamic = () => {
    return http.get('/Share/getAll')
}

// 获取野狼组员的任务
export const getPlan = (date: string, groupid: string) => {
    return http.get('/tasks/getTasksByGroupIdAndDate', { params:{date: date, groupId: groupid} })
}

// 获取指定野狼组员的任务
export const getownPlan = (name: string) => {
    return http.get('/tasks/getSearchUserTask', { params: { userName: name } })
}

// 获取用户时长
export const getDuration = (groupId:number) => {
    return http.get('/logins',{ params:{groupId:groupId} })
}

// 获取该组的周报
export const getWeekly = (week:string,groupId:number) => {
    return http.get('/WeekSummary/getUrlByWeekGroupId',{ params:{week:week,groupId:groupId} })
}

// 获取所有的周期
export const getWeek = () => {
    return http.get('/WeekSummary/getWeek')
}

// 获取组内用户以及用户上周时长
export const getGroupAllUserDuration = (groupId:number) => {
    return http.get('/logins/getGroupAllUserDuration',{ params:{groupId:groupId} })
}

// 获取用户的头像
export const getGroupInfo = (groupId:number) => {
    return http.get('/groups/getGroupInfo',{ params:{groupId:groupId} })
}
