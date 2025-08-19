import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import SinglePage from "@/pages/SinglePage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: SinglePage },
  // {
  //   path: "/work",
  //   name: "Work",
  //   component: () => import("@/pages/WorkPage.vue"),
  // },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_API_URL),
  history: createWebHistory(),
  routes,
});

export default router;
