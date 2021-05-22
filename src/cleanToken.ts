import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 清除三方授权token
 */
export default function cleanToken(): Promise<{ success: boolean }> {
  return createPromiseApi('qn.cleanToken')();
}
