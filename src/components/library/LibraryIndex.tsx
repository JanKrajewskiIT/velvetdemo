import { useI18n } from '@jankrajewskiit/i18n';
import { For, Show } from 'solid-js';

import type { LibraryGroup } from '../../library/types';
import { useLibraryText } from '../../library/useLibraryText';
import { groupAnchor, specimenIdsMatching } from './filterGroups';
import styles from './LibraryIndex.module.css';

export interface LibraryIndexProps {
  groups: readonly LibraryGroup[];
  query: string;
  currentId: string | undefined;
  onPick: (id: string) => void;
}

const startsComponents = (groups: readonly LibraryGroup[], index: number) =>
  index > 0 && groups[index]?.kind === 'component' && groups[index - 1]?.kind === 'foundation';

export const LibraryIndex = (props: LibraryIndexProps) => {
  const { ts } = useI18n();
  const text = useLibraryText();

  return (
    <nav class={styles.index} aria-label={ts('showcase.library.indexLabel')}>
      <For each={props.groups}>
        {(group, index) => (
          <>
            <Show when={startsComponents(props.groups, index())}>
              <hr />
            </Show>
            <a
              href={`#${groupAnchor(group)}`}
              aria-current={groupAnchor(group) === props.currentId ? 'true' : undefined}
              onClick={(event) => {
                event.preventDefault();
                props.onPick(groupAnchor(group));
              }}
            >
              <span>{group.number}</span>
              <span>{text.groupTitle(group)}</span>
              <span>{specimenIdsMatching(text, group, props.query).length}</span>
            </a>
          </>
        )}
      </For>
    </nav>
  );
};
