import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 打开聊天
 */
export default function openChat(options: { nick: string; text?: string }): Promise<{
  nickName: string;
  avatar: string;
}> {
  return createPromiseApi('qn.openChat')(options);
}
