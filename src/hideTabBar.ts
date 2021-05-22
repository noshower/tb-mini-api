import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 隐藏 tabBar
 */
export default function hideTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return createPromiseApi('hideTabBar')(options);
}
