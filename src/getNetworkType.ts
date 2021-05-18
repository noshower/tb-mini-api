import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取当前网络状态
 */
export default function getNetworkType(): Promise<{
  networkAvailable: boolean;
  networkType: 'UNKNOWN' | 'NOTREACHABLE' | 'WIFI' | '3G' | '2G' | '4G' | 'WWAN';
}> {
  return createPromiseApi('getNetworkType')();
}
