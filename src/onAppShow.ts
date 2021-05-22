import assertCanIUse from './utils/assertCanIUse';
/**
 * 监听小程序切前台事件
 */
export default function onAppShow(callback: () => void) {
  assertCanIUse('onAppShow');
  return my.onAppShow(callback);
}
