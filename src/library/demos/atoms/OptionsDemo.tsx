import { useI18n } from '@jankrajewskiit/i18n';
import { Grid, Kbd, Option, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './OptionsDemo.module.css';

export const OptionsDemo = () => {
  const { ts } = useI18n();
  const [sort, setSort] = createSignal<'recent' | 'name'>('recent');
  const [active, setActive] = createSignal<string>();
  const [hovered, setHovered] = createSignal<string>();
  const [action, setAction] = createSignal<'none' | 'duplicated' | 'deleted'>('none');
  const isActive = (label: string) => active() === label || hovered() === label;

  return (
    <Stack gap={3}>
      <Grid min={200} gap={3}>
        <Surface variant="raised" padding="sm" role="group" aria-label={ts('library.atoms.options.sortLabel')}>
          <div class={styles.row}>
            <Option
              label={ts('library.atoms.options.recent')}
              showCheck
              selected={sort() === 'recent'}
              active={isActive('Recently updated')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label={ts('library.atoms.options.sortRecent')}
              aria-pressed={sort() === 'recent'}
              onClick={() => setSort('recent')}
              onFocus={() => setActive('Recently updated')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Recently updated')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
          <div class={styles.row}>
            <Option
              label={ts('library.atoms.options.name')}
              description={ts('library.atoms.options.alphabetical')}
              showCheck
              selected={sort() === 'name'}
              active={isActive('Name')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label={ts('library.atoms.options.sortName')}
              aria-pressed={sort() === 'name'}
              onClick={() => setSort('name')}
              onFocus={() => setActive('Name')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Name')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
          <div class={styles.row}>
            <Option label={ts('library.atoms.options.owner')} showCheck disabled aria-hidden="true" />
            <button class={styles.button} type="button" aria-label={ts('library.atoms.options.sortOwner')} disabled />
          </div>
        </Surface>
        <Surface variant="raised" padding="sm" role="group" aria-label={ts('library.atoms.options.actionsLabel')}>
          <div class={styles.row}>
            <Option
              role="menuitem"
              icon="copy"
              label={ts('library.atoms.options.duplicate')}
              shortcut={<Kbd plain keys="mod+d" />}
              active={isActive('Duplicate')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label={ts('library.atoms.options.duplicate')}
              onClick={() => setAction('duplicated')}
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
              label={ts('library.atoms.options.delete')}
              danger
              active={isActive('Delete')}
              aria-hidden="true"
            />
            <button
              class={styles.button}
              type="button"
              aria-label={ts('library.atoms.options.delete')}
              onClick={() => setAction('deleted')}
              onFocus={() => setActive('Delete')}
              onBlur={() => setActive(undefined)}
              onPointerEnter={() => setHovered('Delete')}
              onPointerLeave={() => setHovered(undefined)}
            />
          </div>
        </Surface>
      </Grid>
      <Text variant="caption" tone="secondary">
        {ts('library.atoms.options.status', {
          sort: ts(`library.atoms.options.${sort()}`),
          action: ts(`library.atoms.options.${action()}`),
        })}
      </Text>
    </Stack>
  );
};
