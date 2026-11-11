import { useI18n } from '@jankrajewskiit/i18n';
import { IconCategories, Input, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal, For, Show } from 'solid-js';

import { GlyphDetail } from './GlyphDetail';
import { GlyphTile } from './GlyphTile';
import styles from './IconSetDemo.module.css';

interface GlyphGroup {
  category: string;
  names: readonly string[];
}

const GROUPS: readonly GlyphGroup[] = Object.entries(IconCategories).map(([category, names]) => ({
  category,
  names,
}));
const TOTAL = GROUPS.reduce((sum, group) => sum + group.names.length, 0);
const INITIAL_GLYPH = 'search';

export const IconSetDemo = () => {
  const { ts } = useI18n();
  const [query, setQuery] = createSignal('');
  const [selected, setSelected] = createSignal(INITIAL_GLYPH);

  const visible = createMemo(() => {
    const needle = query().trim().toLowerCase();
    return GROUPS.map((group) => ({
      category: group.category,
      names: group.names.filter((name) => name.includes(needle)),
    })).filter((group) => group.names.length > 0);
  });
  const matchCount = () => visible().reduce((sum, group) => sum + group.names.length, 0);

  return (
    <div class={styles.root}>
      <GlyphDetail name={selected()} />
      <div class={styles.toolbar}>
        <div class={styles.search}>
          <Input
            label={ts('library.icons.set.search')}
            iconLeft="search"
            placeholder={ts('library.icons.set.placeholder')}
            onInput={(event) => setQuery(event.currentTarget.value)}
          />
        </div>
        <Text variant="caption" tone="tertiary" tabular role="status">
          {ts('library.icons.set.count', { shown: matchCount(), total: TOTAL })}
        </Text>
      </div>
      <Show
        when={visible().length > 0}
        fallback={
          <Text variant="body-sm" tone="secondary">
            {ts('library.icons.set.empty', { query: query().trim() })}
          </Text>
        }
      >
        <For each={visible()}>
          {(group) => (
            <section class={styles.group} aria-label={group.category}>
              <Text as="h3" variant="overline" tone="tertiary">
                {group.category} · {group.names.length}
              </Text>
              <ul class={styles.grid}>
                <For each={group.names}>
                  {(name) => (
                    <li>
                      <GlyphTile name={name} selected={name === selected()} onSelect={setSelected} />
                    </li>
                  )}
                </For>
              </ul>
            </section>
          )}
        </For>
      </Show>
    </div>
  );
};
