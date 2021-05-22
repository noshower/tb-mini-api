import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 隐藏左侧导航栏中指定的菜单项
 */
export default function hideTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.hideTabEx')(options);
}
