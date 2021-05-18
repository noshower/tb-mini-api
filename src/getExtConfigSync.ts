import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 同步获取模板ext.json中的ext配置
 */
export default function getExtConfigSync(): Promise<{
  data: unknown;
}> {
  return createPromiseApi('getExtConfigSync')();
}
