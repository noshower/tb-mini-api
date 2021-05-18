import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取模板ext.json中的ext配置
 */
export default function getExtConfig(): Promise<{
  data: unknown;
}> {
  return createPromiseApi('getExtConfig')();
}
