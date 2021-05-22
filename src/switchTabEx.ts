import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 切换左侧导航条选中项
 */
export default function switchTabEx(options: { id: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.switchTabEx')(options);
}
