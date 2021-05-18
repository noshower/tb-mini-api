import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取保存的所有文件信息
 */
export default function getSavedFileList(options: { apFilePath: string }): Promise<{
  fileList: { size: number; createTime: number; apFilePath: string }[];
}> {
  return createPromiseApi('getSavedFileList')(options);
}
