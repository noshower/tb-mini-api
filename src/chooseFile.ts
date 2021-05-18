import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 选择文件
 */
export default function chooseFile(options: { count?: number; type?: number }): Promise<{ apFilePaths: string[] }> {
  return createPromiseApi('qn.chooseFile')(options);
}
