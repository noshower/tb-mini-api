import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 显示一个弱提示，可选择多少秒之后消失
 */
export default function showToast(options?: {
  content?: string;
  type?: 'success' | 'fail' | 'exception' | 'none';
  duration?: number;
}): Promise<void> {
  return createPromiseApi('showToast')(options);
}
