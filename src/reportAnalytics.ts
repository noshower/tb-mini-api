/**
 * 自定义分析数据的上报接口
 */
export default function reportAnalytics(options: { eventName?: string; data: any }): Promise<void> {
  return my.reportAnalytics(options);
}
