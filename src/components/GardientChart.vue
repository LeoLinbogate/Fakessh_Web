<template>
  <div ref="chartRef" style="width: 100%; height: 400px"></div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import * as echarts from "echarts";

export default {
  name: "GradientChart",
  props: {
    data: {
      type: Array,
      default: () => [], // 默认值为一个空数组
    },
  },
  setup(props) {
    const chartRef = ref(null);
    let chartInstance = null;

    const initChart = () => {
      if (!Array.isArray(props.data)) {
        console.warn("Invalid data format. Expected an array.");
        return;
      }

      if (chartInstance) {
        chartInstance.dispose(); // 清理旧图表实例
      }

      chartInstance = echarts.init(chartRef.value);
      const option = {
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            // 自定义提示框的内容格式
            let result = "";
            params.forEach((item) => {
              result += `${item.seriesName}<br/>日期: ${item.name}<br/>攻击数: ${item.value}<br/>`;
            });
            return result;
          },
        },
        xAxis: {
          type: "category",
          data: props.data.map((item) => item.hdate) || [],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "攻击态势",
            data: props.data.map((item) => item.hcount) || [],
            type: "line",
            smooth: true,
          },
        ],
      };
      chartInstance.setOption(option);
    };

    onMounted(() => {
      initChart();
    });

    watch(
      () => props.data,
      () => {
        initChart(); // 数据变化时重新初始化图表
      },
      { deep: true }
    );

    return {
      chartRef,
    };
  },
};
</script>

<style scoped>
/* 添加一些样式 */
</style>
