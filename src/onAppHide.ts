import assertCanIUse from './utils/assertCanIUse';
/**
 * 监听小程序切后台事件
 */
export default function onAppHide(callback: () => void) {
  assertCanIUse('onAppHide');
  return my.onAppHide(callback);
}
