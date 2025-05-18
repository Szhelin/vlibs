<template>
  <div class="demo-container">
    <h2 class="title">
      zl-infinite 无限加载组件文档 | zl-infinite Infinite Scroll Component
    </h2>

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
            <td>Boolean</td>
            <td>
              是否处于加载中状态（v-model 双向绑定）<br />Whether in loading
              state (v-model binding)
            </td>
            <td>必填 | Required</td>
            <td><code>v-model="loading"</code></td>
          </tr>
          <tr>
            <td><code>isFinished</code></td>
            <td>Boolean</td>
            <td>数据是否全部加载完成<br />Whether all data has been loaded</td>
            <td><code>false</code></td>
            <td><code>:isFinished="isFinished"</code></td>
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
            <td><code>onLoad</code></td>
            <td>
              滚动到底部时触发加载更多<br />Triggered when scrolled to bottom
            </td>
            <td><code>@onLoad="loadMore"</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <div class="scroll-area">
        <zl-infinite
          v-model="loading"
          :isFinished="isFinished"
          @onLoad="loadMore"
        >
          <div v-for="item in list" :key="item" class="list-item">
            {{ item }}
          </div>
        </zl-infinite>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const list = ref([]);
const loading = ref(false);
const isFinished = ref(false);

// 模拟加载数据 | Simulate data loading
const loadMore = () => {
  setTimeout(() => {
    const newItems = Array.from(
      { length: 10 },
      (_, i) => `内容项 Item ${list.value.length + i + 1}`
    );
    list.value.push(...newItems);
    loading.value = false;

    // 限制最多加载 3 次 | Limit to 3 loads max
    if (list.value.length >= 30) {
      isFinished.value = true;
    }
  }, 1000);
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

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.scroll-area {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #fff;
}

.list-item {
  background: #f3f4f6;
  margin-bottom: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.25rem;
  font-size: 14px;
}
</style>
