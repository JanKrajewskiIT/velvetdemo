import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Input, Select, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal, For, onCleanup, onMount, Show } from 'solid-js';

import { countSpecimens } from '../../library/countSpecimens';
import type { LibraryGroup } from '../../library/types';
import { useLibraryText } from '../../library/useLibraryText';
import { SectionHead } from '../SectionHead';
import { groupAnchor, groupFromHash, type Scope, SCOPES, specimenIdsMatching, visibleGroups } from './filterGroups';
import { LibraryGroupView } from './LibraryGroupView';
import { LibraryIndex } from './LibraryIndex';
import styles from './LibrarySection.module.css';

export interface LibrarySectionProps {
  groups: readonly LibraryGroup[];
}

const DEFAULT_GROUP_NUMBER = '11';

export const LibrarySection = (props: LibrarySectionProps) => {
  const { ts } = useI18n();
  const text = useLibraryText();
  const [query, setQuery] = createSignal('');
  const [scope, setScope] = createSignal<Scope>('all');
  const hashGroup = () => groupFromHash(props.groups, location.hash);
  const [selectedId, setSelectedId] = createSignal(`g${hashGroup()?.number ?? DEFAULT_GROUP_NUMBER}`);
  let tools: HTMLDivElement | undefined;

  const selectFromHash = () => {
    const group = hashGroup();
    if (group) setSelectedId(groupAnchor(group));
  };

  onMount(() => {
    window.addEventListener('hashchange', selectFromHash);
    onCleanup(() => window.removeEventListener('hashchange', selectFromHash));
  });

  const specimenTotal = () => countSpecimens(props.groups);
  const groups = createMemo(() => visibleGroups(text, props.groups, query(), scope()));
  const searching = () => query().trim().length > 0;
  const current = createMemo(() => groups().find((group) => groupAnchor(group) === selectedId()) ?? groups()[0]);
  const shown = () => {
    if (searching()) return groups();
    const group = current();
    return group ? [group] : [];
  };
  const currentId = () => {
    const group = current();
    return group && !searching() ? groupAnchor(group) : undefined;
  };

  const pick = (id: string) => {
    setSelectedId(id);
    setQuery('');
    history.replaceState(null, '', `#${id}`);
    tools?.scrollIntoView({ block: 'start' });
  };

  return (
    <section class={styles.section} id="library">
      <div class={styles.container}>
        <SectionHead overline={ts('showcase.library.overline')} title={ts('showcase.library.title')}>
          {ts('showcase.library.lead')}
        </SectionHead>
        <div class={styles.layout}>
          <LibraryIndex groups={groups()} query={query()} currentId={currentId()} onPick={pick} />
          <div class={styles.content}>
            <div
              class={styles.tools}
              ref={(element) => {
                tools = element;
              }}
            >
              <div class={styles.search}>
                <Input
                  aria-label={ts('showcase.library.filterLabel')}
                  placeholder={ts('showcase.library.filterPlaceholder', { count: specimenTotal() })}
                  iconLeft="search"
                  value={query()}
                  onInput={(event) => setQuery(event.currentTarget.value)}
                />
              </div>
              <div class={styles.scopes} role="group" aria-label={ts('showcase.library.scopeLabel')}>
                <For each={SCOPES}>
                  {(item) => (
                    <Button
                      variant={scope() === item ? 'soft' : 'ghost'}
                      aria-pressed={scope() === item}
                      onClick={() => setScope(item)}
                    >
                      {ts(`showcase.library.scopes.${item}`)}
                    </Button>
                  )}
                </For>
              </div>
            </div>
            <Show when={groups().length > 0}>
              <Select
                class={styles.mobileSelect}
                aria-label={ts('showcase.library.sectionLabel')}
                placeholder={ts('showcase.library.sectionLabel')}
                value={currentId()}
                onValueChange={pick}
                options={groups().map((group) => ({
                  value: groupAnchor(group),
                  label: `${group.number} ${text.groupTitle(group)} (${specimenIdsMatching(text, group, query()).length})`,
                }))}
              />
            </Show>
            <Show
              when={groups().length > 0}
              fallback={
                <Text as="p" variant="body" tone="tertiary" class={styles.empty} role="status">
                  {ts('showcase.library.empty', { query: query() })}
                </Text>
              }
            >
              <For each={shown()}>{(group) => <LibraryGroupView group={group} query={query()} />}</For>
            </Show>
          </div>
        </div>
      </div>
    </section>
  );
};
