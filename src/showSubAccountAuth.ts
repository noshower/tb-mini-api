import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 弹出子账号授权框
 */
export default function showSubAccountAuth(api: string): Promise<void> {
  return createPromiseApi('qn.showSubAccountAuth')({ api });
}
