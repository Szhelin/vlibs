import { h, render } from "vue";
import confirmComponent from "./index.vue";

interface ConfirmOptions {
  title?: string;
  content: string;
  cancelText?: string;
  confirmText?: string;
}

/**
 * 弹出一个确认对话框
 *
 * @param titleOrContent 标题或内容
 * @param content 内容（可选）
 * @param cancelText 取消按钮文字（默认 "取消"）
 * @param confirmText 确认按钮文字（默认 "确定"）
 * @returns Promise<void>
 */
export const confirm = (
  titleOrContent: string,
  content?: string,
  cancelText = "取消",
  confirmText = "确定"
): Promise<void> => {
  return new Promise((resolve, reject) => {
    let title = titleOrContent;

    // 支持只传 content 参数
    if (titleOrContent && !content) {
      content = titleOrContent;
      title = "";
    }

    const close = () => {
      render(null, document.body);
    };

    const cancelHandler = () => {
      close();
      reject(new Error("用户点击取消"));
    };

    const confirmHandler = () => {
      close();
      resolve();
    };

    const vnode = h(confirmComponent, {
      title,
      content,
      cancelText,
      confirmText,
      cancelHandler,
      confirmHandler,
      close,
    });

    render(vnode, document.body);
  });
};
