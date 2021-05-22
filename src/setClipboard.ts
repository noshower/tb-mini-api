import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 设置剪贴板数据
 */
export default function setClipboard(options: { text: string }): Promise<{ success: boolean }> {
  return createPromiseApi('setClipboard')(options);
}
