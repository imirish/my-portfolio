import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import AboutMePage from "@/pages/AboutMePage.vue";
import HomePage from "@/pages/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/my-profile",
    redirect: {
      name: "Home",
    },
    children: [
      { path: "home", name: "Home", component: HomePage },
      { path: "about-me", name: "AboutMe", component: AboutMePage },
    ],
  },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_API_URL),
  history: createWebHistory(),
  routes,
});

export default router;
