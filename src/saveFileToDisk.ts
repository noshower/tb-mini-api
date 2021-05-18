import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 保存文件到磁盘
 */
export default function saveFileToDisk(options: { apFilePath: string; defaultFileName?: string }): Promise<void> {
  return createPromiseApi('qn.saveFileToDisk')(options);
}
