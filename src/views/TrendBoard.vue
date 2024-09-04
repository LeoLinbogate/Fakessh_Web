<template>
  <div style="margin-top: auto" v-loading="loading">
    <TrendNum
      :totalNumber="totalNumber"
      :addrNumber="addrNumber"
      :usernameNumber="usernameNumber"
      :passwdNumber="passwdNumber"
    ></TrendNum>
  </div>
  <div style="margin-top: 3%">
    <MonthPick @search="handleSearch"></MonthPick>
  </div>

  <div class="chart-container">
    <GardientChart :data="historyData" />
  </div>
</template>

<script>
import MonthPick from "../components/MonthPick.vue";
import GardientChart from "../components/GardientChart.vue";
import { LOGS_API } from "@/apis/index";
import { SUM_API } from "@/apis/index";
import axios from "axios";
import TrendNum from "../components/TrendNum.vue";
export default {
  name: "TrendBoard",
  components: {
    MonthPick,
    GardientChart,
    TrendNum,
  },
  data() {
    return {
      loading: true,
      year: "",
      startDate: "",
      endDate: "",
      historyData: [], // 初始化为空数组
      totalNumber: 123,
      addrNumber: 456,
      usernameNumber: 512,
      passwdNumber: 333,
    };
  },
  async created() {
    this.year = new Date().getFullYear();
    this.startDate = `${this.year}/01/01`;
    this.endDate = `${this.year}/12/31`;
    await this.fetchData(); // 调用 fetchData 方法
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const response = await axios.get(LOGS_API, {
          params: {
            startDate: this.startDate,
            endDate: this.endDate,
          },
        });
        this.historyData = response.data; // 更新数据
      } catch (error) {
        console.error("Error fetching data:", error);
        this.historyData = []; // 设置为空数组以防万一
      }

      try {
        const response = await axios.get(SUM_API);
        console.log(response);
        this.totalNumber = response.data.totalNumber;
        this.addrNumber = response.data.addrNumber;
        this.usernameNumber = response.data.usernameNumber;
        this.passwdNumber = response.data.passwdNumber;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      this.loading = false;
    },
    handleSearch(year) {
      // 将接收到的年份转换为 YYYY/MM/DD 格式
      this.startDate = `${year}/01/01`;
      this.endDate = `${year}/12/31`;

      this.fetchData(); // 触发数据更新
    },
  },
  async mounted() {},
};
</script>

<style scoped>
.chart-container {
  width: 100%;
  margin-left: -5%;
  margin-top: 0;
  display: flex;
  justify-content: flex-start; /* 将内容向左对齐 */
  align-items: center; /* 垂直居中对齐 */
}
</style>
