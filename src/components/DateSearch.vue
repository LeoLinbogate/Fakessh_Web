<template>
  <div class="date-search">
    <el-form inline>
      <el-form-item label="Start Date">
        <el-date-picker
          v-model="startDate"
          type="date"
          placeholder="Select date"
          value-format="YYYY/MM/DD"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="End Date">
        <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="Select date"
          value-format="YYYY/MM/DD"
        ></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">Search</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DateSearch",
  emits: ["search"],
  data() {
    return {
      startDate: "",
      endDate: "",
    };
  },
  methods: {
    onSearch() {
      this.$emit("search", this.startDate, this.endDate);
    },
  },
};
</script>

<style scoped>
.date-search {
  /* Add your custom styles here */
}
</style>
