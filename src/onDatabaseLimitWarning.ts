import assertCanIUse from './utils/assertCanIUse';

export default function onDatabaseLimitWarning(callback: (res: any) => void): void {
  assertCanIUse('qn.onDatabaseLimitWarning');
  my.qn.onDatabaseLimitWarning(callback);
}
