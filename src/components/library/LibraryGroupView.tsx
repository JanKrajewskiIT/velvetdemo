import { useI18n } from '@jankrajewskiit/i18n';
import { ErrorState, Heading, Text } from '@jankrajewskiit/ui';
import { createMemo, createResource, For, Show } from 'solid-js';

import { browserDiagnostics } from '../../browserDiagnostics';
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
  const [loaded, { refetch }] = createResource(
    () => props.group,
    (group) => group.load(),
  );
  const hasError = (): boolean => loaded.state === 'errored';
  const specimens = () => (hasError() ? undefined : loaded()?.filter((specimen) => ids().has(specimen.id)));

  return (
    <section class={styles.group} id={anchor()} aria-labelledby={`${anchor()}-title`}>
      <header class={styles.header}>
        <Text as="span" variant="display-lg" tone="brand" aria-hidden="true">
          {props.group.number}
        </Text>
        <div class={styles.heading}>
          <Heading level={3} variant="display-sm" id={`${anchor()}-title`} class={styles.title}>
            {text.groupTitle(props.group)}
          </Heading>
          <Text as="p" variant="body" tone="secondary" class={styles.blurb}>
            {text.groupBlurb(props.group)}
          </Text>
        </div>
        <Text variant="caption" mono tone="tertiary">
          {ts('showcase.library.specimenCount', { count: ids().size })}
        </Text>
      </header>
      <Show when={hasError()}>
        <ErrorState
          title={ts('showcase.library.loadFailed')}
          onRetry={() => {
            void Promise.resolve(refetch()).catch(() => browserDiagnostics.reportError('chunk'));
          }}
        />
      </Show>
      <Show
        when={specimens()}
        fallback={
          <Show when={!hasError()}>
            <Text as="p" variant="caption" mono tone="tertiary" class={styles.loading} role="status">
              {ts('showcase.library.loading')}
            </Text>
          </Show>
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
