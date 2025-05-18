<template>
  <div class="demo-container">
    <h2 class="title">zl-waterfall 瀑布流组件文档 / Component Docs</h2>

    <!-- 参数说明表 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 Props 参数说明 / Props Description</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>参数 / Prop</th>
            <th>类型 / Type</th>
            <th>说明 / Description</th>
            <th>默认值 / Default</th>
            <th>示例 / Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>data</code></td>
            <td>Array</td>
            <td>
              数据源数组，元素为每一项内容 / Data source array, each item is an
              element
            </td>
            <td>--</td>
            <td><code>&lt;zl-waterfall :data="list" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>column</code></td>
            <td>Number</td>
            <td>列数 / Number of columns</td>
            <td><code>2</code></td>
            <td><code>&lt;zl-waterfall :column="3" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>columnSpacing</code></td>
            <td>Number</td>
            <td>列与列之间的间距（单位 px）/ Spacing between columns (px)</td>
            <td><code>20</code></td>
            <td><code>&lt;zl-waterfall :columnSpacing="10" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>rowSpacing</code></td>
            <td>Number</td>
            <td>行与行之间的间距（单位 px）/ Spacing between rows (px)</td>
            <td><code>20</code></td>
            <td><code>&lt;zl-waterfall :rowSpacing="15" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>nodeKey</code></td>
            <td>String</td>
            <td>每项的唯一标识字段 / Unique key for each item</td>
            <td>--</td>
            <td><code>&lt;zl-waterfall nodeKey="id" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>picturePreReading</code></td>
            <td>Boolean</td>
            <td>
              是否启用图片预加载以准确计算布局 / Enable image preloading for
              accurate layout
            </td>
            <td><code>true</code></td>
            <td>
              <code>&lt;zl-waterfall :picturePreReading="false" /&gt;</code>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 综合使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">
        🎯 与无限加载的综合使用示例 / Combined Usage with Infinite Scroll
      </h3>
      <div class="scroll-area">
        <zl-infinite
          v-model="loading"
          :isFinished="isFinished"
          @onLoad="loadMore"
        >
          <zl-waterfall
            :key="'waterfall-infinite'"
            ref="waterfallRef"
            :data="mdata2"
            :column="3"
            :picturePreReading="false"
          >
            <template v-slot="{ item, width }">
              <div
                class="card"
                :style="{ width: width + 'px', height: item.height + 'px' }"
              >
                <p>{{ item.title }}</p>
              </div>
            </template>
          </zl-waterfall>
        </zl-infinite>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from "vue";

const mdata = [
  { id: 1, title: "one", height: 120 },
  { id: 2, title: "two", height: 100 },
  { id: 3, title: "three", height: 80 },
  { id: 4, title: "four", height: 130 },
  { id: 5, title: "five", height: 150 },
  { id: 6, title: "six", height: 90 },
  { id: 7, title: "seven", height: 140 },
  { id: 8, title: "eight", height: 110 },
  { id: 9, title: "nine", height: 120 },
];

const mdata2 = ref([]);
const loading = ref(false);
const isFinished = ref(false);
const waterfallRef = ref(null);
let idCounter = 1;

function generateData(count = 10) {
  return Array.from({ length: count }).map(() => {
    const id = idCounter++;
    return {
      id,
      title: `Item ${id}`,
      height: 80 + Math.floor(Math.random() * 81),
    };
  });
}

function loadMore() {
  loading.value = true;
  setTimeout(() => {
    const newItems = generateData();
    mdata2.value = [...mdata2.value, ...newItems];
    loading.value = false;
    if (mdata2.value.length >= 30) {
      isFinished.value = true;
    }
  }, 1000);
}

// 初始化加载数据
loadMore();
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

.card {
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

.scroll-area {
  height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  background-color: #fff;
}
</style>
