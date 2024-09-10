<template>
  <div>
    <AttackMap></AttackMap>
  </div>
  <div class="charts-container" v-loading="loading">
    <div style="margin-left: 0px; padding: 0; width: 99%">
      <TrendNum
        :totalNumber="totalNumber"
        :addrNumber="addrNumber"
        :usernameNumber="usernameNumber"
        :passwdNumber="passwdNumber"
      ></TrendNum>
    </div>
  </div>

  <div class="right-chart" v-loading="loading2">
    <div style="padding: 15px">
      <TopTenChart
        :passwdTopTen="passwdTopTen"
        :addrTopTen="addrTopTen"
        :usernameTopTen="usernameTopTen"
      ></TopTenChart>
    </div>
  </div>
  <div
    style="
      border: 1px solid #ccc;
      border-radius: 10px;
      margin-top: 10px;
      width: 99%;
    "
  >
    <div style="padding: 15px"><b>攻击趋势</b></div>
    <div style="padding: 15px">
      <MonthPick @search="handleSearch"></MonthPick>
    </div>
    <div v-loading="loding3">
      <GardientChart :data="historyData" />
    </div>
  </div>
</template>

<script>
import MonthPick from "../components/MonthPick.vue";
import GardientChart from "../components/GardientChart.vue";
import { LOGS_API } from "@/apis/index";
import { SUM_API } from "@/apis/index";
import { TOP_API } from "@/apis/index";
import axios from "axios";
import TrendNum from "../components/TrendNum.vue";
import TopTenChart from "../components/TopTenChart.vue";
import AttackMap from "../components/AttackMap.vue";
export default {
  name: "TrendBoard",
  components: {
    MonthPick,
    GardientChart,
    TrendNum,
    TopTenChart,
    AttackMap,
  },
  data() {
    return {
      loading: true,
      loading2: true,
      loading3: true,
      year: "",
      startDate: "",
      endDate: "",
      historyData: [], // 初始化为空数组
      totalNumber: "",
      addrNumber: "",
      usernameNumber: "",
      passwdNumber: "",
      passwdTopTen: [],
      addrTopTen: [],
      usernameTopTen: [],
    };
  },
  async created() {
    this.year = new Date().getFullYear();
    this.startDate = `${this.year}/01/01`;
    this.endDate = `${this.year}/12/31`;

    try {
      await Promise.all([
        this.fetchData(),
        this.fetchDataTop(),
        this.fetchDataSum(),
      ]);
    } catch (error) {
      console.error("Error during data fetching:", error);
      this.loading = false;
      this.loading2 = false;
      this.loading3 = false;
    }
  },
  methods: {
    async fetchDataTop() {
      try {
        const response = await axios.get(TOP_API);
        this.addrTopTen = response.data.addrTopTen;
        this.usernameTopTen = response.data.usernameTopTen;
        this.passwdTopTen = response.data.passwdTopTen;

        this.loading2 = false;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchDataSum() {
      try {
        const response = await axios.get(SUM_API);

        this.totalNumber = response.data.totalNumber;
        this.addrNumber = response.data.addrNumber;
        this.usernameNumber = response.data.usernameNumber;
        this.passwdNumber = response.data.passwdNumber;
        this.loading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchData() {
      try {
        const response = await axios.get(LOGS_API, {
          params: {
            startDate: this.startDate,
            endDate: this.endDate,
          },
        });
        this.historyData = response.data; // 更新数据
        this.loading3 = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        this.historyData = []; // 设置为空数组以防万一
      }
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
.charts-container {
  /* border: 1px solid #ccc; */
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.left-charts {
  width: 40%; /* 可根据实际情况调整宽度 */
}

.right-chart {
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  margin-right: 0;
  margin-top: 10px;
  width: 99%; /* 可根据实际情况调整宽度 */
}

.chart-container {
  width: 100%;
  margin-left: -5%;
  margin-top: 0;
  display: flex;
  justify-content: flex-start; /* 将内容向左对齐 */
  align-items: center; /* 垂直居中对齐 */
}
</style>
