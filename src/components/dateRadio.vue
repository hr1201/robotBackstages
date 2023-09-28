<template>
    <div>
        <!-- 后续可能更新，简化日选择 -->
        <div class="monthData">
            选择月份：
            <DatePicker 
                placeholder="请选择月份" 
                mode="month" 
                format="yyyy-MM" 
                :max-date="new Date()"
                :width="200" 
                v-model="monthValue" 
            />
        </div>
        选择日期：
        <ul class="wrapper">
            <li class="icon first">
                <!-- <span class="tooltip">1</span> -->
                <span><i class="fab fa-first-f">1</i></span>
            </li>
            <li class="icon second">
                <span><i class="fab fa-second">2</i></span>
            </li>
            <li class="icon third">
                <span><i class="fab fa-third">3</i></span>
            </li>
            <li class="icon first">
                <span><i class="fab fa-first-f">1</i></span>
            </li>
            <li class="icon second">
                <span><i class="fab fa-second">2</i></span>
            </li>
            <li class="icon third">
                <span><i class="fab fa-third">3</i></span>
            </li>
            
        </ul>
    </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue'
import { DatePicker } from 'vue-amazing-ui'
import 'vue-amazing-ui/css'

const monthValue = ref({
    year: new Date().getFullYear(),
    month: new Date().getMonth()
})

watchEffect(() => {
    console.log('monthValue:', monthValue.value)
})

</script>
<style lang="less" scoped>
.wrapper {
    display: inline-flex;
    list-style: none;
    // height: 120px;
    // width: 100%;
    padding-top: 10px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
}

.wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 7px 8px 7px 0px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .first:hover,
.wrapper .first:hover .tooltip,
.wrapper .first:hover .tooltip::before {
    background: #1877F2;
    color: #fff;
}

.wrapper .second:hover,
.wrapper .second:hover .tooltip,
.wrapper .second:hover .tooltip::before {
    background: #1DA1F2;
    color: #fff;
}

.wrapper .third:hover,
.wrapper .third:hover .tooltip,
.wrapper .third:hover .tooltip::before {
    background: #E4405F;
    color: #fff;
}
</style>