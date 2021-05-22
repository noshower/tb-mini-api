import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 千牛提供更改商品价格的能力
 */
export default function changePrice(options: { tid: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.changePrice')(options);
}
