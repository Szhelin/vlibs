<template>
  <div class="home-container">
    <div class="home-content">
      <h1 class="title">vLibs 组件库 / vLibs Component Library</h1>
      <p class="desc">
        <strong>vLibs</strong> 是一套基于 Vue 3
        的轻量级组件库，旨在提供优雅、灵活且可扩展的组件，帮助开发者快速构建现代
        Web 应用。
        <br />
        <strong>vLibs</strong> is a lightweight component library based on Vue
        3, designed to offer elegant, flexible, and extensible components for
        building modern web applications efficiently.
      </p>

      <h2>✨ 核心特点 / Key Features</h2>
      <ul class="features">
        <li>
          🌿 支持 Vue 3 + Composition API / Supports Vue 3 with Composition API
        </li>
        <li>🎨 风格简洁、易于主题定制 / Clean design and easy theming</li>
        <li>
          🧩 组件自动注册，使用简单 / Auto component registration for ease of
          use
        </li>
        <li>
          🚀 适合中后台管理、可视化平台、低代码场景 / Ideal for admin panels,
          visualization platforms, and low-code environments
        </li>
      </ul>

      <h2>📦 当前包含组件 / Available Components</h2>
      <ul class="components">
        <li>Button 按钮 / Button</li>
        <li>CustomButton 自定义按钮 / CustomButton</li>
        <li>Confirm 弹窗 / Confirm Dialog</li>
        <li>Dialog 对话框 / Dialog</li>
        <li>Message 全局提示 / Global Message</li>
        <li>Navbar 导航栏 / Navbar</li>
        <li>Input 输入框 / Input</li>
        <li>CountDown 倒计时 / CountDown</li>
        <li>Popover 弹出层 / Popover</li>
        <li>Popup 弹窗 / Popup</li>
        <li>Search 搜索框 / Search</li>
        <li>Svgicon 图标 / Svg Icon</li>
        <li>Waterfall 瀑布流 / Waterfall</li>
        <li>Infinite 无限滚动 / Infinite Scroll</li>
      </ul>

      <h2>🔧 安装 / Installation</h2>
      <p>bash</p>
      <pre class="install-command code-block">
<code>npm install @szhelin/vlibs</code>
      </pre>

      <h2>🔧 设置 / Setting</h2>
      <p>main.js / main.ts</p>
      <pre class="install-command code-block">
<code>import { createApp } from "vue";
import App from "./App.vue";
import vLibs from "./vLibs";

createApp(App).use(vLibs).mount("#app");</code>
</pre>

      <div class="quick-start">
        <router-link to="/button">
          <button class="start-btn">🚀 快速开始 / Quick Start</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  padding: 2rem 3rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #fdfdfd;
}

.home-content {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 2.5rem 3rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  width: 100%;
  box-sizing: border-box;
}

.title {
  font-size: 32px;
  color: #3498db;
  margin-bottom: 1rem;
}

.desc {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

h2 {
  margin-top: 2rem;
  color: #2c3e50;
  font-size: 20px;
}

.features,
.components {
  list-style: none;
  padding-left: 1rem;
  line-height: 1.8;
}

.features li::before {
  content: "• ";
  color: #3498db;
  font-weight: bold;
  margin-right: 4px;
}

.install-command {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 6px;
  font-size: 14px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  white-space: pre-wrap;
}

.code-block {
  background-color: #272822;
  color: #f8f8f2;
  padding: 1.25rem 1.5rem;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  overflow-x: auto;
  border-left: 5px solid #3498db;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-family: "Fira Code", Consolas, Monaco, "Courier New", monospace;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.code-block code {
  white-space: pre;
  display: block;
}

.quick-start {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
}

.start-btn {
  background-color: #3498db;
  color: white;
  font-size: 16px;
  padding: 12px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.start-btn:hover {
  background-color: #2980b9;
  transform: translateY(-1px);
}
</style>
