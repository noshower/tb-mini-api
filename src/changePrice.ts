import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 千牛提供更改商品价格的能力
 */
export default function changePrice(tid: string): Promise<void> {
  return createPromiseApi('qn.changePrice')({ tid });
}
