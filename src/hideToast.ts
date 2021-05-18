import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 隐藏弱提示
 */
export default function hideToast(): Promise<void> {
  return createPromiseApi('hideToast')();
}
