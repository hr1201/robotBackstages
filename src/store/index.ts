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
            },
            hasVpn:0
        }
    },
    // computed 修饰值
    getters: {
        getUserImage():string{
            return this.user.userImage
        }
    },
    // methods 可以做同步异步，提交state
    actions: {
        logout() {
            this.$reset(); // 重置store状态，这个很重要，不重置的话重新登录状态化存储有可能不生效
            localStorage.removeItem('rarrot-pinia'); // 删除localStorage中的数据
        },
        setCollapse() {
            this.Collapse = !this.Collapse
        },
        setUser(username:string,groupId:number) {
            this.user.username = username,
            this.user.groupId = groupId
        },
        setuserImage(userImage:string) {
            this.user.userImage = userImage
        },
        setHasVpn(hasVpn:number){
            this.hasVpn=hasVpn
        }
    }
})
