import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
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
              class={styles.link}
              href={`#${groupAnchor(group)}`}
              aria-current={groupAnchor(group) === props.currentId ? 'true' : undefined}
              onClick={(event) => {
                event.preventDefault();
                props.onPick(groupAnchor(group));
              }}
            >
              <Text as="span" variant="micro" mono tone="tertiary">
                {group.number}
              </Text>
              <Text as="span" variant="label" class={styles.label}>
                {text.groupTitle(group)}
              </Text>
              <Text as="span" variant="micro" mono tone="tertiary">
                {specimenIdsMatching(text, group, props.query).length}
              </Text>
            </a>
          </>
        )}
      </For>
    </nav>
  );
};
