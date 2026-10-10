import { specimenIdsOf } from '../../library/specimenIds';
import type { GroupKind, LibraryGroup } from '../../library/types';
import type { LibraryText } from '../../library/useLibraryText';

export const SCOPES = ['all', 'foundation', 'component'] as const satisfies readonly ('all' | GroupKind)[];

export type Scope = (typeof SCOPES)[number];

export const groupAnchor = (group: LibraryGroup) => `g${group.number}`;

export const groupFromHash = (groups: readonly LibraryGroup[], hash: string) =>
  groups.find((group) => `#${groupAnchor(group)}` === hash);

const matchesQuery = (text: LibraryText, group: LibraryGroup, specimenId: string, normalizedQuery: string) =>
  [text.specimenName(group, specimenId), text.specimenSubtitle(group, specimenId), group.number, text.groupTitle(group)]
    .join(' ')
    .toLowerCase()
    .includes(normalizedQuery);

export const specimenIdsMatching = (text: LibraryText, group: LibraryGroup, query: string): readonly string[] => {
  const ids = specimenIdsOf(group);
  const normalized = query.trim().toLowerCase();
  if (!normalized) return ids;
  return ids.filter((id) => matchesQuery(text, group, id, normalized));
};

export const visibleGroups = (
  text: LibraryText,
  groups: readonly LibraryGroup[],
  query: string,
  scope: Scope,
): LibraryGroup[] =>
  groups.filter(
    (group) => (scope === 'all' || group.kind === scope) && specimenIdsMatching(text, group, query).length > 0,
  );
