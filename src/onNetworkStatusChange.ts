/**
 * 开始网络状态变化的监听
 */
export default function onNetworkStatusChange(callback: () => void): void {
  return my.onNetworkStatusChange(callback);
}
