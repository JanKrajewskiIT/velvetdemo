import { Button, Tag } from '@jankrajewskiit/ui';
import { createSignal, For, Show } from 'solid-js';

import { CaptionedRow } from './CaptionedRow';

const FILTERS = ['Design', 'Engineering', 'Research', 'Support'] as const;
const INITIAL_TAGS = ['solid', 'typescript', 'tokens'] as const;

export const TagInteractionDemo = () => {
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
      <CaptionedRow caption="Selectable filters">
        <For each={FILTERS}>
          {(name) => (
            <Tag selected={active().has(name)} onClick={() => toggle(name)}>
              {name}
            </Tag>
          )}
        </For>
      </CaptionedRow>
      <CaptionedRow caption="Removable">
        <For each={tags()}>{(name) => <Tag onRemove={() => remove(name)}>{name}</Tag>}</For>
        <Show when={tags().length === 0}>
          <Button size="xs" variant="ghost" onClick={() => setTags(INITIAL_TAGS)}>
            Restore tags
          </Button>
        </Show>
      </CaptionedRow>
    </>
  );
};
