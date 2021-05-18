import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取剪贴板数据
 */
export default function getClipboard(): Promise<{ text: string }> {
  return createPromiseApi('getClipboard')();
}
