<template>
  <div
    class="popover-container"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <div ref="referenceTarget">
      <!-- 具名插槽：触发弹层的视图 -->
      <slot name="reference" />
    </div>
    <!-- 气泡展示 -->
    <transition name="slide">
      <div
        ref="contentTarget"
        v-show="isVisable"
        class="popover-content"
        :style="contentStyle"
      >
        <!-- 匿名插槽：弹出层视图中展示的内容 -->
        <slot />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, ref, watch } from "vue";

// 常量定义
const DELAY_TIME = 100;

const PROP_TOP_LEFT = "top-left";
const PROP_TOP_RIGHT = "top-right";
const PROP_BOTTOM_LEFT = "bottom-left";
const PROP_BOTTOM_RIGHT = "bottom-right";

const placementEnum = [
  PROP_TOP_LEFT,
  PROP_TOP_RIGHT,
  PROP_BOTTOM_LEFT,
  PROP_BOTTOM_RIGHT,
] as const;

type Placement = (typeof placementEnum)[number];

// props
const props = defineProps<{
  placement?: Placement;
}>();

const placement = props.placement ?? PROP_BOTTOM_LEFT;
if (!placementEnum.includes(placement)) {
  throw new Error(`你的placement必须是 ${placementEnum.join("、")} 中的一个`);
}

// 显示控制
const isVisable = ref(false);
let timeout: ReturnType<typeof setTimeout> | null = null;

const onMouseenter = () => {
  isVisable.value = true;
  if (timeout) clearTimeout(timeout);
};

const onMouseleave = () => {
  timeout = setTimeout(() => {
    isVisable.value = false;
    timeout = null;
  }, DELAY_TIME);
};

const referenceTarget = ref<HTMLElement | null>(null);
const contentTarget = ref<HTMLElement | null>(null);

const useElementSize = (target: HTMLElement | null) => {
  if (!target) return { width: 0, height: 0 };
  return {
    width: target.offsetWidth,
    height: target.offsetHeight,
  };
};

const contentStyle = ref<Record<string, string>>({
  top: "0px",
  left: "0px",
});

watch(isVisable, (val) => {
  if (!val) return;
  nextTick(() => {
    const refSize = useElementSize(referenceTarget.value);
    const contentSize = useElementSize(contentTarget.value);

    switch (placement) {
      case PROP_TOP_LEFT:
        contentStyle.value.top = "0px";
        contentStyle.value.left = -contentSize.width + "px";
        break;
      case PROP_TOP_RIGHT:
        contentStyle.value.top = "0px";
        contentStyle.value.left = refSize.width + "px";
        break;
      case PROP_BOTTOM_LEFT:
        contentStyle.value.top = refSize.height + "px";
        contentStyle.value.left = -contentSize.width + "px";
        break;
      case PROP_BOTTOM_RIGHT:
        contentStyle.value.top = refSize.height + "px";
        contentStyle.value.left = refSize.width + "px";
        break;
    }
  });
});
</script>

<style lang="scss" scoped>
.popover-container {
  position: relative;
}

.popover-content {
  position: absolute;
  z-index: 20;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.dark .popover-content {
  background-color: #18181b;
  border-color: #3f3f46;
}

// 动画效果
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
