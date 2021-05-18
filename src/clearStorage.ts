import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 清除本地数据缓存的异步接口
 */
export default function clearStorage(): Promise<void> {
  return createPromiseApi('clearStorage')();
}
