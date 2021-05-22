import assertCanIUse from './utils/assertCanIUse';
/**
 * 取消监听小程序错误事件
 */
export default function offError(callback: (error: string) => void) {
  assertCanIUse('offError');
  return my.offError(callback);
}
