<template>
  <button
    class="btn-base"
    :class="[
      typeEnum[type],
      sizeEnum[sizeKey].button,
      {
        'btn-active': isActiveAnim,
      },
    ]"
    @click.stop="onBtnClick"
  >
    <!-- loading -->
    <zl-svg-icon
      v-if="loading"
      name="loading"
      class="icon-loading"
    ></zl-svg-icon>

    <!-- icon按钮 -->
    <zl-svg-icon
      v-if="icon"
      :name="icon"
      class="icon-center"
      :class="sizeEnum[sizeKey].icon"
      :fillColor="iconColor"
    />

    <!-- 文字按钮 -->
    <slot v-else />
  </button>
</template>

<script lang="ts">
export type ButtonType = "primary" | "main" | "info";
export type ButtonSize = "default" | "small";

export const EMITS_CLICK = "click";

export const typeEnum: Record<ButtonType, string> = {
  primary: "btn-primary",
  main: "btn-main",
  info: "btn-info",
};

export const sizeEnum: Record<string, { button: string; icon: string }> = {
  default: {
    button: "btn-default",
    icon: "",
  },
  "icon-default": {
    button: "btn-icon-default",
    icon: "icon-small",
  },
  small: {
    button: "btn-small",
    icon: "",
  },
  "icon-small": {
    button: "btn-icon-small",
    icon: "icon-small",
  },
};
</script>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  icon?: string;
  iconColor?: string;
  iconClass?: string;
  type?: ButtonType;
  size?: ButtonSize;
  isActiveAnim?: boolean;
  loading?: boolean;
}>();

const emits = defineEmits<{
  (e: typeof EMITS_CLICK): void;
}>();

const type = props.type ?? "main";
const size = props.size ?? "default";
const isActiveAnim = props.isActiveAnim ?? true;
const loading = props.loading ?? false;

const sizeKey = computed(() => {
  return props.icon ? `icon-${size}` : size;
});

const onBtnClick = () => {
  if (loading) return;
  emits(EMITS_CLICK);
};
</script>

<style scoped lang="scss">
.btn-base {
  font-size: 16px;
  text-align: center;
  border-radius: 4px;
  transition: all 0.15s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-active:active {
  transform: scale(1.05);
}

/* 类型样式 */
.btn-primary {
  color: #fff;
  background-color: #18181b;
}
.btn-primary:hover {
  background-color: #09090b;
}
.btn-primary:active {
  background-color: #18181b;
}

.btn-main {
  color: #fff;
  background-color: var(--main-color, #f44c58);
}
.btn-main:hover {
  background-color: var(--hover-main-color, #f44c58);
}
.btn-main:active {
  background-color: var(--main-color, #f44c58);
}

.btn-info {
  color: #18181b;
  background-color: #e4e4e7;
}
.btn-info:hover {
  background-color: #d4d4d8;
}
.btn-info:active {
  background-color: #e4e4e7;
}

/* 尺寸样式 */
.btn-default {
  width: 80px;
  height: 36px;
  font-size: 14px;
}

.btn-small {
  width: 64px;
  height: 30px;
  font-size: 13px;
}

.btn-icon-default {
  width: 36px;
  height: 36px;
}

.btn-icon-small {
  width: 28px;
  height: 28px;
}

.icon-small {
  width: 16px;
  height: 16px;
}

.icon-loading {
  width: 18px;
  height: 18px;
  animation: spin 1s linear infinite;
  margin-right: 6px;
}

.icon-center {
  margin: auto;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
