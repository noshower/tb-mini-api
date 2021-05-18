import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 删除缓存数据的异步接口
 */
export default function removeStorage(key: string): Promise<void> {
  return createPromiseApi('removeStorage')({ key });
}
