import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

// Import your pages
import ContactMePage from "@/pages/ContactMePage.vue";
import FigmaProjectPage from "@/pages/FigmaProjectPage.vue";
import HomePage from "@/pages/HomePage.vue";
import ProjectsPage from "@/pages/ProjectsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: {
      name: "Home",
    },
    children: [
      { path: "home", name: "Home", component: HomePage },
      { path: "projects", name: "Projects", component: ProjectsPage },
      { path: "contact-me", name: "ContactMe", component: ContactMePage },
      {
        path: "figma-project",
        name: "FigmaProject",
        component: FigmaProjectPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
