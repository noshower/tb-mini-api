import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 退出当前小程序
 */
export default function exit(): Promise<{ success: boolean }> {
  return createPromiseApi('exit')();
}
