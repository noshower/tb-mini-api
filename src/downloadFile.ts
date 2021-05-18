import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 文件上传
 */
export default function downloadFile(options: { url: string; header: any }): Promise<{ apFilePath: string }> {
  return createPromiseApi('downloadFile')(options);
}
