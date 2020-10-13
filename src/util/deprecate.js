import utilDeprecate from 'util-deprecate';

export const deprecate = utilDeprecate;

export function immediateDeprecate(msg) {
  deprecate(() => {}, msg)();
}
