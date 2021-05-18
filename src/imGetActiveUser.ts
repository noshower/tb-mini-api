import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取当前IM旺旺联系人
 */
export default function imGetActiveUser(): Promise<{
  user_nick: string;
}> {
  return createPromiseApi('qn.imGetActiveUser')();
}
