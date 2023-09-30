import http from "../utils/request";

// 登录
export const login = (username: string, password: string) => {
    return http.post('/api1/management/getInfo', { name: username, password: password })
}

// 组员管理页面获取组员
export const getMember = (groupId:number) => {
    return http.get('/api1/users',{ params:{groupId:groupId} })
}

// 组员管理页面删除
export const deleteMember = (id: number) => {
    let url = `/api1/users/${id}`
    return http.delete(url)
}

// 组员管理页面修改
export const editMember = (menber: object) => {
    return http.put('/api1/users', { ...menber })
}

// 获取用户所有动态
export const getDynamic = () => {
    return http.get('/api2/Share/getAll')
}

// 获取野狼组员的任务
export const getPlan = (date: string, groupid: string) => {
    return http.post('/api2/tasks/getAllTask', { date: date, groupId: groupid })
}

// 获取指定野狼组员的任务
export const getownPlan = (name: string, date: string) => {
    return http.get('/api2/tasks/getTasks', { params: { name: name, date: date } })
}

// 获取用户时长
export const getDuration = (groupId:number) => {
    return http.get('/api2/WeekSummary/getLastWeekDuration',{ params:{groupId:groupId} })
}

// 获取该组的周报
export const getWeekly = (week:string,groupId:number) => {
    return http.get('/api2/WeekSummary/getUrlByWeekGroupId',{ params:{week:week,groupId:groupId} })
}

// 获取所有的周期
export const getWeek = () => {
    return http.get('/api2/WeekSummary/getWeek')
}