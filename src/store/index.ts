import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useStore = defineStore(Names.attribute, {
    state: () => {
        return {
            Collapse: true,
            user:{
                username:'',
                userImage:'',
                groupId:0
            }
        }
    },
    // computed 修饰值
    getters: {

    },
    // methods 可以做同步异步，提交state
    actions: {
        setCollapse() {
            this.Collapse = !this.Collapse
        },
        setUser(username:string,userImage:string,groupId:number) {
            this.user.username = username,
            this.user.userImage = userImage,
            this.user.groupId = groupId
        },
    }
})
