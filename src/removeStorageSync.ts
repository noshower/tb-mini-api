/**
 * 删除缓存数据的异步接口
 */
export default function removeStorageSync(options: { key: string }): { success: boolean } {
  return my.removeStorageSync(options);
}
