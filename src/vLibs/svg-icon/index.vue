<template>
  <svg aria-hidden="true" class="icon" :style="svgStyle">
    <use :href="symbolId" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Props 类型定义
interface Props {
  name: string;
  fillColor?: string;
}

const props = defineProps<Props>();

// 生成 symbol 引用 id
const symbolId = computed(() => `#icon-${props.name}`);

// SVG 样式计算属性
const svgStyle = computed(() => {
  return {
    fill: props.fillColor || "currentColor",
  };
});
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: middle;
}
</style>
