/**
 * 创建动画实例
 */
export default function createAnimation(options?: {
  duration?: number;
  timeFunction?: 'linear' | 'ease' | 'ease-in' | 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';
  delay?: number;
  transformOrigin?: string;
}): void {
  return my.createAnimation(options);
}
