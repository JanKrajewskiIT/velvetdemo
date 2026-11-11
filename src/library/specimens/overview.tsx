import { useI18n } from '@jankrajewskiit/i18n';
import {
  Badge,
  Button,
  Card,
  Control,
  ControlInput,
  Count,
  Dot,
  FeatureCard,
  Field,
  Glyph,
  IconTile,
  Marker,
  Meter,
  Rail,
  RailItem,
  Segmented,
  SegmentedItem,
  Stat,
  StructuredCard,
  Surface,
  Tag,
  Text,
} from '@jankrajewskiit/ui';

import type { overviewEn } from '../../i18n/library/overview';
import { CompositionRow } from '../demos/overview/CompositionRow';
import { ContainerTile } from '../demos/overview/ContainerTile';
import { TokenLayersDemo } from '../demos/overview/TokenLayersDemo';
import { TokenRulesDemo } from '../demos/overview/TokenRulesDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './overview.module.css';

export const overviewSpecimens: readonly Specimen<SpecimenIdOf<typeof overviewEn>>[] = [
  {
    id: 'overview-token-layers',
    span: 12,
    render: () => <TokenLayersDemo />,
  },
  {
    id: 'overview-token-rules',
    span: 12,
    render: () => <TokenRulesDemo />,
  },
  {
    id: 'overview-structure-atoms',
    span: 6,
    render: () => {
      const { t } = useI18n();
      const key = (name: string) => t(`library.overview.specimens.overview-structure-atoms.${name}`);
      return (
        <ul class={styles.rows}>
          <CompositionRow need={key('needContainer')} compose="Surface · Card" avoid={key('avoidContainer')}>
            <Card
              class={styles.fill}
              padding="sm"
              title={key('releaseNotes')}
              description={key('updatedToday')}
              footer={
                <Button size="xs" variant="ghost">
                  {key('open')}
                </Button>
              }
            >
              <Text variant="body-sm">{key('draftNote')}</Text>
            </Card>
          </CompositionRow>
          <CompositionRow need={key('needField')} compose="Field + Control" avoid={key('avoidField')}>
            <Field class={styles.fill} label={key('emailLabel')} hint={key('invoiceHint')}>
              {(control) => (
                <Control iconLeft="mail">
                  <ControlInput id={control.id} aria-describedby={control.describedBy} placeholder="you@example.com" />
                </Control>
              )}
            </Field>
          </CompositionRow>
          <CompositionRow need={key('needSteps')} compose="Marker + Rail" avoid={key('avoidSteps')}>
            <Rail size="sm" class={styles.fill} aria-label={key('orderProgress')}>
              <RailItem state="done">
                <Marker size="sm" appearance="solid" tone="success" gap>
                  <Glyph name="check" />
                </Marker>{' '}
                {key('orderPlaced')}
              </RailItem>
              <RailItem state="active">
                <Marker size="sm" appearance="solid" ring gap>
                  2
                </Marker>{' '}
                {key('packing')}
              </RailItem>
              <RailItem state="dashed">
                <Marker size="sm" appearance="outline" gap>
                  3
                </Marker>{' '}
                {key('delivery')}
              </RailItem>
            </Rail>
          </CompositionRow>
          <CompositionRow need={key('needGlyph')} compose="IconTile" avoid={key('avoidGlyph')}>
            <IconTile icon="bell" tone="info" />
            <IconTile icon="check" tone="success" />
            <IconTile icon="triangle-alert" tone="warning" />
            <IconTile icon="sparkles" tone="brand" shape="circle" />
          </CompositionRow>
        </ul>
      );
    },
  },
  {
    id: 'overview-status-atoms',
    span: 6,
    render: () => {
      const { t } = useI18n();
      const key = (name: string) => t(`library.overview.specimens.overview-status-atoms.${name}`);
      return (
        <ul class={styles.rows}>
          <CompositionRow
            need={key('needChip')}
            compose="Badge · Tag (soft · dashed · pill · tone)"
            avoid={key('avoidChip')}
          >
            <Badge tone="success" dot>
              {key('paid')}
            </Badge>
            <Badge tone="warning" variant="outline">
              {key('dueSoon')}
            </Badge>
            <Tag variant="soft" tone="brand">
              {key('design')}
            </Tag>
            <Tag variant="dashed">{key('addLabel')}</Tag>
          </CompositionRow>
          <CompositionRow need={key('needCount')} compose="Count · Dot" avoid={key('avoidCount')}>
            <Count value={4} label={t('library.overview.specimens.overview-status-atoms.unread', { count: 4 })} />
            <Count value={128} tone="danger" label={key('moreAlerts')} />
            <Dot tone="success" label={key('online')} />
            <Dot tone="danger" pulse label={key('offline')} />
          </CompositionRow>
          <CompositionRow need={key('needSwitch')} compose="Segmented" avoid={key('avoidSwitch')}>
            <Segmented size="sm" role="radiogroup" aria-label={key('density')}>
              <SegmentedItem role="radio" selected>
                {key('compact')}
              </SegmentedItem>
              <SegmentedItem role="radio" selected={false}>
                {key('comfortable')}
              </SegmentedItem>
            </Segmented>
          </CompositionRow>
          <CompositionRow need={key('needBar')} compose="Meter" avoid={key('avoidBar')}>
            <div class={styles.fill}>
              <Meter value={64} label={key('storageUsed')} />
            </div>
            <div class={styles.fill}>
              <Meter value={3} max={4} steps={4} tone="success" label={key('passwordStrength')} />
            </div>
          </CompositionRow>
        </ul>
      );
    },
  },
  {
    id: 'overview-containers',
    span: 12,
    render: () => {
      const { t } = useI18n();
      const key = (name: string) => t(`library.overview.specimens.overview-containers.${name}`);
      return (
        <ul class={styles.tiles}>
          <ContainerTile name="Surface" purpose={key('purposeSurface')}>
            <Surface padding="md">
              <div class={styles.stack}>
                <Text variant="label" as="p">
                  {key('paintOnly')}
                </Text>
                <Text variant="caption" tone="secondary" as="p">
                  {key('noRegions')}
                </Text>
              </div>
            </Surface>
          </ContainerTile>
          <ContainerTile name="Card" purpose={key('purposeCard')}>
            <Card
              padding="sm"
              title="Card"
              description={key('headerBodyFooter')}
              footer={
                <Button size="xs" variant="ghost">
                  {key('action')}
                </Button>
              }
            >
              <Text variant="body-sm">{key('regionPadding')}</Text>
            </Card>
          </ContainerTile>
          <ContainerTile name="FeatureCard" purpose={key('purposeFeature')}>
            <FeatureCard icon="sparkles" title={key('quietDefaults')} description={key('quietDefaultsDesc')} />
          </ContainerTile>
          <ContainerTile name="Stat" purpose={key('purposeStat')}>
            <Stat label={key('monthlyRevenue')} value="€ 48,210" delta="+4.2%" hint={key('hintLastMonth')} />
          </ContainerTile>
          <ContainerTile name="StructuredCard" purpose={key('purposeStructured')}>
            <StructuredCard
              title={key('brandReview')}
              meta={key('slides')}
              badge={
                <Badge size="sm" tone="info">
                  {key('draft')}
                </Badge>
              }
              footer={
                <Text variant="caption" tone="secondary">
                  {key('editedDaysAgo')}
                </Text>
              }
            >
              <Text variant="body-sm">{key('typographyNotes')}</Text>
            </StructuredCard>
          </ContainerTile>
          <ContainerTile name="Surface · overlay · dialog" purpose={key('purposeFloating')}>
            <div class={styles.floating}>
              <Surface variant="overlay" padding="sm">
                <Text variant="label" as="p">
                  {key('popoverPanel')}
                </Text>
              </Surface>
              <Surface variant="dialog" padding="sm">
                <Text variant="label" as="p">
                  {key('dialogPanel')}
                </Text>
              </Surface>
            </div>
          </ContainerTile>
        </ul>
      );
    },
  },
];
