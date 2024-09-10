import { createRouter, createWebHistory } from "vue-router";
import IntrusionLog from "../views/IntrusionLog.vue";
import TrendBoard from "../views/TrendBoard.vue";
import SystemManagement from "../views/SystemManagement.vue";

const routes = [
  {
    path: "/",
    redirect: "/trend-board", // 根路径重定向到 /trend-board
  },
  {
    path: "/trend-board",
    name: "TrendBoard",
    component: TrendBoard,
  },
  {
    path: "/intrusion-log",
    name: "IntrusionLog",
    component: IntrusionLog,
  },

  {
    path: "/system-management",
    name: "SystemManagement",
    component: SystemManagement,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
