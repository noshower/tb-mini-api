import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 移除 tabBar 某一项右上角的文本
 */
export default function removeTabBarBadge(options: { index: number }): Promise<{ success: boolean }> {
  return createPromiseApi('removeTabBarBadge')(options);
}
