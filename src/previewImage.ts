import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 预览图片
 */
export default function previewImage(options: { urls: string[]; current?: number }): Promise<{ success: boolean }> {
  return createPromiseApi('previewImage')(options);
}
