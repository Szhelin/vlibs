<template>
  <div class="demo-container">
    <h2 class="title">zl-input 输入框组件文档 | zl-input Input Component</h2>

    <!-- 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 Props 参数说明 | Props</h3>
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
            <td>String</td>
            <td>
              绑定的输入值（v-model 双向绑定）<br />Bound input value (used with
              v-model)
            </td>
            <td>必填 | Required</td>
            <td><code>v-model="inputValue"</code></td>
          </tr>
          <tr>
            <td><code>type</code></td>
            <td>String</td>
            <td>
              输入类型，支持 <code>text</code> 和 <code>textarea</code
              ><br />Input type, supports <code>text</code> and
              <code>textarea</code>
            </td>
            <td><code>text</code></td>
            <td><code>type="textarea"</code></td>
          </tr>
          <tr>
            <td><code>max</code></td>
            <td>String | Number</td>
            <td>最大输入字符数<br />Maximum number of input characters</td>
            <td>无 | None</td>
            <td><code>max="20"</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 事件说明 -->
    <section class="doc-section">
      <h3 class="subtitle">📢 事件说明 | Events</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>事件名 | Event</th>
            <th>说明 | Description</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>update:modelValue</code></td>
            <td>
              输入框内容变化时触发，用于 v-model<br />Emitted when input
              changes, used with v-model
            </td>
            <td><code>v-model="inputValue"</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <zl-input
        v-model="inputValue"
        style="width: 200px; margin-bottom: 10px"
        type="text"
        max="20"
      />
      <zl-input
        v-model="inputValue1"
        style="width: 200px"
        type="textarea"
        max="50"
      />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
const inputValue1 = ref("");
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

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 10px;
}
</style>
