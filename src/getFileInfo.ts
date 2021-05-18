import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取文件信息
 */
export default function getFileInfo(options: { apFilePath: string; digestAlgorithm?: 'md5' | 'sha1' }): Promise<{
  size: number;
  digest: string;
}> {
  return createPromiseApi('getFileInfo')(options);
}
