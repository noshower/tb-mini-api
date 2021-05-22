import assertCanIUse from './assertCanIUse';

type Result = {
  (options?: any): Promise<any>;
};

export function createPromiseApi<T = unknown>(api: string, defaultValue = {}): Result {
  try {
    assertCanIUse(api);
    const [firstPath, secondPath] = api.split('.');
    const invoke = secondPath ? my[firstPath][secondPath] : my[firstPath];
    return (options: any) =>
      new Promise((resolve, reject) => {
        invoke({
          ...defaultValue,
          ...(options || {}),
          success: (res: T) => resolve(res),
          fail: (err: any) => reject(err),
        });
      });
  } catch (e) {
    return () => Promise.reject(e);
  }
}
