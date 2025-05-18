<template>
  <transition name="down" @after-leave="destroy">
    <div v-show="isVisible" class="message" :class="`message-${type}`">
      <span class="words">
        {{ content }}
      </span>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

type MessageType = "success" | "warn" | "error";

const props = defineProps<{
  type: MessageType;
  content: string;
  duration?: number;
  destroy: () => void;
}>();

const isVisible = ref(false);

onMounted(() => {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, props.duration ?? 3000);
});
</script>

<style lang="scss" scoped>
.message {
  min-width: 420px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 2px;
  border: 1px solid #cbd5e1;
  background-color: #f1f5f9;
  color: #0f172a;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.message-success {
  background-color: #d1fae5;
  border-color: #6ee7b7;
  color: #10b981;
}

.message-warn {
  background-color: #fef3c7;
  border-color: #fde68a;
  color: #f59e0b;
}

.message-error {
  background-color: #fee2e2;
  border-color: #fca5a5;
  color: #ef4444;
}

.words {
  font-size: 14px;
  line-height: 20px;
}

.down-enter-active,
.down-leave-active {
  transition: all 0.5s;
}

.down-enter-from,
.down-leave-to {
  opacity: 0;
  transform: translate3d(-50%, -100px, 0);
}
</style>
