import { useI18n } from '@jankrajewskiit/i18n';
import { For } from 'solid-js';

import styles from './RadiusScaleDemo.module.css';
import { RadiusTile } from './RadiusTile';

const RADII = [
  { token: '--radius-none', useKey: 'library.shape.radiusScale.uses.none' },
  { token: '--radius-2xs', useKey: 'library.shape.radiusScale.uses.twoXs' },
  { token: '--radius-xs', useKey: 'library.shape.radiusScale.uses.xs' },
  { token: '--radius-sm', useKey: 'library.shape.radiusScale.uses.sm' },
  { token: '--radius-md', useKey: 'library.shape.radiusScale.uses.md' },
  { token: '--radius-lg', useKey: 'library.shape.radiusScale.uses.lg' },
  { token: '--radius-xl', useKey: 'library.shape.radiusScale.uses.xl' },
  { token: '--radius-2xl', useKey: 'library.shape.radiusScale.uses.twoXl' },
  { token: '--radius-full', useKey: 'library.shape.radiusScale.uses.full' },
] as const;

export const RadiusScaleDemo = () => {
  const { ts } = useI18n();

  return (
    <ul class={styles.grid}>
      <For each={RADII}>{(radius) => <RadiusTile token={radius.token} use={ts(radius.useKey)} />}</For>
    </ul>
  );
};
