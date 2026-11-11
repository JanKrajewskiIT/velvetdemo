import { useI18n } from '@jankrajewskiit/i18n';
import {
  Button,
  Grid,
  Listbox,
  ListboxEmpty,
  ListboxOption,
  ListboxSkeleton,
  Stack,
  Surface,
  Text,
} from '@jankrajewskiit/ui';
import { createSignal, createUniqueId, For, Show } from 'solid-js';

import styles from './ListboxDemo.module.css';

const OPTIONS = [
  { id: 'admin', disabled: false },
  { id: 'editor', disabled: false },
  { id: 'viewer', disabled: false },
  { id: 'guest', disabled: true },
] as const;
const AVAILABLE = OPTIONS.filter((option) => !option.disabled);
const TYPEAHEAD_DELAY_MS = 700;
const MAX_QUERY_LENGTH = 32;

export const ListboxDemo = () => {
  const { ts, locale } = useI18n();
  const id = createUniqueId();
  const [selected, setSelected] = createSignal<(typeof OPTIONS)[number]['id']>('editor');
  const [active, setActive] = createSignal('editor');
  const [failed, setFailed] = createSignal(true);
  let list: HTMLUListElement | undefined;
  let query = '';
  let lastTypedAt = 0;
  const label = (value: (typeof OPTIONS)[number]['id']) => ts(`library.atoms.listbox.${value}`);
  const select = (option: (typeof OPTIONS)[number]) => {
    if (option.disabled) return;
    setActive(option.id);
    setSelected(option.id);
    list?.focus();
  };
  const onKeyDown = (event: KeyboardEvent) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return;
    const index = AVAILABLE.findIndex((option) => option.id === active());
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp': {
        event.preventDefault();
        const next =
          AVAILABLE[Math.max(0, Math.min(AVAILABLE.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1)))];
        if (next) setActive(next.id);
        query = '';
        return;
      }
      case 'Home':
      case 'End': {
        event.preventDefault();
        const next = event.key === 'Home' ? AVAILABLE[0] : AVAILABLE[AVAILABLE.length - 1];
        if (next) setActive(next.id);
        query = '';
        return;
      }
      case 'Enter':
      case ' ': {
        event.preventDefault();
        const option = AVAILABLE.find((item) => item.id === active());
        if (option) select(option);
        query = '';
        return;
      }
    }
    if (event.key.length !== 1) return;
    event.preventDefault();
    const character = event.key.toLocaleLowerCase(locale());
    query =
      event.timeStamp - lastTypedAt > TYPEAHEAD_DELAY_MS ? character : (query + character).slice(-MAX_QUERY_LENGTH);
    lastTypedAt = event.timeStamp;
    const repeated = Array.from(query).every((letter) => letter === character);
    const prefix = repeated ? character : query;
    const start = repeated ? index + 1 : index;
    for (let offset = 0; offset < AVAILABLE.length; offset += 1) {
      const option = AVAILABLE[(start + offset + AVAILABLE.length) % AVAILABLE.length];
      if (option && label(option.id).toLocaleLowerCase(locale()).startsWith(prefix)) {
        setActive(option.id);
        return;
      }
    }
  };

  return (
    <Stack gap={4}>
      <Text id={`${id}-help`} variant="caption" tone="secondary">
        {ts('library.atoms.listbox.help')}
      </Text>
      <Surface variant="overlay" padding="sm">
        <Listbox
          floating={false}
          ref={(element) => {
            list = element;
          }}
          class={styles.list}
          tabIndex={0}
          aria-label={ts('library.atoms.listbox.label')}
          aria-describedby={`${id}-help`}
          aria-activedescendant={`${id}-${active()}`}
          onFocus={() => setActive(selected())}
          onBlur={() => {
            query = '';
          }}
          onKeyDown={onKeyDown}
        >
          <For each={OPTIONS}>
            {(option) => (
              <ListboxOption
                id={`${id}-${option.id}`}
                label={label(option.id)}
                selected={selected() === option.id}
                active={active() === option.id}
                disabled={option.disabled}
                onClick={() => select(option)}
              />
            )}
          </For>
        </Listbox>
      </Surface>
      <Text variant="caption" aria-live="polite">
        {ts('library.atoms.listbox.selected', {
          value: label(selected()),
        })}
      </Text>
      <Grid min={200} gap={3}>
        <Surface variant="subtle" padding="sm">
          <ul class={styles.preview} aria-label={ts('library.atoms.listbox.emptyLabel')}>
            <ListboxEmpty>{ts('library.atoms.listbox.empty')}</ListboxEmpty>
          </ul>
        </Surface>
        <Surface variant="subtle" padding="sm">
          <ul class={styles.preview} aria-label={ts('library.atoms.listbox.errorLabel')} aria-live="polite">
            <ListboxEmpty error={failed()}>
              <Show when={failed()} fallback={ts('library.atoms.listbox.empty')}>
                {ts('library.atoms.listbox.error')}
              </Show>
            </ListboxEmpty>
          </ul>
          <Button size="sm" variant="secondary" onClick={() => setFailed(false)}>
            {ts('library.atoms.listbox.retry')}
          </Button>
        </Surface>
        <Surface variant="subtle" padding="sm">
          <Text variant="caption">{ts('library.atoms.listbox.loading')}</Text>
          <ul class={styles.preview} aria-label={ts('library.atoms.listbox.loading')} aria-busy="true">
            <ListboxSkeleton />
          </ul>
        </Surface>
      </Grid>
    </Stack>
  );
};
