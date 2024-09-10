<template>
  <div>
    <div class="layout-container-demo">
      <el-container>
        <el-header style="text-align: left; font-size: 12px">
          <div class="toolbar">
            <span>入侵检测系统</span>
          </div>
        </el-header>
      </el-container>

      <el-container>
        <el-aside
          style="
            width: 12%;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin-top: 10px;
            margin-right: 10px;
            background-color: #cccccc14;
          "
        >
          <el-scrollbar>
            <el-menu :router="true" :default-active="$route.path">
              <el-menu-item index="/trend-board">趋势看板</el-menu-item>
              <el-menu-item index="/intrusion-log">入侵日志</el-menu-item>
              <el-menu-item index="/system-management">系统管理</el-menu-item>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <el-main style="margin-top: 10px"> <router-view /> </el-main>
      </el-container>
    </div>
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
}
.layout-container-demo .el-menu {
  border-right: none;
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

/* 使用 ::v-deep 选择器覆盖默认的 el-menu-item 样式 */
::v-deep .el-menu-item.is-active {
  background-color: #1da2e0 !important; /* 浅蓝色背景 */
  color: white !important; /* 字体颜色改为白色 */
}

::v-deep .el-menu-item:hover {
  background-color: #1da2e0b7 !important; /* 鼠标悬停时的背景色 */
  color: white !important; /* 鼠标悬停时字体颜色改为白色 */
}
</style>
