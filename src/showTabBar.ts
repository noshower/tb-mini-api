import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 显示 tabBar
 */
export default function showTabBar(options?: { animation: boolean }): Promise<{ success: boolean }> {
  return createPromiseApi('showTabBar')(options);
}
