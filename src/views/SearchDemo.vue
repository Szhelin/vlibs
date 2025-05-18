<template>
  <div class="demo-container">
    <h2 class="title">zl-search 搜索框组件文档 | Search Input Component</h2>

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
            <td>String</td>
            <td>
              输入框绑定的值<br />
              Bound value of the input
            </td>
            <td><code>""</code></td>
            <td><code>&lt;zl-search v-model="keyword" /&gt;</code></td>
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
            <th>事件 | Event</th>
            <th>说明 | Description</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>search</code></td>
            <td>
              点击搜索按钮或按下回车时触发，参数为当前输入值<br />
              Triggered when the search button is clicked or Enter is pressed.
              Param: current input value
            </td>
            <td><code>&lt;zl-search @search="onSearch" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>clear</code></td>
            <td>
              点击清除按钮时触发<br />
              Triggered when the clear button is clicked
            </td>
            <td><code>&lt;zl-search @clear="onClear" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>input</code></td>
            <td>
              输入内容变化时触发，参数为当前值<br />
              Triggered when input value changes. Param: current value
            </td>
            <td><code>&lt;zl-search @input="onInput" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>focus</code></td>
            <td>
              输入框获得焦点时触发<br />
              Triggered when input gains focus
            </td>
            <td><code>&lt;zl-search @focus="onFocus" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>blur</code></td>
            <td>
              输入框失去焦点时触发<br />
              Triggered when input loses focus
            </td>
            <td><code>&lt;zl-search @blur="onBlur" /&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🚀 使用示例 | Example</h3>
      <zl-search
        v-model="keyword"
        @search="onSearch"
        @clear="onClear"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        style="width: 600px"
      >
        <template #dropdown>
          <ul v-if="suggestions.length">
            <li v-for="item in suggestions" :key="item" class="dropdown-item">
              {{ item }}
            </li>
          </ul>
        </template>
      </zl-search>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const keyword = ref("");
const suggestions = ref(["Vue 3 教程", "JavaScript 语法", "前端面试题"]);

const onSearch = (val) => {
  console.log("搜索内容：", val);
};
const onClear = () => {
  console.log("清空输入");
  suggestions.value = [];
};
const onInput = (val) => {
  console.log("输入中：", val);
  suggestions.value = val ? ["联想词 1", "联想词 2", "联想词 3"] : [];
};
const onFocus = () => {
  console.log("聚焦");
};
const onBlur = () => {
  console.log("失焦");
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
}

.dropdown-item {
  padding: 8px 10px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}
</style>
