import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 导航菜单隐藏红点
 */
export default function hideTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.hideTabBarRedDotEx')(options);
}
