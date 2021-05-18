import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 设置剪贴板数据
 */
export default function setClipboard(text: string): Promise<void> {
  return createPromiseApi('setClipboard')({ text });
}
