import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Tag } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import { CaptionedRow } from './CaptionedRow';

const FILTERS = ['Design', 'Engineering', 'Research', 'Support'] as const;
const INITIAL_TAGS = ['solid', 'typescript', 'tokens'] as const;

export const TagInteractionDemo = () => {
  const { ts } = useI18n();
  const [active, setActive] = createSignal<ReadonlySet<string>>(new Set(['Design']));
  const [tags, setTags] = createSignal<readonly string[]>(INITIAL_TAGS);

  const toggle = (name: string) =>
    setActive((current) => {
      const next = new Set(current);
      if (!next.delete(name)) next.add(name);
      return next;
    });
  const remove = (name: string) => setTags((current) => current.filter((item) => item !== name));

  return (
    <>
      <CaptionedRow caption={ts('library.display.tags.selectable')}>
        <For each={FILTERS}>
          {(name) => (
            <Tag selected={active().has(name)} onClick={() => toggle(name)}>
              {name}
            </Tag>
          )}
        </For>
      </CaptionedRow>
      <CaptionedRow caption={ts('library.display.tags.removable')}>
        <For each={tags()}>{(name) => <Tag onRemove={() => remove(name)}>{name}</Tag>}</For>
        <Show when={tags().length === 0}>
          <Button size="xs" variant="ghost" onClick={() => setTags(INITIAL_TAGS)}>
            {ts('library.display.tags.restore')}
          </Button>
        </Show>
      </CaptionedRow>
    </>
  );
};
