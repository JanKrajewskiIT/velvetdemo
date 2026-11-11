import { useI18n } from '@jankrajewskiit/i18n';
import type { AvatarStatus, BadgeVariant, GlyphSize } from '@jankrajewskiit/ui';
import { Avatar, AvatarGroup, Badge, CATEGORY_TONES, Glyph, Icon, Kbd, Tag, TONES } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import type { displayEn } from '../../i18n/library/display';
import { CaptionedRow } from '../demos/display/CaptionedRow';
import { ListItemDemo } from '../demos/display/ListItemDemo';
import { MarkdownDemo } from '../demos/display/MarkdownDemo';
import { MarkdownEditorDemo } from '../demos/display/MarkdownEditorDemo';
import { QrCodeDemo } from '../demos/display/QrCodeDemo';
import { TagInteractionDemo } from '../demos/display/TagInteractionDemo';
import { WatermarkDemo } from '../demos/display/WatermarkDemo';
import { RatingReviewsDemo } from '../demos/selection/RatingReviewsDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './display.module.css';

const BADGE_VARIANTS: readonly BadgeVariant[] = ['soft', 'solid', 'outline'];
const AVATAR_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;
const GLYPH_SIZES: readonly GlyphSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];
const TEAM = ['Maria Nowak', 'Tomasz Wrobel', 'Anna Kowalska', 'Piotr Zielinski', 'Ewa Maj', 'Jakub Lis'] as const;

export const displaySpecimens: readonly Specimen<SpecimenIdOf<typeof displayEn>>[] = [
  {
    id: 'display-list-item',
    span: 6,
    render: () => <ListItemDemo />,
  },
  {
    id: 'display-rating-summary',
    span: 6,
    render: () => <RatingReviewsDemo />,
  },
  {
    id: 'display-badge',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
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
          <CaptionedRow caption={t('library.display.specimens.display-badge.captionDot')}>
            <Badge tone="success" dot>
              {t('library.display.specimens.display-badge.online')}
            </Badge>
            <Badge tone="danger" dot pulse>
              {t('library.display.specimens.display-badge.live')}
            </Badge>
            <Badge tone="info" icon="sparkles">
              {t('library.display.specimens.display-badge.new')}
            </Badge>
            <Badge tone="brand" size="sm">
              {t('library.display.specimens.display-badge.small')}
            </Badge>
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'display-tag',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.display.specimens.display-tag.captionVariants')}>
            <Tag>{t('library.display.specimens.display-tag.outline')}</Tag>
            <Tag variant="soft" tone="success">
              {t('library.display.specimens.display-tag.soft')}
            </Tag>
            <Tag variant="dashed">{t('library.display.specimens.display-tag.dashed')}</Tag>
            <Tag variant="soft" tone="brand" shape="pill">
              {t('library.display.specimens.display-tag.pill')}
            </Tag>
            <Tag size="sm" icon="tag">
              {t('library.display.specimens.display-tag.small')}
            </Tag>
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-tag.captionTones')}>
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
      );
    },
  },
  {
    id: 'display-avatar',
    span: 8,
    render: () => {
      const { t } = useI18n();
      const presence: readonly { name: string; status: AvatarStatus; label: string }[] = [
        { name: 'Maria Nowak', status: 'online', label: t('library.display.specimens.display-avatar.presenceOnline') },
        { name: 'Tomasz Wrobel', status: 'away', label: t('library.display.specimens.display-avatar.presenceAway') },
        { name: 'Anna Kowalska', status: 'busy', label: t('library.display.specimens.display-avatar.presenceBusy') },
        {
          name: 'Piotr Zielinski',
          status: 'offline',
          label: t('library.display.specimens.display-avatar.presenceOffline'),
        },
      ];
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.display.specimens.display-avatar.captionSizes')}>
            <For each={AVATAR_SIZES}>{(size) => <Avatar name="Maria Nowak" size={size} />}</For>
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-avatar.captionTones')}>
            <Avatar name="Maria Nowak" />
            <Avatar name="Maria Nowak" tone="neutral" />
            <For each={TEAM}>{(name) => <Avatar name={name} color="auto" />}</For>
            <Avatar name={t('library.display.specimens.display-avatar.unassigned')} tone="neutral">
              <Glyph name="user" />
            </Avatar>
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-avatar.captionPresence')}>
            <For each={presence}>
              {(person) => (
                <span class={styles.person}>
                  <Avatar name={person.name} color="auto" status={person.status} />
                  <span class={styles.personText}>
                    <span class={styles.personName}>{person.name}</span>
                    <span class={styles.personStatus}>{person.label}</span>
                  </span>
                </span>
              )}
            </For>
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-avatar.captionGroup')}>
            <AvatarGroup role="group" aria-label={t('library.display.specimens.display-avatar.designTeam')}>
              <For each={TEAM.slice(0, 4)}>{(name) => <Avatar name={name} color="auto" />}</For>
              <Avatar initials="+2" tone="neutral" />
            </AvatarGroup>
            <AvatarGroup role="group" aria-label={t('library.display.specimens.display-avatar.reviewers')}>
              <For each={TEAM.slice(2, 5)}>{(name) => <Avatar name={name} color="auto" size="sm" />}</For>
            </AvatarGroup>
          </CaptionedRow>
        </div>
      );
    },
  },
  {
    id: 'display-kbd',
    span: 4,
    render: () => {
      const { t } = useI18n();
      const shortcuts: readonly { action: string; keys: string }[] = [
        { action: t('library.display.specimens.display-kbd.openSearch'), keys: 'mod+k' },
        { action: t('library.display.specimens.display-kbd.saveChanges'), keys: 'mod+s' },
        { action: t('library.display.specimens.display-kbd.moveSelection'), keys: 'shift+down' },
        { action: t('library.display.specimens.display-kbd.closeDialog'), keys: 'esc' },
      ];
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.display.specimens.display-kbd.captionKeys')}>
            <Kbd>Esc</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd keys="mod+k" />
            <Kbd keys="shift+enter" size="sm" />
          </CaptionedRow>
          <dl class={styles.shortcuts}>
            <For each={shortcuts}>
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
      );
    },
  },
  {
    id: 'display-icons',
    span: 4,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <CaptionedRow caption={t('library.display.specimens.display-icons.captionGlyphSizes')}>
            <For each={GLYPH_SIZES}>{(size) => <Glyph name="star" size={size} />}</For>
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-icons.captionIconSize')}>
            <Icon name="bell" size={32} strokeWidth={1.5} />
            <Icon name="bell" size={24} />
            <Icon name="bell" size={14} strokeWidth={2} />
          </CaptionedRow>
          <CaptionedRow caption={t('library.display.specimens.display-icons.captionColour')}>
            <Icon
              name="heart"
              size={24}
              color="var(--fg-brand)"
              label={t('library.display.specimens.display-icons.favourite')}
            />
            <Icon
              name="circle-check"
              size={24}
              color="var(--status-success-fg)"
              label={t('library.display.specimens.display-icons.done')}
            />
          </CaptionedRow>
        </div>
      );
    },
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
