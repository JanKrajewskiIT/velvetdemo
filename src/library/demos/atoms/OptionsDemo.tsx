import { Grid, Kbd, Option, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './OptionsDemo.module.css';

export const OptionsDemo = () => {
  const [sort, setSort] = createSignal('Recently updated');
  const [active, setActive] = createSignal<string>();
  const [hovered, setHovered] = createSignal<string>();
  const [action, setAction] = createSignal('No action selected');
  const isActive = (label: string) => active() === label || hovered() === label;

  return (
    <Stack gap={3}>
      <Grid min={200} gap={3}>
        <Surface variant="raised" padding="sm" role="group" aria-label="Sort preview">
          <div class={styles.row}>
            <Option
              label="Recently updated"
              showCheck
              selected={sort() === 'Recently updated'}
              active={isActive('Recently updated')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label="Sort by recently updated"
              aria-pressed={sort() === 'Recently updated'}
              onClick={() => setSort('Recently updated')}
              onFocus={() => setActive('Recently updated')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Recently updated')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
          <div class={styles.row}>
            <Option
              label="Name"
              description="A to Z"
              showCheck
              selected={sort() === 'Name'}
              active={isActive('Name')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label="Sort by name"
              aria-pressed={sort() === 'Name'}
              onClick={() => setSort('Name')}
              onFocus={() => setActive('Name')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Name')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
          <div class={styles.row}>
            <Option label="Owner" showCheck disabled aria-hidden="true" />
            <button class={styles.button} type="button" aria-label="Sort by owner" disabled />
          </div>
        </Surface>
        <Surface variant="raised" padding="sm" role="group" aria-label="Action preview">
          <div class={styles.row}>
            <Option
              role="menuitem"
              icon="copy"
              label="Duplicate"
              shortcut={<Kbd plain keys="mod+d" />}
              active={isActive('Duplicate')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label="Preview duplicate action"
              onClick={() => setAction('Duplicate selected')}
              onFocus={() => setActive('Duplicate')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Duplicate')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
          <div class={styles.row}>
            <Option
              role="menuitem"
              icon="trash-2"
              label="Delete"
              danger
              active={isActive('Delete')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label="Preview delete action"
              onClick={() => setAction('Delete selected')}
              onFocus={() => setActive('Delete')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Delete')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
        </Surface>
      </Grid>
      <Text variant="caption" tone="secondary">
        Sort: {sort()}. {action()}.
      </Text>
    </Stack>
  );
};
