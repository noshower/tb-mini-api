import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 导航菜单显示红点
 */
export default function showTabBarRedDotEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.showTabBarRedDotEx')(options);
}
