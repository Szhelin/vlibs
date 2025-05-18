<template>
  <div class="header" :class="[sticky ? 'sticky' : 'relative']">
    <!-- 左 -->
    <div class="header-left" @click="onClickLeft">
      <slot name="left">
        <zl-svg-icon name="back" class="icon" :fillColor="iconColor" />
      </slot>
    </div>
    <!-- 中 -->
    <div class="header-center">
      <slot></slot>
    </div>
    <!-- 右 -->
    <div class="header-right" @click="onClickRight">
      <slot name="right" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

// props 类型定义
interface HeaderProps {
  clickLeft?: () => void;
  clickRight?: () => void;
  sticky?: boolean;
  iconColor?: string;
}

// 声明 props
const props = defineProps<HeaderProps>();

const router = useRouter();

/**
 * 左侧按钮点击事件
 */
const onClickLeft = () => {
  if (props.clickLeft) {
    props.clickLeft();
  } else {
    router.back();
  }
};

/**
 * 右侧按钮点击事件
 */
const onClickRight = () => {
  if (props.clickRight) {
    props.clickRight();
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  position: relative;
  background-color: white;
  z-index: 10;

  &.sticky {
    position: sticky;
    top: 0;
    left: 0;
  }

  &.relative {
    position: relative;
  }
}

.header-left,
.header-right {
  height: 100%;
  width: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.header-left {
  left: 0;
}

.header-right {
  right: 0;
}

.header-center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-weight: bold;
  font-size: 16px;
  color: #1f1f1f;
}

.icon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>
