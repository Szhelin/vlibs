<template>
  <div class="sidebar">
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <router-link :to="item.path" class="link" active-class="active">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const navItems = [
  { path: "/home", name: "首页" },
  { path: "/button", name: "Button按钮" },
  { path: "/confirm", name: "Confirm确认框" },
  { path: "/countdown", name: "Countdown倒计时" },
  { path: "/custom-button", name: "Custom Button自定义按钮" },
  { path: "/dialog", name: "Dialog对话框" },
  { path: "/infinite", name: "Infinite无限加载" },
  { path: "/input", name: "Input输入框" },
  { path: "/message", name: "Message信息框" },
  { path: "/navbar", name: "Navbar导航栏" },
  { path: "/popover", name: "Popover气泡框" },
  { path: "/popup", name: "Popup弹窗" },
  { path: "/search", name: "Search搜索框" },
  { path: "/svg-icon", name: "Svg-icon图标" },
  { path: "/waterfall", name: "Waterfall瀑布流布局" },
];
</script>

<style scoped>
.sidebar {
  width: 250px;
  background: #f5f5f5;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar ul {
  padding: 1em;
  list-style: none;
}

.link {
  display: block;
  padding: 8px 16px;
  margin-bottom: 6px;
  text-decoration: none;
  color: #333;
  border-radius: 4px;
}

.link:hover {
  background-color: #e0e0e0;
}

.active {
  background-color: #409eff;
  color: white;
}
</style>
