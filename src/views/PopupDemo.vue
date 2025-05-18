<template>
  <div class="demo-container">
    <h2 class="title">zl-popup 弹窗组件文档 | Popup Component</h2>

    <!-- 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 参数说明 | Props</h3>
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
            <td><code>modelValue</code></td>
            <td>Boolean</td>
            <td>
              是否显示弹窗（v-model 双向绑定）<br />Whether to show popup
              (two-way binding)
            </td>
            <td>--</td>
            <td><code>&lt;zl-popup v-model="visible" /&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 插槽说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🎯 插槽说明 | Slots</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>名称 | Name</th>
            <th>说明 | Description</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>默认 | default</td>
            <td>弹窗内容区域<br />Content of the popup</td>
            <td>
              <code>
                &lt;zl-popup v-model="visible"&gt;内容&lt;/zl-popup&gt;
              </code>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🚀 使用示例 | Example</h3>
      <zl-button type="main" @click="popupVisible = true"
        >打开弹窗show</zl-button
      >
      <zl-popup v-model="popupVisible">
        <div class="popup-inner">
          <h3 class="popup-title">我是弹窗内容 | Popup Content</h3>
          <p>
            这里可以放任意内容，比如按钮、列表等。<br />You can place any
            content here, such as buttons, lists, etc.
          </p>
        </div>
      </zl-popup>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const popupVisible = ref(false);
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

.doc-section {
  margin-bottom: 20px;
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

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.popup-inner {
  padding: 16px;
}

.popup-title {
  margin: 0 0 8px;
  font-size: 18px;
}
</style>
