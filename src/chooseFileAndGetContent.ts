import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 打开文件并获取内容
 */
export default function chooseFileAndGetContent(options?: { count?: number; type?: number }): Promise<{ fileContentMap: any }> {
  return createPromiseApi('qn.chooseFileAndGetContent')(options);
}
