/**
 * 自定义分析数据的上报接口
 */
export default function reportAnalytics(eventName: string, data: unknown): Promise<{ success: boolean }> {
  return my.reportAnalytics(eventName, data);
}
