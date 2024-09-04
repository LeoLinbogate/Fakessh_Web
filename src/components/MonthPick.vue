<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block1">
        <span class="demonstration">Year</span>
        <el-date-picker
          v-model="year"
          type="year"
          placeholder="Pick a year"
          value-format="YYYY"
        />
      </div>
    </div>
    <!-- <div class="container">
      <div class="block2">
        <span class="demonstration">Month</span>
        <el-date-picker
          v-model="month"
          type="month"
          placeholder="Pick a month"
        />
      </div>
    </div> -->
    <div style="margin-left: 10px">
      <el-button type="primary" @click="onSearch">Search</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "MonthPicker",
  emits: ["search"],
  data() {
    return {
      year: "",
      // month: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.year);
    },
  },
};
</script>
<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block2 {
  text-align: center;
  margin-left: 20px;
  flex: 1;
}
.demo-date-picker .demonstration {
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-right: 10px;
}
/* .demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}

.demo-date-picker .block:last-child {
  border-right: none;
}

.demo-date-picker .container {
  flex: 1;
  border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container .block {
  border-right: none;
}

.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
} */
</style>
