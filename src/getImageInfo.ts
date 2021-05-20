import { createPromiseApi } from './utils/createPromiseApi';

/**
 * 获取图片信息
 */
export default function getImageInfo(options: { src: string }): Promise<{
  width: number;
  height: number;
  path: string;
  // orientation: 'up' | 'down' | 'left' | 'right' | 'up-mirrored' | 'down-mirrored' | 'left-mirrored' | 'right-mirrored';
  // type: string;
}> {
  return createPromiseApi('getImageInfo')(options);
}
