import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 删除某个保存的文件
 */
export default function removeSavedFile(options: { apFilePath: string }): Promise<void> {
  return createPromiseApi('removeSavedFile')(options);
}
