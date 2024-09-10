<template>
  <div class="container">
    <div class="chart-item" ref="usernameChart" style="height: 250px">
      <!-- Username chart -->
    </div>
    <div class="chart-item" ref="passwordChart" style="height: 250px">
      <!-- Password chart -->
    </div>
    <div class="chart-item" ref="addressChart" style="height: 250px">
      <!-- Address chart -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "TopTenChart",
  props: {
    passwdTopTen: {
      type: Array,
      required: true,
    },
    addrTopTen: {
      type: Array,
      required: true,
    },
    usernameTopTen: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      passwordChart: null,
      addressChart: null,
      usernameChart: null,
    };
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      // 初始化密码图表
      this.passwordChart = echarts.init(this.$refs.passwordChart);
      this.addressChart = echarts.init(this.$refs.addressChart);
      this.usernameChart = echarts.init(this.$refs.usernameChart);

      // 设置初始图表
      this.updatePasswordChart();
      this.updateAddressChart();
      this.updateUsernameChart();
    },
    updatePasswordChart() {
      const passwdOption = {
        title: {
          text: "Top 10 Passwords",
        },
        xAxis: {
          axisLabel: {
            interval: 0, // 显示所有标签
            rotate: 30, // 旋转30度
            fontSize: 12, // 标签字体大小
          },
          type: "category",
          data: this.passwdTopTen.map((item) => item.passwd),
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter(value) {
              return (value / 1000).toFixed(1) + "K";
            },
          },
        },
        series: [
          {
            data: this.passwdTopTen.map((item) => item.count),
            type: "bar",
            barWidth: "50%",
            label: {
              show: true, // 显示数据标签
              position: "top", // 数据标签显示在柱子顶部
              formatter: "{c}", // 显示数据的值
            },
          },
        ],
      };
      this.passwordChart.setOption(passwdOption);
    },
    updateAddressChart() {
      const addrOption = {
        title: {
          text: "Top 10 IP Addresses",
        },
        xAxis: {
          axisLabel: {
            interval: 0, // 显示所有标签
            rotate: 30, // 旋转30度
            fontSize: 12, // 标签字体大小
          },
          type: "category",
          data: this.addrTopTen.map((item) => item.addr),
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter(value) {
              return (value / 1000).toFixed(1) + "K";
            },
          },
        },
        series: [
          {
            data: this.addrTopTen.map((item) => item.count),
            type: "bar",
            barWidth: "50%",
            label: {
              show: true, // 显示数据标签
              position: "top", // 数据标签显示在柱子顶部
              formatter: "{c}", // 显示数据的值
            },
          },
        ],
      };
      this.addressChart.setOption(addrOption);
    },
    updateUsernameChart() {
      const usernameOption = {
        title: {
          text: "Top 10 Usernames",
        },
        xAxis: {
          axisLabel: {
            interval: 0, // 显示所有标签
            rotate: 30, // 旋转30度
            fontSize: 12, // 标签字体大小
          },
          type: "category",
          data: this.usernameTopTen.map((item) => item.username),
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter(value) {
              return (value / 1000).toFixed(1) + "K";
            },
          },
        },
        series: [
          {
            data: this.usernameTopTen.map((item) => item.count),
            type: "bar",
            barWidth: "50%",
            label: {
              show: true, // 显示数据标签
              position: "top", // 数据标签显示在柱子顶部
              formatter: "{c}", // 显示数据的值
            },
          },
        ],
      };
      this.usernameChart.setOption(usernameOption);
    },
  },
  watch: {
    passwdTopTen: {
      handler() {
        if (this.passwordChart) {
          this.updatePasswordChart();
        }
      },
      deep: true,
    },
    addrTopTen: {
      handler() {
        if (this.addressChart) {
          this.updateAddressChart();
        }
      },
      deep: true,
    },
    usernameTopTen: {
      handler() {
        if (this.usernameChart) {
          this.updateUsernameChart();
        }
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}

.chart-item {
  flex-basis: calc(
    50% - 10px
  ); /* 让每个子项占据50%的空间，减去10px是为了留出一些间距 */
  box-sizing: border-box;
  padding: 5px; /* 添加一些内边距使图表之间有间隔 */
}
</style>
