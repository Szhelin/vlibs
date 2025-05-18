import { createApp } from "vue";
import App from "./App.vue";
import vLibs from "./vLibs";
import router from "./router";

// 自动导入 assets/icon 下的所有 svg
const requireAll = require.context("@/assets/icons", false, /\.svg$/);
requireAll.keys().forEach(requireAll);

createApp(App).use(vLibs).use(router).mount("#app");
