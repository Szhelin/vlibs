<template>
  <div class="demo-container">
    <h2 class="title">message 全局提示组件文档 | Global Message Component</h2>

    <!-- 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 函数参数说明 | Function Parameters</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>参数名 | Parameter</th>
            <th>类型 | Type</th>
            <th>说明 | Description</th>
            <th>默认值 | Default</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>String</td>
            <td>
              消息类型：<code>success</code>、<code>warn</code>、<code
                >error</code
              ><br />Message type: <code>success</code>, <code>warn</code>,
              <code>error</code>
            </td>
            <td>无 | None</td>
            <td><code>"success"</code></td>
          </tr>
          <tr>
            <td><code>content</code></td>
            <td>String</td>
            <td>展示的文本内容<br />Text content to display</td>
            <td>无 | None</td>
            <td><code>"操作成功"</code></td>
          </tr>
          <tr>
            <td><code>duration</code></td>
            <td>Number</td>
            <td>提示显示时长（毫秒）<br />Display duration in milliseconds</td>
            <td><code>3000</code></td>
            <td><code>message("success", "成功", 5000)</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 事件说明 -->
    <section class="doc-section">
      <h3 class="subtitle">📢 内部事件 | Internal Events</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>事件 | Event</th>
            <th>说明 | Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>destroy</code></td>
            <td>
              组件动画结束后销毁自身（内部使用）<br />Auto destroy after
              animation ends (internal use)
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 引入方式 -->
    <section class="doc-section">
      <h3 class="subtitle">📦 引入方式 | Import</h3>
      <pre
        class="import-code"
      ><code>import { message } from '@szhelin/vlibs';</code></pre>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <zl-button type="main" @click="onClick1">success</zl-button>
      <zl-button type="main" @click="onClick2">warn</zl-button>
      <zl-button type="main" @click="onClick3">error</zl-button>
    </section>
  </div>
</template>

<script setup>
import { message } from "@/vLibs";

const onClick1 = () => {
  message("success", "操作成功！");
};
const onClick2 = () => {
  message("warn", "注意操作！");
};
const onClick3 = () => {
  message("error", "发生错误！");
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
  gap: 8px;
  padding-top: 10px;
}
</style>
