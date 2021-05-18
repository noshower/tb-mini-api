import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 确认框:弹窗样式不支持定制
 */
export default function confirm(options?: {
  title?: string;
  content?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
}): Promise<{ confirm: boolean }> {
  return createPromiseApi('confirm')(options);
}
