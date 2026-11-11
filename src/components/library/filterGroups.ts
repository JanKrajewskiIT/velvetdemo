import { specimenIdsOf } from '../../library/specimenIds';
import type { LibraryGroup } from '../../library/types';
import type { LibraryText } from '../../library/useLibraryText';

// Mirrors the showcase tabs in design-system showcase/sections.json (`tabs`, by section number).
const SCOPE_RANGES = {
  found: [0, 8],
  icons: [9, 9],
  atoms: [10, 10],
  comp: [11, 99],
} as const;

export type Tab = keyof typeof SCOPE_RANGES;

export const SCOPES = ['all', 'found', 'icons', 'atoms', 'comp'] as const satisfies readonly ('all' | Tab)[];

export type Scope = (typeof SCOPES)[number];

export const tabOf = (group: LibraryGroup): Tab | undefined => {
  const number = Number(group.number);
  return (Object.keys(SCOPE_RANGES) as Tab[]).find((tab) => {
    const [from, to] = SCOPE_RANGES[tab];
    return number >= from && number <= to;
  });
};

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
    (group) => (scope === 'all' || tabOf(group) === scope) && specimenIdsMatching(text, group, query).length > 0,
  );
