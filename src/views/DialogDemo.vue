<template>
  <div class="demo-container">
    <h2 class="title">zl-dialog 对话框组件文档 | Dialog Component Docs</h2>

    <!-- Props 参数说明 -->
    <section class="doc-section">
      <h3 class="subtitle">🔧 Props 参数说明 | Props</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>参数 | Prop</th>
            <th>类型 | Type</th>
            <th>说明 | Description</th>
            <th>默认值 | Default</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>modelValue</code></td>
            <td>Boolean</td>
            <td>是否显示对话框（v-model）<br />Show dialog (v-model)</td>
            <td>必填 | required</td>
            <td><code>&lt;zl-dialog v-model="visible" /&gt;</code></td>
          </tr>
          <tr>
            <td><code>title</code></td>
            <td>String</td>
            <td>对话框标题<br />Dialog title</td>
            <td>空 | empty</td>
            <td><code>title="提示 | Notice"</code></td>
          </tr>
          <tr>
            <td><code>cancelText</code></td>
            <td>String</td>
            <td>取消按钮文本<br />Cancel button text</td>
            <td>"取消" | "Cancel"</td>
            <td><code>cancelText="关闭 | Close"</code></td>
          </tr>
          <tr>
            <td><code>confirmText</code></td>
            <td>String</td>
            <td>确认按钮文本<br />Confirm button text</td>
            <td>"确定" | "Confirm"</td>
            <td><code>confirmText="提交 | Submit"</code></td>
          </tr>
          <tr>
            <td><code>cancelHandler</code></td>
            <td>Function</td>
            <td>取消按钮回调<br />Cancel button callback</td>
            <td>空 | empty</td>
            <td><code>:cancelHandler="onCancel"</code></td>
          </tr>
          <tr>
            <td><code>confirmHandler</code></td>
            <td>Function</td>
            <td>确认按钮回调<br />Confirm button callback</td>
            <td>空 | empty</td>
            <td><code>:confirmHandler="onConfirm"</code></td>
          </tr>
          <tr>
            <td><code>close</code></td>
            <td>Function</td>
            <td>关闭对话框时的回调<br />Callback when dialog closes</td>
            <td>空 | empty</td>
            <td><code>:close="onClose"</code></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 插槽说明 -->
    <section class="doc-section">
      <h3 class="subtitle">📦 插槽说明 | Slots</h3>
      <table class="doc-table">
        <thead>
          <tr>
            <th>名称 | Name</th>
            <th>说明 | Description</th>
            <th>示例 | Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>默认 | default</td>
            <td>对话框内容区域插槽<br />Dialog content area</td>
            <td>
              <code
                >&lt;zl-dialog&gt;&lt;div&gt;...&lt;/div&gt;&lt;/zl-dialog&gt;</code
              >
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- 使用示例 -->
    <section class="demo-section">
      <h3 class="subtitle">🎯 使用示例 | Usage Example</h3>
      <zl-button type="main" @click="isDialog = true">点此预览show</zl-button>

      <zl-dialog
        v-model="isDialog"
        title="你好，Hello~"
        cancelText="取消 | Cancel"
        confirmText="确定 | Confirm"
        :cancelHandler="onClickCancel"
        :confirmHandler="onClickConfirm"
      >
        <div style="display: flex; justify-content: center">
          <img
            style="width: 300px; height: 300px"
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jv1nqy9wec8bqxzwc7tdybxr%2F1747034329_img_0.webp?st=2025-05-18T10%3A00%3A03Z&se=2025-05-24T11%3A00%3A03Z&sks=b&skt=2025-05-18T10%3A00%3A03Z&ske=2025-05-24T11%3A00%3A03Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=BtmzE2XOWSBzrKYSTHK4CLsniSbJxw9JY7i%2BFTZOr64%3D&az=oaivgprodscus"
            alt="对话框图片示例 | Dialog Image Example"
          />
        </div>
      </zl-dialog>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isDialog = ref(false);

const onClickCancel = () => {
  console.log("取消按钮被点击 | Cancel clicked");
};

const onClickConfirm = () => {
  console.log("确认按钮被点击 | Confirm clicked");
};
</script>

<style scoped>
.demo-container {
  padding: 24px;
  font-family: Arial, sans-serif;
  background-color: #fdfdfd;
}

.title {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0 10px;
}

.doc-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  font-size: 14px;
}

.doc-table th,
.doc-table td {
  border: 1px solid #ccc;
  padding: 8px 10px;
  text-align: left;
}

.doc-table th {
  background-color: #f4f4f4;
}

.demo-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
