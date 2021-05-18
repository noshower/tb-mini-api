/**
 * 获取缓存数据的同步接口
 */
export default function getStorageSync<T = any>(key: string): { data: T } {
  return my.getStorageSync({ key });
}
