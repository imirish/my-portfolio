import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import HomePage from "@/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", name: "Home", component: HomePage },
  {
    path: "/about-me",
    name: "AboutMe",
    component: () => import("@/pages/AboutMePage.vue"),
  },
  {
    path: "/work",
    name: "Work",
    component: () => import("@/pages/WorkPage.vue"),
  },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_API_URL),
  history: createWebHistory(),
  routes,
});

export default router;
