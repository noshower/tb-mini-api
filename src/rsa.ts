import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 非对称加密
 */
export default function rsa(options: { action: string; text: string; key: string }): Promise<{
  text: string;
}> {
  return createPromiseApi('rsa')(options);
}
