<template>
  <div>
    <!-- 内容 -->
    <slot />
    <div ref="loadingTarget" class="loading-wrapper">
      <!-- 加载更多 -->
      <zl-svg-icon
        v-show="loading"
        class="loading-icon"
        name="infinite-load"
      ></zl-svg-icon>
      <!-- 没有更多数据了 -->
      <p v-if="isFinished" class="no-more-text">已经没有更多数据了!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, Ref } from "vue";
import { useIntersectionObserver, useVModel } from "@vueuse/core";

interface Props {
  modelValue: boolean;
  isFinished?: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  (e: "onLoad"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

// 处理 loading 状态
const loading = useVModel(props, "modelValue", emits);

// 滚动的元素
const loadingTarget: Ref<HTMLElement | null> = ref(null);
// 记录当前是否在底部（是否交叉）
const targetIsIntersecting = ref(false);

useIntersectionObserver(loadingTarget, ([{ isIntersecting }]) => {
  targetIsIntersecting.value = isIntersecting;
  emitLoad();
});

/**
 * 触发 load
 */
function emitLoad() {
  if (targetIsIntersecting.value && !loading.value && !props.isFinished) {
    loading.value = true;
    emits("onLoad");
  }
}

/**
 * 监听 loading 的变化，解决数据加载完成后，首屏未铺满的问题
 */
watch(loading, () => {
  setTimeout(() => {
    emitLoad();
  }, 100);
});
</script>

<style lang="scss" scoped>
.loading-wrapper {
  display: flex;
  justify-content: center;
  height: 1.5rem;
  padding: 1rem 0;
}

.loading-icon {
  width: 1rem;
  height: 1rem;
  margin: 0 auto;
  animation: spin 1s linear infinite;
}

.no-more-text {
  text-align: center;
  font-size: 1rem;
  color: #a1a1aa;
}

/* 定义旋转动画 */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
