<template>
  <div class="echart" ref="mychart" :style="myChartStyle"></div>
</template>
 
<script lang="ts" setup>
import { shallowRef, watch, StyleValue, ref, nextTick, onBeforeUnmount } from 'vue';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
  DataZoomComponent,
  DataZoomComponentOption
} from 'echarts/components';
import { BarChart, BarSeriesOption } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, CanvasRenderer, DataZoomComponent]);

type EChartsOption = echarts.ComposeOption<
  TitleComponentOption | TooltipComponentOption | GridComponentOption | LegendComponentOption | BarSeriesOption | DataZoomComponentOption
>;

const myChart = shallowRef<echarts.ECharts | undefined>();
// const sortData = ref<number[]>([])
const myChartStyle: StyleValue | undefined = { float: "left", width: '100%', height: '68vh', marginTop: '3vh' };
// 获取父组件传过来的yAxis和series数据 
const props = defineProps(['yAxisData', 'seriesData'])

// 对父组件传过来的数据进行排序
const propsDesc = ref<{ value: number; label: any; }[]>([]);

const option = shallowRef<EChartsOption>({
  title: {
    text: '一周时长统计'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '5%',
    bottom: '4%',
    containLabel: true
  },
  xAxis: {
    max: "dataMax",
    // boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: "category",
    data: propsDesc.value.map((item: { label: any; }) => item.label),//y轴数据
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    // max: props.yAxisData.length - 1
  },
  dataZoom: [
    {
      type: "inside",
      startValue: 0,
      endValue: 8,
      minValueSpan: 6,
      maxValueSpan: 6,
      yAxisIndex: [0],
      zoomOnMouseWheel: false,  // 关闭滚轮缩放
      moveOnMouseWheel: true, // 开启滚轮平移
      moveOnMouseMove: true  // 鼠标移动能触发数据窗口平移
    },
    {
      type: 'slider',
      realtime: true,
      startValue: 0,
      endValue: 8,
      width: '3.5',
      height: '80%',
      yAxisIndex: [0], // 控制y轴滚动
      fillerColor: "rgba(154, 181, 215, 1)", // 滚动条颜色
      borderColor: "rgba(17, 100, 210, 0.12)",
      backgroundColor: '#cfcfcf',//两边未选中的滑动条区域的颜色
      handleSize: 0, // 两边手柄尺寸
      showDataShadow: false,//是否显示数据阴影 默认auto
      showDetail: false, // 拖拽时是否展示滚动条两侧的文字   
      top: '10%',
      right: '5',
    }
  ],
  series: [
    {
      realtimeSort: false,
      name: "时长",
      type: "bar",
      data: propsDesc.value.map((item: { value: any; }) => item.value),//x轴数据 
      label: {
        show: true,
        position: "right",
        valueAnimation: false
      },
      itemStyle: {
        color: '#f9db88',
        borderColor: '#ff822d',
        borderWidth: 1
      }
    }
  ] as any,
  legend: {
    // show: true
  },
  animationDuration: 1000,
  animationDurationUpdate: 100,
  animationEasing: "linear",
  animationEasingUpdate: "linear"
})

const mychart = ref<HTMLElement | null>(null)

watch([props, propsDesc.value], async () => {
  propsDesc.value = props.seriesData
    .map((value: any, index: string | number) => ({ value, label: props.yAxisData[index] }))
    .sort((a: { value: number; }, b: { value: number; }) => b.value - a.value);

  await nextTick(); // 等待 DOM 更新

  const labels = propsDesc.value.map((item: { label: any; }) => item.label);
  const values = propsDesc.value.map((item: { value: any; }) => item.value);

  (option as any).value.yAxis.data = labels;
  (option as any).value.series[0].data = values;

  // await nextTick(); // 添加这一行来等待 DOM 更新
  myChart.value = echarts.init(mychart.value);
  pageUpdate();
}, { deep: true });

function pageUpdate() {
  myChart.value?.setOption(option.value);
  //随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    if (myChart.value) {
      myChart.value.resize();
    }
  });
}

// 在组件销毁前注销 ECharts 实例
onBeforeUnmount(() => {
  if (myChart.value) {
    myChart.value.dispose(); // 注销 ECharts 实例
    myChart.value = undefined; // 清空引用
  }
});

</script>