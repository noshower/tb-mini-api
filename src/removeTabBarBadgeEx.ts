import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 导航菜单移除提醒文字
 */
export default function removeTabBarBadgeEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.removeTabBarBadgeEx')(options);
}
