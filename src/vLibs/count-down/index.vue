<template>
  <div>
    <slot>
      <p class="zl-count-down__text">
        {{ showTime }}
      </p>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onUnmounted } from "vue";
import dayjs from "./utils.ts";

const INTERVAL_COUNT = 1000;

const emits = defineEmits<{
  (e: "finish"): void;
  (e: "change", remaining: number): void;
}>();

const props = defineProps<{
  time: number;
  format?: string;
}>();

const duration = ref(0);
let interval: ReturnType<typeof setInterval> | null = null;

const close = () => {
  if (interval !== null) {
    clearInterval(interval);
    interval = null;
  }
};

const durationFn = () => {
  duration.value -= INTERVAL_COUNT;
  emits("change", duration.value);

  if (duration.value <= 0) {
    duration.value = 0;
    emits("finish");
    close();
  }
};

const start = () => {
  close();
  interval = setInterval(durationFn, INTERVAL_COUNT);
};

const showTime = computed(() => {
  return dayjs.duration(duration.value).format(props.format || "HH:mm:ss");
});

watch(
  () => props.time,
  (val) => {
    duration.value = val;
    start();
  },
  { immediate: true }
);

onUnmounted(() => {
  close();
});
</script>

<style lang="scss" scoped>
.zl-count-down__text {
  font-size: 0.875rem; // text-sm
  color: var(--text-color, #18181b); // 可根据项目风格设置变量
}
</style>
