import { createPromiseApi } from './utils/createPromiseApi';
/**
 * 关闭当前页面，返回上一级或多级页面
 */
export default function navigateBack(options: { delta: number }): Promise<{ success: boolean }> {
  return createPromiseApi('navigateBack')(options);
}
