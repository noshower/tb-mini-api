import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 发起用户授权
 */
export default function authorize(options: { scopes: string }): Promise<{
  authSuccessScope: string;
  // accessToken: string;
  //  authErrorScope: Error
}> {
  return createPromiseApi('authorize')(options);
}
