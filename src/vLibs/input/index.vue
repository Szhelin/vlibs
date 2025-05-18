<template>
  <div class="input-wrapper">
    <input
      v-if="type === TYPE_TEXT"
      type="text"
      v-model="text"
      :maxlength="max"
      class="input-element"
    />
    <textarea
      v-if="type === TYPE_TEXTAREA"
      v-model="text"
      :maxlength="max"
      rows="5"
      class="input-element"
    ></textarea>
    <span
      v-if="max !== undefined"
      class="char-counter"
      :class="{ 'char-limit': currentNumber === Number(max) }"
    >
      {{ currentNumber }} / {{ max }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
import { computed } from "vue";

const TYPE_TEXT = "text";
const TYPE_TEXTAREA = "textarea";

const props = defineProps<{
  modelValue: string;
  type?: "text" | "textarea";
  max?: string | number;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

// 校验 type 字段
if (props.type && ![TYPE_TEXT, TYPE_TEXTAREA].includes(props.type)) {
  throw new Error(`type 的值必须在可选范围内 [${TYPE_TEXT}、${TYPE_TEXTAREA}]`);
}

const text = useVModel(props, "modelValue", emit);

// 输入长度计算
const currentNumber = computed(() => text.value.length);
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  line-height: 0;
}

.input-element {
  width: 100%;
  font-size: 14px;
  padding: 4px 6px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s;
  background-color: #fff;
  color: #333;
}

.input-element:focus {
  border-color: #60a5fa;
}

.char-counter {
  position: absolute;
  right: 6px;
  bottom: 4px;
  font-size: 12px;
  color: #a1a1aa;
}

.char-limit {
  color: #b91c1c;
}
</style>
