<template>
  <div ref="containerTarget" class="search-container">
    <div class="search-inner">
      <!-- 搜索图标 -->
      <zl-svg-icon class="search-icon" name="search" color="#707070" />

      <!-- 输入框 -->
      <input
        class="search-input"
        type="text"
        placeholder="搜索"
        v-model="inputValue"
        @focus="onFocusHandler"
        @blur="onBlurHandler"
        @keyup.enter="onSearchHandlder"
      />

      <!-- 删除按钮 -->
      <zl-svg-icon
        v-show="inputValue"
        name="input-delete"
        class="clear-icon"
        @click="onClearClick"
      />

      <!-- 分割线 -->
      <div class="divider-line"></div>

      <!-- 搜索按钮 -->
      <zl-button
        class="search-button"
        icon="search"
        iconColor="#ffffff"
        @click="onSearchHandlder"
      />
    </div>

    <!-- 下拉区 -->
    <transition name="slide">
      <div v-if="$slots.dropdown" v-show="isFocus" class="dropdown">
        <slot name="dropdown" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import { useVModel, onClickOutside } from "@vueuse/core";

// 常量定义（推荐写在 <script setup> 顶部）
const EMIT_UPDATE_MODELVALUE = "update:modelValue";
const EMIT_SEARCH = "search";
const EMIT_CLEAR = "clear";
const EMIT_INPUT = "input";
const EMIT_FOCUS = "focus";
const EMIT_BLUR = "blur";

// props + emits 类型声明
const props = defineProps<{
  modelValue: string;
}>();

const emits = defineEmits<{
  (e: typeof EMIT_UPDATE_MODELVALUE, val: string): void;
  (e: typeof EMIT_CLEAR, val: string): void;
  (e: typeof EMIT_INPUT, val: string): void;
  (e: typeof EMIT_FOCUS): void;
  (e: typeof EMIT_BLUR): void;
  (e: typeof EMIT_SEARCH, val: string): void;
}>();

const inputValue = useVModel(props);

// 清空文本
const onClearClick = () => {
  inputValue.value = "";
  emits(EMIT_CLEAR, "");
};

// 搜索行为
const onSearchHandlder = () => {
  emits(EMIT_SEARCH, inputValue.value);
};

// 焦点处理
const isFocus = ref(false);
const onFocusHandler = () => {
  isFocus.value = true;
  emits(EMIT_FOCUS);
};
const onBlurHandler = () => {
  emits(EMIT_BLUR);
};

// 点击区域外收起
const containerTarget = ref<HTMLElement | null>(null);
onClickOutside(containerTarget, () => {
  isFocus.value = false;
});

// 监听输入变化
watch(inputValue, (val) => {
  emits(EMIT_INPUT, val);
});
</script>

<style lang="scss" scoped>
.slide-enter-active {
  transition: all 0.5s;
}

.slide-leave-active {
  transition: all 0.5s;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(40px);
  opacity: 0;
}

.search-container {
  position: relative;
  padding: 0.25rem;
  border-radius: 0.75rem;
  transition: background-color 0.5s;
  border: 1px solid white;
}

.search-container:hover {
  background-color: rgba(255, 0, 0, 0.1);
}

.search-inner {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 50%;
  left: 0.5rem;
  transform: translateY(-50%);
}

.search-input {
  display: block;
  width: 100%;
  height: 2.75rem;
  text-indent: 2rem;
  font-size: 0.875rem;
  outline: none;
  background-color: #f4f4f5;
  color: #18181b;
  border: 1px solid #f4f4f5;
  border-radius: 0.75rem;
  font-weight: 600;
  transition: all 0.5s;
  caret-color: #a1a1aa;
}

.search-container:hover .search-input {
  background-color: white;
  border-color: #e4e4e7;
}

.search-input:focus {
  border-color: #fca5a5;
}

.clear-icon {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 50%;
  right: 5rem;
  transform: translateY(-50%);
  cursor: pointer;
  transition: all 0.5s;
}

.divider-line {
  opacity: 0;
  height: 1.5rem;
  width: 0.0625rem;
  background-color: #e4e4e7;
  position: absolute;
  top: 50%;
  right: 3.875rem;
  transform: translateY(-50%);
  transition: opacity 0.5s;
}

.search-container:hover .divider-line {
  opacity: 1;
}

.search-button {
  position: absolute;
  right: 0.5rem;
  border-radius: 0.75rem;
  opacity: 0;
  transition: opacity 0.5s;
}

.search-container:hover .search-button {
  opacity: 1;
}

.dropdown {
  max-height: 23rem;
  width: 100%;
  overflow: auto;
  position: absolute;
  top: 3.5rem;
  left: 0;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #e4e4e7;
  z-index: 20;
  transition: box-shadow 0.2s;
}

.dropdown:hover {
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
}
</style>
