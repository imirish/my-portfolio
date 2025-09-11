import ripple from "@/directives/ripple";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@/assets/styles/style.css";
import "@/assets/tailwind.css";

const app = createApp(App);

app.directive("ripple", ripple);
app.use(router);

app.mount("#app");
