import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 弹出子账号授权框
 */
export default function showSubAccountAuth(options: { api: string }): Promise<{ success: boolean }> {
  return createPromiseApi('qn.showSubAccountAuth')(options);
}
