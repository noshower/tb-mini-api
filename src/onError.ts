import assertCanIUse from './utils/assertCanIUse';
/**
 * 监听小程序错误事件
 */
export default function onError(callback: (error: string) => void) {
  assertCanIUse('onError');
  return my.onError(callback);
}
