<template>
  <div class="demo-container">
    <h2 class="title">zl-popover 弹出层组件文档 | Popover Component</h2>

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
            <td><code>placement</code></td>
            <td>String</td>
            <td>
              气泡显示位置，可选：top-left、top-right、bottom-left、bottom-right<br />
              Popover position: top-left, top-right, bottom-left, bottom-right
            </td>
            <td><code>"bottom-left"</code></td>
            <td><code>&lt;zl-popover placement="top-right" /&gt;</code></td>
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
            <td><code>reference</code></td>
            <td>触发弹出层显示的元素<br />Trigger element</td>
            <td>
              <code>
                &lt;template
                #reference&gt;&lt;button&gt;点击&lt;/button&gt;&lt;/template&gt;
              </code>
            </td>
          </tr>
          <tr>
            <td>默认 | default</td>
            <td>弹出层中的内容<br />Content of the popover</td>
            <td>
              <code>&lt;zl-popover&gt;Hello World&lt;/zl-popover&gt;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🚀 使用示例 | Example</h3>
      <div class="popover-all">
        <div class="popover-example">
          <p class="placement-label">➡ bottom-right</p>
          <zl-popover placement="bottom-right">
            <template #reference>
              <button class="popover-trigger">悬停查看菜单show</button>
            </template>
            <ul class="popover-menu">
              <li>选项一 | Option 1</li>
              <li>选项二 | Option 2</li>
              <li>选项三 | Option 3</li>
            </ul>
          </zl-popover>
        </div>

        <div class="popover-example">
          <p class="placement-label">⬅ bottom-left</p>
          <zl-popover placement="bottom-left">
            <template #reference>
              <button class="popover-trigger">悬停查看菜单show</button>
            </template>
            <ul class="popover-menu">
              <li>选项一 | Option 1</li>
              <li>选项二 | Option 2</li>
              <li>选项三 | Option 3</li>
            </ul>
          </zl-popover>
        </div>

        <div class="popover-example">
          <p class="placement-label">⬆ top-left</p>
          <zl-popover placement="top-left">
            <template #reference>
              <button class="popover-trigger">悬停查看菜单show</button>
            </template>
            <ul class="popover-menu">
              <li>选项一 | Option 1</li>
              <li>选项二 | Option 2</li>
              <li>选项三 | Option 3</li>
            </ul>
          </zl-popover>
        </div>

        <div class="popover-example">
          <p class="placement-label">⬆ top-right</p>
          <zl-popover placement="top-right">
            <template #reference>
              <button class="popover-trigger">悬停查看菜单show</button>
            </template>
            <ul class="popover-menu">
              <li>选项一 | Option 1</li>
              <li>选项二 | Option 2</li>
              <li>选项三 | Option 3</li>
            </ul>
          </zl-popover>
        </div>
      </div>
    </section>
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

.popover-all {
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.popover-example {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.placement-label {
  font-size: 14px;
  margin-bottom: 8px;
  color: #666;
}

.popover-trigger {
  padding: 8px 16px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.popover-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  width: 120px;
}

.popover-menu li {
  padding: 8px 12px;
  cursor: pointer;
}

.popover-menu li:hover {
  background-color: #f0f0f0;
}
</style>
