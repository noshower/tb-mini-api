import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 保存文件到本地
 */
export default function saveFile(options: { apFilePath: string }): Promise<{ apFilePath: string }> {
  return createPromiseApi('saveFile')(options);
}
