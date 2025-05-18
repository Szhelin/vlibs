<template>
  <div class="demo-container">
    <h2 class="title">
      zl-custom-button 自定义按钮组件文档 | Custom Button Component Docs
    </h2>

    <h3 class="subtitle">🔧 组件使用说明 | Usage</h3>
    <table class="doc-table">
      <thead>
        <tr>
          <th>示例 | Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>&lt;zl-custom-button /&gt;</code>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 组件演示 -->
    <zl-custom-button />
  </div>
</template>

<script setup></script>

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
  width: 40%;
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
</style>
