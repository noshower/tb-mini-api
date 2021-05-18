import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取用户信息
 */
export default function getAuthUserInfo(): Promise<{
  nickName: string;
  avatar: string;
}> {
  return createPromiseApi('getAuthUserInfo')();
}
