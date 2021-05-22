import assertCanIUse from './utils/assertCanIUse';
/**
 * 取消监听小程序切前台事件
 */
export default function offAppShow(callback: () => void) {
  assertCanIUse('offAppShow');
  return my.offAppShow(callback);
}
