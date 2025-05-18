<template>
  <div class="demo-container">
    <h2 class="title">zl-button 按钮组件文档 | zl-button Component Docs</h2>

    <!-- 参数说明表 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 Props 参数说明 | Props Description</h3>
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
            <td><code>type</code></td>
            <td>String</td>
            <td>按钮样式类型（main、primary、info） | Button style type</td>
            <td>"main"</td>
            <td><code>&lt;zl-button type="primary" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>size</code></td>
            <td>String</td>
            <td>按钮尺寸（default、small） | Button size</td>
            <td>"default"</td>
            <td><code>&lt;zl-button size="small" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>icon</code></td>
            <td>String</td>
            <td>图标名称，显示图标 | Icon name to display</td>
            <td>--</td>
            <td><code>&lt;zl-button icon="search" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>iconColor</code></td>
            <td>String</td>
            <td>图标颜色 | Icon color</td>
            <td>--</td>
            <td>
              <code>&lt;zl-button icon="edit" iconColor="#f00" /&gt;</code>
            </td>
          </tr>
          <tr>
            <td><code>isActiveAnim</code></td>
            <td>Boolean</td>
            <td>点击是否有缩放动画 | Enable scale animation on click</td>
            <td>true</td>
            <td><code>&lt;zl-button :isActiveAnim="false" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>loading</code></td>
            <td>Boolean</td>
            <td>是否为加载状态 | Show loading state and disable click</td>
            <td>false</td>
            <td><code>&lt;zl-button :loading="true" /&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Examples</h3>

      <!-- 类型 -->
      <p class="label">类型 | Type:</p>
      <zl-button type="main">main</zl-button>
      <zl-button type="primary">primary</zl-button>
      <zl-button type="info">info</zl-button>

      <!-- 尺寸 -->
      <p class="label">尺寸 | Size:</p>
      <zl-button size="default">Default</zl-button>
      <zl-button size="small">Small</zl-button>

      <!-- 图标 -->
      <p class="label">图标按钮 | Icon Buttons:</p>
      <zl-button icon="search">搜索 | Search</zl-button>
      <zl-button icon="hamburger" type="primary">编辑 | Edit</zl-button>
      <zl-button icon="remind" type="info" />

      <!-- loading -->
      <p class="label">加载按钮 | Loading Buttons:</p>
      <zl-button :loading="true" type="primary">Loading</zl-button>
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
}

.label {
  margin-top: 12px;
  font-weight: 500;
  color: #444;
}
</style>
