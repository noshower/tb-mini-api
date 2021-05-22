import { createPromiseApi } from './utils/createPromiseApi';
/**
 * 关闭当前页面，跳转到应用内的某个指定页面
 */
export default function redirectTo(options: { url: string }): Promise<{ success: boolean }> {
  return createPromiseApi('redirectTo')(options);
}
