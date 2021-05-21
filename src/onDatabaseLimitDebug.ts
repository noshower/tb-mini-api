import assertCanIUse from './utils/assertCanIUse';

export default function onDatabaseLimitDebug(callback: (res: any) => void): void {
  assertCanIUse('qn.onDatabaseLimitDebug');
  my.qn.onDatabaseLimitDebug(callback);
}
