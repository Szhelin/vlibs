<template>
  <div class="demo-container">
    <h2 class="title">confirm 弹窗组件文档 | Confirm Dialog Component Docs</h2>

    <!-- 参数说明表 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 参数说明 | Props Description</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>参数 | Prop</th>
            <th>类型 | Type</th>
            <th>说明 | Description</th>
            <th>默认值 | Default</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>title</code></td>
            <td>String</td>
            <td>弹窗标题（可选）| Dialog title (optional)</td>
            <td>""</td>
            <td><code>confirm("提示", "确定要删除吗？")</code></td>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td>String</td>
            <td>弹窗内容（必填）| Dialog content (required)</td>
            <td>--</td>
            <td><code>confirm("确定要退出登录？")</code></td>
          </tr>
          <tr>
            <td><code>cancelText</code></td>
            <td>String</td>
            <td>取消按钮文本 | Cancel button text</td>
            <td>"取消"</td>
            <td><code>confirm(..., ..., "否")</code></td>
          </tr>
          <tr>
            <td><code>confirmText</code></td>
            <td>String</td>
            <td>确定按钮文本 | Confirm button text</td>
            <td>"确定"</td>
            <td><code>confirm(..., ..., ..., "是")</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 引入方式 -->
    <section class="doc-section">
      <h3 class="subtitle">📦 引入方式 | Import</h3>
      <pre
        class="import-code"
      ><code>import { confirm } from '@szhelin/vlibs';</code></pre>
    </section>

    <!-- 函数使用方式 -->
    <section class="doc-section">
      <h3 class="subtitle">📦 函数使用方式 | Use</h3>
      <pre class="import-code"><code>
  confirm("删除确认", "你确定要删除这条数据吗？", "取消", "删除")
    .then(() => {
      console.log("用户点击了确定");
    })
    .catch(() => {
      console.log("用户点击了取消");
    });
</code></pre>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <zl-button type="main" @click="openConfirm">点此预览show</zl-button>
    </section>
  </div>
</template>

<script setup>
import { confirm } from "@/vLibs";

const openConfirm = () => {
  confirm("删除确认", "你确定要删除这条数据吗？", "取消", "删除")
    .then(() => {
      console.log("用户点击了确定");
    })
    .catch(() => {
      console.log("用户点击了取消");
    });
};
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
}

.doc-table th {
  background-color: #f4f4f4;
}

.import-code {
  background: #f6f8fa;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  overflow-x: auto;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
