import { createPromiseApi } from './utils/createPromiseApi';
/**
 * 关闭插件页面
 */
export default function closeQAP(): Promise<{ success: boolean }> {
  return createPromiseApi('qn.closeQAP')();
}
