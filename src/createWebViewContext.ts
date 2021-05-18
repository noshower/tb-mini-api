/**
 * 通过创建 webviewContext 提供从小程序向 web-view 发送消息的能力
 */
export default function createWebViewContext(arg0: string): {
  postMessage: (param: any) => void;
} {
  return my.createWebViewContext(arg0);
}
