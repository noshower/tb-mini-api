import assertCanIUse from './utils/assertCanIUse';
/**
 * 取消监听小程序切后台事件
 */
export default function offAppHide(callback: () => void) {
  assertCanIUse('offAppHide');
  return my.offAppHide(callback);
}
