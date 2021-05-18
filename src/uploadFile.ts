import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 文件上传
 */
export default function uploadFile(options: { url: string; fileType: string; filePath: string; header: any; formData: any }): Promise<void> {
  return createPromiseApi('uploadFile')(options);
}
