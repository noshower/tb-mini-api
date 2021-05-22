import { createPromiseApi } from './utils/createPromiseApi';
/**
 * 小程序跳转到QAP
 */
export default function navigateToQAP(options: { url: string; title?: string; query?: unknown }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.navigateToQAP')(options);
}
