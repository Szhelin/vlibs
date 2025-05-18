import { h, render } from 'vue';
import MessageComponent from './index.vue';

export type MessageType = 'success' | 'warn' | 'error';

interface MessageProps {
  type: MessageType;
  content: string;
  duration?: number;
  destroy: () => void;
}

export const message = (
  type: MessageType,
  content: string,
  duration = 3000
) => {
  const container = document.createElement('div');
  document.body.appendChild(container);

  const onDestroy = () => {
    render(null, container);
    document.body.removeChild(container);
  };

  const vnode = h(MessageComponent, {
    type,
    content,
    duration,
    destroy: onDestroy
  } as MessageProps);

  render(vnode, container);
};
