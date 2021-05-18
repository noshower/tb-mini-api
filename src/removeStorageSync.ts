/**
 * 删除缓存数据的异步接口
 */
export default function removeStorageSync(key: string): void {
  return my.removeStorageSync({ key });
}
