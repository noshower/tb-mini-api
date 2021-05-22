import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 显示 tabBar 某一项的右上角的红点
 */
export default function showTabBarRedDot(options: { index: number }): Promise<{ success: boolean }> {
  return createPromiseApi('showTabBarRedDot')(options);
}
