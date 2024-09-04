<template>
  <div class="layout-container-demo">
    <el-container>
      <el-header style="text-align: left; font-size: 12px">
        <div class="toolbar">
          <span>入侵检测系统</span>
        </div>
      </el-header>
    </el-container>

    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu :router="true" :default-active="$route.path">
            <el-menu-item index="/intrusion-log">入侵日志</el-menu-item>
            <el-menu-item index="/trend-board">趋势看板</el-menu-item>
            <el-menu-item index="/system-management">系统管理</el-menu-item>
          </el-menu></el-scrollbar
        >
      </el-aside>

      <el-main style="margin-top: 10px"> <router-view /> </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
};
</script>
<style scoped>
.layout-container-demo .el-header {
  position: relative;
  background-color: rgb(46, 157, 222);
  color: var(--el-text-color-primary);
}
.layout-container-demo .el-aside {
  color: var(--el-text-color-primary);

  /* background-color: rgb(77, 167, 220); */
}
.layout-container-demo .el-menu {
  border-right: none;
  /* background-color: rgb(77, 167, 220); */
}
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
  font-size: large;
  color: rgb(255, 255, 255);
}
</style>
