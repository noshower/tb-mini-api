import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 打开千牛的插槽协议。目前支持 shangpinguanli：itemList，itemDetail， jiaoyiguanli：tradeList，tradeDetail
 */
export default function openCategory(options: { category?: string; pageName: string; param?: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.openCategory')(options);
}
