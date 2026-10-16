import { useI18n } from '@jankrajewskiit/i18n';
import { Heading, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../styles/cx';
import { SectionHead } from '../SectionHead';
import { ELEVATIONS, FONT_FAMILIES, NEUTRAL_TOKENS, RADII, STATUS_TOKENS, TYPE_ROLES } from './foundationsData';
import styles from './FoundationsSection.module.css';
import { FoundationTile } from './FoundationTile';
import { MotionTile } from './MotionTile';
import { TokenSwatches } from './TokenSwatches';

const NEUTRAL_ITEMS = NEUTRAL_TOKENS.map((token) => ({ label: token.slice(2), token, mono: true }));

const FAMILY_CLASS = { display: styles.display, text: styles.text, mono: styles.mono } as const;

export const FoundationsSection = () => {
  const { ts } = useI18n();
  const statusItems = () =>
    STATUS_TOKENS.map(({ tone, token }) => ({ label: ts(`showcase.foundations.tones.${tone}`), token }));

  return (
    <section class={styles.section} id="foundations">
      <div class={styles.container}>
        <SectionHead overline={ts('showcase.foundations.overline')} title={ts('showcase.foundations.title')}>
          {ts('showcase.foundations.lead')}
        </SectionHead>
        <div class={styles.grid}>
          <FoundationTile
            title={ts('showcase.foundations.typography.title')}
            span={12}
            meta={ts('showcase.foundations.typography.meta')}
          >
            <div class={styles.families}>
              <For each={FONT_FAMILIES}>
                {(family) => (
                  <div class={cx(styles.family, FAMILY_CLASS[family.id])}>
                    <Text variant="overline" tone="tertiary">
                      {ts(`showcase.foundations.families.${family.id}.label`)}
                    </Text>
                    <span class={styles.aa} aria-hidden="true">
                      Aa
                    </span>
                    <Text as="span" variant="label" class={styles.familyName}>
                      {family.name}
                    </Text>
                    <Text as="p" variant="body-sm" tone="secondary" class={styles.familyDescription}>
                      {ts(`showcase.foundations.families.${family.id}.description`)}
                    </Text>
                  </div>
                )}
              </For>
            </div>
          </FoundationTile>
          <FoundationTile title={ts('showcase.foundations.typeRoles.title')} span={7}>
            <div class={styles.scale}>
              <For each={TYPE_ROLES}>
                {(role) => (
                  <div>
                    <Text as="span" variant="code" tone="tertiary">
                      {role}
                    </Text>
                    <Text as="span" variant={role} class={styles.roleSample}>
                      {ts(`showcase.foundations.roles.${role}`)} — {ts('showcase.foundations.typeRoles.sample')}
                    </Text>
                  </div>
                )}
              </For>
            </div>
          </FoundationTile>
          <FoundationTile title={ts('showcase.foundations.status.title')} span={5}>
            <TokenSwatches items={statusItems()} />
            <Heading level={4} variant="h4" class={styles.subtitle}>
              {ts('showcase.foundations.status.surfacesAndInk')}
            </Heading>
            <TokenSwatches items={NEUTRAL_ITEMS} />
          </FoundationTile>
          <FoundationTile title={ts('showcase.foundations.shape.title')} span={6} meta="--radius-*">
            <div class={styles.radii}>
              <For each={RADII}>
                {(radius) => (
                  <div>
                    <i style={{ 'border-radius': `var(--radius-${radius})` }} />
                    <Text as="span" variant="code" tone="tertiary">
                      {radius}
                    </Text>
                  </div>
                )}
              </For>
            </div>
          </FoundationTile>
          <FoundationTile
            title={ts('showcase.foundations.motion.title')}
            span={6}
            meta={ts('showcase.foundations.motion.meta')}
          >
            <MotionTile />
          </FoundationTile>
          <FoundationTile title={ts('showcase.foundations.depth.title')} span={12} meta="--elevation-*">
            <div class={styles.elevations}>
              <For each={ELEVATIONS}>
                {(elevation) => (
                  <div style={{ 'box-shadow': `var(--elevation-${elevation})` }}>
                    <Text as="span" variant="code" tone="tertiary">
                      {elevation}
                    </Text>
                  </div>
                )}
              </For>
            </div>
          </FoundationTile>
        </div>
      </div>
    </section>
  );
};
