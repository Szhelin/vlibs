<template>
  <div class="demo-container">
    <h2 class="title">
      zl-count-down 倒计时组件文档 | Countdown Component Docs
    </h2>

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
            <td><code>time</code></td>
            <td>Number</td>
            <td>倒计时时间，单位为毫秒 | Countdown duration in milliseconds</td>
            <td>--</td>
            <td><code>&lt;zl-count-down :time="10 * 1000" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>format</code></td>
            <td>String</td>
            <td>
              时间显示格式，遵循 <code>dayjs.duration().format</code> 规则
              <br />
              Time display format, follows
              <code>dayjs.duration().format</code> rules
            </td>
            <td>"HH:mm:ss"</td>
            <td><code>&lt;zl-count-down :format="'mm:ss'" /&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 事件说明表 -->
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
            <td><code>finish</code></td>
            <td>倒计时结束时触发 | Triggered when countdown finishes</td>
            <td><code>&lt;zl-count-down @finish="isFinished" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>change</code></td>
            <td>倒计时更新时触发 | Triggered on countdown update</td>
            <td><code>&lt;zl-count-down @change="..." /&gt;</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <zl-button type="main" @click="isStart">点此预览show</zl-button>
      <p v-if="isShowTime" class="label">
        活动开始倒计时 | Countdown to Event Start:
        <zl-count-down
          :time="10 * 1000"
          :format="'mm:ss'"
          style="display: inline-block"
          @finish="isFinished"
        />
      </p>
      <p v-if="isOver" class="label">⏰ 倒计时已结束！ | Countdown Finished!</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 控制倒计时状态 | Control countdown status
const isShowTime = ref(false);
const isOver = ref(false);
const isStart = () => {
  isShowTime.value = true;
  isOver.value = false;
};
const isFinished = () => {
  isShowTime.value = false;
  isOver.value = true;
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

.label {
  font-weight: 500;
  color: #444;
  font-size: 16px;
}
</style>
