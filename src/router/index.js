import { createRouter, createWebHistory } from "vue-router";
import IntrusionLog from "../views/IntrusionLog.vue";
import TrendBoard from "../views/TrendBoard.vue";
import SystemManagement from "../views/SystemManagement.vue";

const routes = [
  {
    path: "/intrusion-log",
    name: "IntrusionLog",
    component: IntrusionLog,
  },
  {
    path: "/trend-board",
    name: "TrendBoard",
    component: TrendBoard,
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
