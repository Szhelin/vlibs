import './icons'; // 注册 SVG 图标
import type { App } from "vue";

export { message } from "./message";
export { confirm } from "./confirm";

// 1. 自动注册当前目录下的所有 .vue 组件（只取第一层）
const components = require.context("./", true, /\.vue$/);

export default {
  install(app: App) {
    components.keys().forEach((key: string) => {
      const componentModule = components(key);
      const component = componentModule.default;

      if (!component) return;

      // 提取组件文件夹名称作为注册名（如 Button.vue -> zl-button）
      const pathSegments = key.replace("./", "").split("/");
      const componentName = "zl-" + pathSegments[0].replace(/\.vue$/, "");

      app.component(componentName, component);
    });
  },
};
