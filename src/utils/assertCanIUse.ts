export default function assertCanIUse(api: string) {
  if (!my.canIUse(api)) {
    my.alert({
      title: '亲',
      content: '当前千牛版本过低，请升级后使用',
      buttonText: '我知道了',
    });
    throw new Error('当前千牛版本过低，请升级后使用');
  }
}
