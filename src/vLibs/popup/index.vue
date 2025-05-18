<template>
  <div>
    <!-- teleport -->
    <teleport to="body">
      <!-- 蒙版 -->
      <transition name="fade">
        <div v-if="isOpen" class="popup-mask" @click="isOpen = false"></div>
      </transition>
      <!-- 内容 -->
      <transition name="popup-down-up">
        <div v-if="isOpen" v-bind="$attrs" class="popup-content">
          <slot />
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts">
import { useScrollLock, useVModel } from "@vueuse/core";
import { watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
}>();

const isOpen = useVModel(props);

// 滚动锁定
const isLocked = useScrollLock(document.body);

watch(
  isOpen,
  (val) => {
    isLocked.value = val;
  },
  {
    immediate: true,
  }
);
</script>

<style lang="scss" scoped>
/* 蒙版 */
.popup-mask {
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 24, 27, 0.8); /* 相当于 bg-zinc-900/80 */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
}

/* 弹出内容容器 */
.popup-content {
  width: 100vw;
  background-color: white;
  position: fixed;
  bottom: 0;
  z-index: 50;
}

/* 暗色模式 */
.dark .popup-content {
  background-color: #27272a; /* 相当于 dark:bg-zinc-800 */
}

/* 动画效果 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.popup-down-up-enter-active,
.popup-down-up-leave-active {
  transition: all 0.3s;
}

.popup-down-up-enter-from,
.popup-down-up-leave-to {
  transform: translateY(100%);
}
</style>
