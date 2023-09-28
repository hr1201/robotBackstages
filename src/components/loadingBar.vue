<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue'

let speed = ref<number>(1)
let bar = ref<HTMLElement>()
let timer = ref<number>(0)

// 切换路径开始读条
const startLoading = () => {
    // 获取dom元素
    let dom = bar.value as HTMLElement;
    speed.value = 1

    // requestAnimationFrame采用系统时间间隔，保持最佳绘制效率
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1;
            dom.style.width = speed.value + '%'
            // 进行递归
            timer.value = window.requestAnimationFrame(fn)
        } else {
            // 当speed.value>=90，就进行重新设置speed的值以及清除动画
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })

}

// 读条结束
const endLoading = () => {
    let dom = bar.value as HTMLElement;
    setTimeout(() => {
        window.requestAnimationFrame(() => {
            speed.value = 100;
            dom.style.width = speed.value + '%'
        })
    }, 500)

}

// 暴露出去
defineExpose({
    startLoading,
    endLoading
})
</script>
    
<style scoped lang="less">
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2px;

    .bar {
        height: inherit;
        width: 0;
        background: #00d26a;
    }
}
</style>