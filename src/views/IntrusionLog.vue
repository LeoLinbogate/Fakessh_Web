<template>
  <div>
    <date-search @search="handleSearch" style="margin-left: 25px"></date-search>
  </div>

  <div class="table-container" v-loading="loading">
    <el-container
      class="layout-container-demo"
      style="height: 550px; padding-left: 0"
    >
      <el-main>
        <el-scrollbar>
          <el-table :data="records">
            <el-table-column prop="date" label="Date"></el-table-column>
            <el-table-column prop="time" label="Time"></el-table-column>
            <el-table-column prop="client" label="Client"></el-table-column>
            <el-table-column prop="addr" label="Address"></el-table-column>
            <el-table-column prop="username" label="Username"></el-table-column>
            <el-table-column prop="passwd" label="Password"></el-table-column>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
    <el-pagination
      class="pagination-container"
      background
      layout="total, sizes,prev, pager, next, jumper"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300]"
      :page-size="pageSize"
      :total="totalRecords"
      @current-change="handlePageChange"
      @size-change="handleSizeChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
import DateSearch from "../components/DateSearch.vue";
import { RECORDS_API } from "@/apis/index";
export default {
  name: "RecordComp",
  components: {
    DateSearch,
  },
  data() {
    return {
      loading: true,
      records: [],
      startDate: "",
      endDate: "",
      totalRecords: 0,
      currentPage: 1,
      pageSize: 100,
    };
  },
  async created() {
    await this.fetchRecords();
  },
  methods: {
    async handleSearch(startDate, endDate) {
      this.loading = true;
      this.startDate = startDate;
      this.endDate = endDate;
      this.currentPage = 1;
      this.pageSize = 100;
      await this.fetchRecords();
    },
    async fetchRecords() {
      try {
        this.loading = true;
        const params = {
          page: this.currentPage,
          size: this.pageSize,
        };
        if (this.startDate) {
          params.startDate = this.startDate;
        }
        if (this.endDate) {
          params.endDate = this.endDate;
        }

        const response = await axios.get(RECORDS_API, {
          params,
        });
        this.loading = false;
        this.records = response.data.records;
        this.totalRecords = response.data.total;
      } catch (error) {
        console.error("Error fetching records:", error);
      }
    },
    handlePageChange(page) {
      this.currentPage = page;
      this.fetchRecords();
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.currentPage = 1; // 当改变页面大小时，回到第一页
      this.fetchRecords();
    },
  },
};
</script>
<style scoped>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
}
</style>
