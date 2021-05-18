import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取保存的文件信息
 */
export default function getSavedFileInfo(options: { apFilePath: string }): Promise<{ size: number; createTime: number }> {
  return createPromiseApi('getSavedFileInfo')(options);
}
