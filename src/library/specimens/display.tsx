import type { AvatarStatus, BadgeVariant, GlyphSize } from '@jankrajewskiit/ui';
import { Avatar, AvatarGroup, Badge, CATEGORY_TONES, Glyph, Icon, Kbd, Tag, TONES } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import type { displayEn } from '../../i18n/library/display';
import { CaptionedRow } from '../demos/display/CaptionedRow';
import { MarkdownDemo } from '../demos/display/MarkdownDemo';
import { MarkdownEditorDemo } from '../demos/display/MarkdownEditorDemo';
import { QrCodeDemo } from '../demos/display/QrCodeDemo';
import { TagInteractionDemo } from '../demos/display/TagInteractionDemo';
import { WatermarkDemo } from '../demos/display/WatermarkDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './display.module.css';

const BADGE_VARIANTS: readonly BadgeVariant[] = ['soft', 'solid', 'outline'];
const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const GLYPH_SIZES: readonly GlyphSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const TEAM = ['Maria Nowak', 'Tomasz Wrobel', 'Anna Kowalska', 'Piotr Zielinski', 'Ewa Maj', 'Jakub Lis'] as const;
const PRESENCE: readonly { name: string; status: AvatarStatus }[] = [
  { name: 'Maria Nowak', status: 'online' },
  { name: 'Tomasz Wrobel', status: 'away' },
  { name: 'Anna Kowalska', status: 'busy' },
  { name: 'Piotr Zielinski', status: 'offline' },
];
const SHORTCUTS = [
  { action: 'Open search', keys: 'mod+k' },
  { action: 'Save changes', keys: 'mod+s' },
  { action: 'Move selection', keys: 'shift+down' },
  { action: 'Close dialog', keys: 'esc' },
] as const;

export const displaySpecimens: readonly Specimen<SpecimenIdOf<typeof displayEn>>[] = [
  {
    id: 'display-badge',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <For each={BADGE_VARIANTS}>
          {(variant) => (
            <CaptionedRow caption={variant}>
              <For each={TONES}>
                {(tone) => (
                  <Badge tone={tone} variant={variant}>
                    {tone}
                  </Badge>
                )}
              </For>
            </CaptionedRow>
          )}
        </For>
        <CaptionedRow caption="Dot, pulse, icon and size">
          <Badge tone="success" dot>
            Online
          </Badge>
          <Badge tone="danger" dot pulse>
            Live
          </Badge>
          <Badge tone="info" icon="sparkles">
            New
          </Badge>
          <Badge tone="brand" size="sm">
            Small
          </Badge>
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'display-tag',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Variants and shape">
          <Tag>Outline</Tag>
          <Tag variant="soft" tone="success">
            Soft
          </Tag>
          <Tag variant="dashed">Dashed</Tag>
          <Tag variant="soft" tone="brand" shape="pill">
            Pill
          </Tag>
          <Tag size="sm" icon="tag">
            Small
          </Tag>
        </CaptionedRow>
        <CaptionedRow caption="Tones">
          <For each={[...TONES, ...CATEGORY_TONES]}>
            {(tone) => (
              <Tag variant="soft" tone={tone}>
                {tone}
              </Tag>
            )}
          </For>
        </CaptionedRow>
        <TagInteractionDemo />
      </div>
    ),
  },
  {
    id: 'display-avatar',
    span: 8,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Sizes">
          <For each={AVATAR_SIZES}>{(size) => <Avatar name="Maria Nowak" size={size} />}</For>
        </CaptionedRow>
        <CaptionedRow caption="Tones, auto colour and custom content">
          <Avatar name="Maria Nowak" />
          <Avatar name="Maria Nowak" tone="neutral" />
          <For each={TEAM}>{(name) => <Avatar name={name} color="auto" />}</For>
          <Avatar name="Unassigned" tone="neutral">
            <Glyph name="user" />
          </Avatar>
        </CaptionedRow>
        <CaptionedRow caption="Presence">
          <For each={PRESENCE}>
            {(person) => (
              <span class={styles.person}>
                <Avatar name={person.name} color="auto" status={person.status} />
                <span class={styles.personText}>
                  <span class={styles.personName}>{person.name}</span>
                  <span class={styles.personStatus}>{person.status}</span>
                </span>
              </span>
            )}
          </For>
        </CaptionedRow>
        <CaptionedRow caption="Group">
          <AvatarGroup role="group" aria-label="Design team">
            <For each={TEAM.slice(0, 4)}>{(name) => <Avatar name={name} color="auto" />}</For>
            <Avatar initials="+2" tone="neutral" />
          </AvatarGroup>
          <AvatarGroup role="group" aria-label="Reviewers">
            <For each={TEAM.slice(2, 5)}>{(name) => <Avatar name={name} color="auto" size="sm" />}</For>
          </AvatarGroup>
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'display-kbd',
    span: 4,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Keys">
          <Kbd>Esc</Kbd>
          <Kbd>Tab</Kbd>
          <Kbd keys="mod+k" />
          <Kbd keys="shift+enter" size="sm" />
        </CaptionedRow>
        <dl class={styles.shortcuts}>
          <For each={SHORTCUTS}>
            {(shortcut) => (
              <div class={styles.shortcut}>
                <dt>{shortcut.action}</dt>
                <dd>
                  <Kbd keys={shortcut.keys} plain />
                </dd>
              </div>
            )}
          </For>
        </dl>
      </div>
    ),
  },
  {
    id: 'display-icons',
    span: 4,
    render: () => (
      <div class={styles.stack}>
        <CaptionedRow caption="Glyph sizes">
          <For each={GLYPH_SIZES}>{(size) => <Glyph name="star" size={size} />}</For>
        </CaptionedRow>
        <CaptionedRow caption="Icon size and stroke">
          <Icon name="bell" size={32} strokeWidth={1.5} />
          <Icon name="bell" size={24} />
          <Icon name="bell" size={14} strokeWidth={2} />
        </CaptionedRow>
        <CaptionedRow caption="Colour and label">
          <Icon name="heart" size={24} color="var(--fg-brand)" label="Favourite" />
          <Icon name="circle-check" size={24} color="var(--status-success-fg)" label="Done" />
        </CaptionedRow>
      </div>
    ),
  },
  {
    id: 'display-markdown',
    span: 8,
    render: () => <MarkdownDemo />,
  },
  {
    id: 'display-markdown-editor',
    span: 12,
    render: () => <MarkdownEditorDemo />,
  },
  {
    id: 'display-watermark',
    span: 6,
    render: () => <WatermarkDemo />,
  },
  {
    id: 'display-qr-code',
    span: 6,
    render: () => <QrCodeDemo />,
  },
];
