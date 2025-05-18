<template>
  <div class="demo-container">
    <h2 class="title">zl-svg-icon 图标组件文档 | Component Documentation</h2>

    <!-- 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 Props 参数说明 | Props Description</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>参数<br />Prop</th>
            <th>类型<br />Type</th>
            <th>说明<br />Description</th>
            <th>默认值<br />Default</th>
            <th>示例<br />Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>name</code></td>
            <td>String</td>
            <td>
              图标名称（对应 <code>src/assets/icons</code> 中的 SVG 文件名）<br />Icon
              name (refers to SVG in <code>src/assets/icons</code>)
            </td>
            <td>--</td>
            <td><code>&lt;zl-svg-icon name="infinite-load" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>fillColor</code></td>
            <td>String</td>
            <td>
              图标颜色，支持十六进制、颜色名称、CSS 变量等<br />Color of the
              icon. Supports hex, color names, or CSS variables
            </td>
            <td>
              ""（默认使用 currentColor）<br />"" (uses currentColor by default)
            </td>
            <td>
              <code
                >&lt;zl-svg-icon name="infinite-load" fillColor="red"
                /&gt;</code
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Examples</h3>

      <div class="demo-grid">
        <div class="icon-box">
          <zl-svg-icon name="infinite-load" />
          <p class="label">默认颜色<br />Default</p>
        </div>
        <div class="icon-box">
          <zl-svg-icon name="infinite-load" fillColor="red" />
          <p class="label">红色图标<br />Red Icon</p>
        </div>
      </div>

      <div class="demo-grid">
        <div class="icon-box" v-for="icon in icons" :key="icon">
          <zl-svg-icon :name="icon" />
          <p class="label">{{ icon }}.svg</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// 示例图标列表
const icons = ref([
  "back",
  "close",
  "comment",
  "error",
  "feedback",
  "fold",
  "full",
  "heart",
  "like",
  "home",
  "logout",
  "search",
  "refresh",
]);
</script>

<style scoped>
.demo-container {
  padding: 24px;
  font-family: Arial, sans-serif;
  background-color: #fdfdfd;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 10px;
}

.doc-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 14px;
}

.doc-table th,
.doc-table td {
  border: 1px solid #ccc;
  padding: 8px 10px;
  text-align: left;
  vertical-align: top;
}

.doc-table th {
  background-color: #f4f4f4;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.icon-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
}

.label {
  font-weight: 500;
  color: #444;
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
}
</style>
