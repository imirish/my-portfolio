import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import AboutMePage from "@/pages/AboutMePage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";
import ContactMePage from "@/pages/ContactMePage.vue";
import FigmaProjectPage from "@/pages/FigmaProjectPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
    children: [
      { path: "home", name: "Home", component: HomePage },
      { path: "about-me", name: "AboutMe", component: AboutMePage },
      { path: "projects", name: "Projects", component: ProjectsPage },
      { path: "contact-me", name: "ContactMe", component: ContactMePage },
      { path: "figma-project", name: "FigmaProject", component: FigmaProjectPage },
    ],
  },
];

const router = createRouter({
  //   history: createWebHistory(import.meta.env.VITE_API_URL),
  history: createWebHashHistory(),
  routes,
});

export default router;
