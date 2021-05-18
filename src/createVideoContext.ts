type F = () => void;

/**
 * 创建VideoContext
 */
export default function createVideoContext(videoId: string): Promise<{
  play: F;
  pause: F;
  stop: F;
  seek: (t: number) => void;
  requestFullScreen: (options: { direction: number }) => void;
  exitFullScreen: F;
}> {
  return my.createVideoContext(videoId);
}
