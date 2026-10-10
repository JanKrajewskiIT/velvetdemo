import { specimenIdsOf } from './specimenIds';
import type { LibraryGroup } from './types';

export const countSpecimens = (groups: readonly LibraryGroup[]) =>
  groups.reduce((total, group) => total + specimenIdsOf(group).length, 0);
