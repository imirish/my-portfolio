import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import AboutMePage from "@/pages/AboutMePage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/my-profile-danica",
    redirect: {
      name: "Home",
    },
    children: [
      { path: "home", name: "Home", component: HomePage },
      { path: "about-me", name: "AboutMe", component: AboutMePage },
      { path: "projects", name: "Projects", component: ProjectsPage },
    ],
  },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_API_URL),
  history: import.meta.env.VITE_BLACKHOLE
    ? createWebHistory()
    : createWebHashHistory(),
  routes,
});

export default router;
