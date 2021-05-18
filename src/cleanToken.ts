import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 清除三方授权token
 */
export default function cleanToken(): Promise<void> {
  return createPromiseApi('qn.cleanToken')();
}
