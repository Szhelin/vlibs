<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div v-if="isVisible" @click="close" class="modal-mask"></div>
    </transition>

    <!-- 内容 -->
    <transition name="up">
      <div v-if="isVisible" class="modal-content">
        <div class="modal-title" v-if="title">
          {{ title }}
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer" v-if="cancelHandler || confirmHandler">
          <zl-button type="info" class="mr-2" @click="onCancelClick">
            {{ cancelText }}
          </zl-button>
          <zl-button type="primary" @click="onConfirmClick">
            {{ confirmText }}
          </zl-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { PropType } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  title: String,
  cancelText: {
    type: String,
    default: "取消",
  },
  confirmText: {
    type: String,
    default: "确定",
  },
  cancelHandler: Function as PropType<() => void>,
  confirmHandler: Function as PropType<() => void>,
  close: Function as PropType<() => void>,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const isVisible = useVModel(props, "modelValue", emit);

const onCancelClick = () => {
  props.cancelHandler?.();
  close();
};

const onConfirmClick = () => {
  props.confirmHandler?.();
  close();
};

const close = () => {
  isVisible.value = false;
  props.close?.();
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 24, 27, 0.8);
  z-index: 40;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  padding: 0.375rem 0.5rem;
  border-radius: 0.125rem;
  border: 1px solid #52525b;
  background-color: #ffffff;
  cursor: pointer;
}

@media (min-width: 1280px) {
  .modal-content {
    min-width: 35%;
  }
}

.modal-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #18181b;
  margin-bottom: 0.5rem;
}

.modal-body {
  font-size: 1rem;
  color: #18181b;
  margin-bottom: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.mr-2 {
  margin-right: 0.5rem;
}

// 动画
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.up-enter-active,
.up-leave-active {
  transition: all 0.3s;
}
.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
