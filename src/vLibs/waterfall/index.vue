<template>
  <div
    style="position: relative"
    ref="containerTarget"
    :style="{
      height: containerHeight + 'px', // 因为当前为 relative 布局，所以需要主动指定高度
    }"
  >
    <!-- 因为列数不确定，所以需要根据列数计算每列的宽度，所以等待列宽计算完成，并且有了数据源之后进行渲染 -->
    <template v-if="columnWidth && data.length">
      <!-- 通过动态的 style 来去计算对应的列宽、left、top -->
      <div
        class="m-waterfall-item"
        style="position: absolute; transition: all 0.3s"
        :style="{
          width: columnWidth + 'px',
          left: item._style?.left + 'px',
          top: item._style?.top + 'px',
        }"
        v-for="(item, index) in data"
        :key="nodeKey ? item[nodeKey] : index"
      >
        <slot :item="item" :width="columnWidth" :index="index" />
      </div>
    </template>
    <!-- 可以给一个加载中的描述，没有也无所谓 -->
    <!-- <div v-else>加载中...</div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick, onUnmounted } from "vue";
import {
  getImgElements,
  getAllImg,
  onComplateImgs,
  getMinHeightColumn,
  getMinHeight,
  getMaxHeight,
} from "./utils";

// 定义 item 类型（扩展 _style 字段）
type Item = Record<string, any> & {
  _style?: {
    left: number;
    top: number;
  } | null;
};

const props = defineProps<{
  data: Item[];
  nodeKey?: string;
  column?: number;
  columnSpacing?: number;
  rowSpacing?: number;
  picturePreReading?: boolean;
}>();

const column = props.column ?? 2;
const columnSpacing = props.columnSpacing ?? 20;
const rowSpacing = props.rowSpacing ?? 20;
const picturePreReading = props.picturePreReading ?? true;

const containerHeight = ref<number>(0);
const columnHeightObj = ref<Record<number, number>>({});
const containerTarget = ref<HTMLElement | null>(null);
const containerWidth = ref<number>(0);
const containerLeft = ref<number>(0);
const columnWidth = ref<number>(0);
const itemHeights: number[] = [];

const columnSpacingTotal = computed(() => (column - 1) * columnSpacing);

const useColumnHeightObj = () => {
  columnHeightObj.value = {};
  for (let i = 0; i < column; i++) {
    columnHeightObj.value[i] = 0;
  }
};

const useContainerWidth = () => {
  if (!containerTarget.value) return;
  const { paddingLeft, paddingRight } = getComputedStyle(containerTarget.value);
  containerLeft.value = parseFloat(paddingLeft);
  containerWidth.value =
    containerTarget.value.offsetWidth -
    parseFloat(paddingLeft) -
    parseFloat(paddingRight);
};

const useColumnWidth = () => {
  useContainerWidth();
  columnWidth.value =
    (containerWidth.value - columnSpacingTotal.value) / column;
};

onMounted(() => {
  useColumnWidth();
});

const waitImgComplate = () => {
  itemHeights.length = 0;
  const itemElements = Array.from(
    document.getElementsByClassName("m-waterfall-item")
  ) as HTMLElement[];
  const imgElements = getImgElements(itemElements);
  const allImgs = getAllImg(imgElements);
  onComplateImgs(allImgs).then(() => {
    itemElements.forEach((el) => {
      itemHeights.push(el.offsetHeight);
    });
    useItemLocation();
  });
};

const useItemHeight = () => {
  itemHeights.length = 0;
  const itemElements = Array.from(
    document.getElementsByClassName("m-waterfall-item")
  ) as HTMLElement[];
  itemElements.forEach((el) => {
    itemHeights.push(el.offsetHeight);
  });
  useItemLocation();
};

const useItemLocation = () => {
  props.data.forEach((item, index) => {
    if (item._style) return;
    item._style = {
      left: getItemLeft(),
      top: getItemTop(),
    };
    increasingHeight(index);
  });

  containerHeight.value = getMaxHeight(columnHeightObj.value);
};

const getItemLeft = (): number => {
  const col = getMinHeightColumn(columnHeightObj.value);
  return (
    Number(col) * (columnWidth.value + columnSpacing) + containerLeft.value
  );
};

const getItemTop = (): number => {
  return getMinHeight(columnHeightObj.value);
};

const increasingHeight = (index: number) => {
  const minHeightColumn = getMinHeightColumn(columnHeightObj.value);
  columnHeightObj.value[Number(minHeightColumn)] +=
    itemHeights[index] + rowSpacing;
};

onUnmounted(() => {
  props.data.forEach((item) => {
    delete item._style;
  });
});

watch(
  () => props.data,
  (newVal) => {
    const resetColumnHeight = newVal.every((item) => !item._style);
    if (resetColumnHeight) {
      useColumnHeightObj();
    }
    nextTick(() => {
      if (picturePreReading) {
        waitImgComplate();
      } else {
        useItemHeight();
      }
    });
  },
  {
    immediate: true,
    deep: true,
  }
);

const reset = () => {
  setTimeout(() => {
    useColumnWidth();
    props.data.forEach((item) => {
      item._style = null;
    });
  }, 100);
};

watch(
  () => props.column,
  () => {
    if (picturePreReading) {
      columnWidth.value = 0;
      nextTick(reset);
    } else {
      reset();
    }
  }
);
</script>

<style lang="scss" scoped></style>
