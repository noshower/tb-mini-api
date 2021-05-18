import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取缓存数据的异步接口
 */
export default function getStorage<T = any>(key: string): Promise<{ data: T }> {
  return createPromiseApi('getStorage')({ key });
}
