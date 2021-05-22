import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 文件上传
 */
export default function downloadFile(options: { url: string; header: unknown }): Promise<{ apFilePath: string }> {
  return createPromiseApi('downloadFile')(options);
}
