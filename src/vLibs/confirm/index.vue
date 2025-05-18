<template>
  <div>
    <!-- 蒙版 -->
    <transition name="fade">
      <div v-if="isVisible" @click="doClose" class="modal-mask"></div>
    </transition>
    <!-- 内容 -->
    <transition name="up">
      <div v-if="isVisible" class="modal-content">
        <!-- 标题 -->
        <div class="modal-title">
          {{ title }}
        </div>
        <!-- 内容 -->
        <div class="modal-body">
          {{ content }}
        </div>
        <!-- 按钮 -->
        <div class="modal-footer">
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
import { ref, onMounted, PropType } from "vue";
import zlButton from "../button/index.vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
    required: true,
  },
  cancelText: {
    type: String,
    default: "取消",
  },
  confirmText: {
    type: String,
    default: "确定",
  },
  cancelHandler: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
  confirmHandler: {
    type: Function as PropType<() => void>,
    default: () => {},
  },
  close: Function as PropType<() => void>,
});

const isVisible = ref(false);

const show = () => {
  isVisible.value = true;
};

onMounted(() => {
  show();
});

const duration = 500;

const doClose = () => {
  isVisible.value = false;
  setTimeout(() => {
    props.close?.();
  }, duration);
};

const onCancelClick = () => {
  props.cancelHandler();
  doClose();
};

const onConfirmClick = () => {
  props.confirmHandler();
  doClose();
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(24, 24, 27, 0.8); // bg-zinc-900/80
  z-index: 40;
}

.modal-content {
  position: fixed;
  top: 33.3333%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  padding: 0.375rem 0.5rem; // py-1.5 px-2
  border: 1px solid var(--border-color, #52525b); // dark:border-zinc-600
  border-radius: 0.125rem; // rounded-sm
  background-color: var(--bg-color, #fff); // light or dark
  cursor: pointer;
  z-index: 50;

  @media (min-width: 1280px) {
    width: 35%;
  }
}

.modal-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: var(--text-color, #18181b);
  margin-bottom: 0.5rem;
}

.modal-body {
  font-size: 1rem;
  color: var(--text-color, #18181b);
  margin-bottom: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.mr-2 {
  margin-right: 0.5rem;
}

/* 动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.up-enter-active,
.up-leave-active {
  transition: all 0.5s ease;
}
.up-enter-from,
.up-leave-to {
  opacity: 0;
  transform: translate3d(-50%, 100px, 0);
}
</style>
