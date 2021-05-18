import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{ accessToken: string; authSuccessScope: string; authErrorScope: Error }> {
  return createPromiseApi('authorize')(options);
}
