import { useI18n } from '@jankrajewskiit/i18n';
import { createMemo, createResource, For, Show } from 'solid-js';

import type { LibraryGroup } from '../../library/types';
import { useLibraryText } from '../../library/useLibraryText';
import { groupAnchor, specimenIdsMatching } from './filterGroups';
import styles from './LibraryGroupView.module.css';
import { SpecimenCard } from './SpecimenCard';

export interface LibraryGroupViewProps {
  group: LibraryGroup;
  query: string;
}

export const LibraryGroupView = (props: LibraryGroupViewProps) => {
  const { ts } = useI18n();
  const text = useLibraryText();
  const anchor = () => groupAnchor(props.group);
  const ids = createMemo(() => new Set(specimenIdsMatching(text, props.group, props.query)));
  const [loaded] = createResource(
    () => props.group,
    (group) => group.load(),
  );
  const specimens = () => loaded()?.filter((specimen) => ids().has(specimen.id));

  return (
    <section class={styles.group} id={anchor()} aria-labelledby={`${anchor()}-title`}>
      <header class={styles.header}>
        <span class={styles.number} aria-hidden="true">
          {props.group.number}
        </span>
        <div>
          <h3 id={`${anchor()}-title`}>{text.groupTitle(props.group)}</h3>
          <p>{text.groupBlurb(props.group)}</p>
        </div>
        <span class={styles.count}>{ts('showcase.library.specimenCount', { count: ids().size })}</span>
      </header>
      <Show
        when={specimens()}
        fallback={
          <p class={styles.loading} role="status">
            {ts('showcase.library.loading')}
          </p>
        }
      >
        {(items) => (
          <div class={styles.cards}>
            <For each={items()}>{(specimen) => <SpecimenCard group={props.group} specimen={specimen} />}</For>
          </div>
        )}
      </Show>
    </section>
  );
};
