<template>
  <div class="demo-container">
    <h2 class="title">zl-navbar 导航栏组件文档 | Navbar Component</h2>

    <!-- 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 参数说明 | Props</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>属性 | Prop</th>
            <th>类型 | Type</th>
            <th>说明 | Description</th>
            <th>默认值 | Default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>clickLeft</code></td>
            <td>Function</td>
            <td>
              点击左侧区域触发的函数（默认返回上一页）<br />Function triggered
              on left area click (default: go back)
            </td>
            <td>无 | None</td>
          </tr>
          <tr>
            <td><code>clickRight</code></td>
            <td>Function</td>
            <td>
              点击右侧区域触发的函数<br />Function triggered on right area click
            </td>
            <td>无 | None</td>
          </tr>
          <tr>
            <td><code>sticky</code></td>
            <td>Boolean</td>
            <td>是否固定在顶部<br />Sticky at the top</td>
            <td><code>false</code></td>
          </tr>
          <tr>
            <td><code>iconColor</code></td>
            <td>String</td>
            <td>左侧返回图标颜色<br />Left icon color</td>
            <td><code>#1f1f1f</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 插槽说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔌 插槽说明 | Slots</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>名称 | Name</th>
            <th>说明 | Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>left</code></td>
            <td>
              替换左侧返回图标区域内容<br />Replace left icon area content
            </td>
          </tr>
          <tr>
            <td><code>default</code></td>
            <td>
              中间区域内容（标题或搜索栏）<br />Main content (e.g., title or
              search bar)
            </td>
          </tr>
          <tr>
            <td><code>right</code></td>
            <td>
              右侧操作区域内容（图标或按钮）<br />Right-side actions (icon or
              button)
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Example</h3>
      <zl-navbar :sticky="true" :iconColor="'#ff6347'">
        <template #left>
          <zl-svg-icon name="back" />
        </template>

        <zl-input v-model="inputValue" style="width: 1000px" type="text" />

        <template #right>
          <zl-svg-icon name="home" />
        </template>
      </zl-navbar>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref();
</script>

<style scoped>
.demo-container {
  padding: 24px;
  font-family: Arial, sans-serif;
  background-color: #fcfcfc;
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
  padding-top: 10px;
}
</style>
