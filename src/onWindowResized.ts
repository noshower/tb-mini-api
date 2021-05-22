import assertCanIUse from './utils/assertCanIUse';
/**
 * 窗口大小变化
 */
export default function onWindowResized(
  callback: (res: {
    name: string;
    type: string;
    cancelable: boolean;
    preventDefault: () => void;
    isDefaultPrevented: () => void;
    data: {
      height: number;
      width: number;
    };
  }) => void
) {
  assertCanIUse('qn.onWindowResized');
  return my.qn.onWindowResized(callback);
}
