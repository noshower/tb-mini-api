import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 显示左侧导航栏中指定的菜单项
 */
export default function showTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.showTabEx')(options);
}
