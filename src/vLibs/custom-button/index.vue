<template>
  <div class="layout">
    <div class="controls">
      <!-- 长度与宽度 -->
      <label
        >按钮宽度：
        <input type="number" v-model="width" placeholder="输入按钮宽度" />
        <span>px</span>
      </label>

      <label
        >按钮高度：
        <input type="number" v-model="height" placeholder="输入按钮高度" />
        <span>px</span>
      </label>

      <!-- 按钮内容 -->
      <label
        >按钮内容：
        <input type="text" v-model="buttonText" placeholder="输入按钮内容" />
      </label>

      <!-- 按钮文字大小 -->
      <label
        >按钮文字大小：
        <input
          type="number"
          v-model="buttonFont"
          placeholder="输入按钮文字大小"
        />
        <span>px</span>
      </label>

      <!-- 边框圆角 -->
      <label
        >圆角（border-radius）：
        <input type="range" v-model="borderRadius" min="0" max="100" step="1" />
        <input type="number" v-model="borderRadius" placeholder="" />
        <span>px</span>
      </label>

      <!-- 按钮背景颜色 -->
      <label
        >按钮背景颜色：
        <input
          type="text"
          v-model="buttonColor"
          placeholder="输入按钮背景颜色"
        />
      </label>

      <!-- 按钮文字颜色 -->
      <label
        >按钮文字颜色：
        <input type="text" v-model="textColor" placeholder="输入按钮文字颜色" />
      </label>

      <!-- 响应式按钮 -->
      <p>自定义按钮预览：</p>
      <div class="show">
        <button class="mbtn" :style="buttonStyle" @click="onclick">
          {{ buttonText }}
        </button>
      </div>
    </div>

    <!-- 源码 -->
    <div class="code">
      <!-- 显示/隐藏源码 -->
      <button @click="showCode = !showCode">
        {{ showCode ? "隐藏代码" : "显示代码" }}
      </button>
      <pre
        v-if="showCode"
        v-text="generatedCode"
        style="
          white-space: pre-wrap;
          background: #f0f0f0;
          padding: 1rem;
          margin-top: 1rem;
        "
      ></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 控件数据：宽度、高度、按钮文本、圆角、背景颜色、文字颜色
const width = ref(200);
const height = ref(50);
const buttonText = ref("点击我");
const buttonFont = ref(16);
const borderRadius = ref(10);
const buttonColor = ref("red"); // 默认按钮背景颜色
const textColor = ref("white"); // 默认按钮文字颜色
const showCode = ref(true);

const emits = defineEmits(["click"]);
const onclick = () => {
  emits("click");
};

// 动态样式计算
const buttonStyle = computed(() => {
  return {
    width: `${width.value}px`,
    height: `${height.value}px`,
    fontSize: `${buttonFont.value}px`,
    borderRadius: `${borderRadius.value}px`,
    backgroundColor: buttonColor.value, // 按钮背景颜色
    color: textColor.value, // 按钮文字颜色
  };
});

const generatedCode = computed(() => {
  return `<template>
  <button class="mbtn" :style="buttonStyle" @click="onclick">{{ buttonText }}</button>
</template>

<\script setup>
import { computed, ref } from 'vue'

const width = ref(${width.value})
const height = ref(${height.value})
const buttonText = ref('${buttonText.value}')
const buttonFont = ref(${buttonFont.value})
const borderRadius = ref(${borderRadius.value})
const buttonColor = ref('${buttonColor.value}')
const textColor = ref('${textColor.value}')

const emits = defineEmits(['click'])
const onclick = () => {
  emits('click')
}

const buttonStyle = computed(() => ({
  width: '${width.value}px',
  height: '${height.value}px',
  fontSize: '${buttonFont.value}px',
  borderRadius: '${borderRadius.value}px',
  backgroundColor: '${buttonColor.value}',
  color: '${textColor.value}',
}))
<\/script>

<style scoped>
.mbtn {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
}

.mbtn:hover {
  background-color: #2980b9;
  transform: translateY(-1px);
}
</style>`;
});
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  flex-wrap: wrap;
}

.card {
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  flex: 1;
  min-width: 300px;
}

.controls {
  width: 30vw;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
}

input[type="text"],
input[type="number"] {
  width: 60%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  margin-top: 4px;
}

input[type="text"]:focus,
input[type="number"]:focus {
  border-color: #3498db;
  outline: none;
}

input[type="range"] {
  width: 60%;
  margin-top: 4px;
}

p {
  margin-bottom: 0;
}

.show {
  width: 60%;
  display: flex;
  justify-content: center;
}

/* 按钮样式 */
.mbtn {
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-align: center;
}

.mbtn:hover {
  background-color: #2980b9;
  transform: translateY(-1px);
}

button {
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  background-color: #eee;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #ddd;
}

.code {
  font-size: 13px;
  /* background-color: #f4f4f4; */
  color: #333;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-x: auto;
}

/* .mbtn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: #3498db;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mbtn:hover {
  background-color: #2980b9;
} */
</style>
