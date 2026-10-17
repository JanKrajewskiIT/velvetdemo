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
    render: () => (
      <ul class={styles.rows}>
        <CompositionRow
          need="Container with background, border, radius, shadow"
          compose="Surface · Card"
          avoid="own background + border + box-shadow"
        >
          <Card
            class={styles.fill}
            padding="sm"
            title="Release notes"
            description="Updated today"
            footer={
              <Button size="xs" variant="ghost">
                Open
              </Button>
            }
          >
            <Text variant="body-sm">Draft for the autumn release.</Text>
          </Card>
        </CompositionRow>
        <CompositionRow
          need="Bordered input shell with label and hint"
          compose="Field + Control"
          avoid="custom input box, own focus ring"
        >
          <Field class={styles.fill} label="Email" hint="Used for invoices only.">
            {(control) => (
              <Control iconLeft="mail">
                <ControlInput id={control.id} aria-describedby={control.describedBy} placeholder="you@example.com" />
              </Control>
            )}
          </Field>
        </CompositionRow>
        <CompositionRow
          need="Round step badge joined by a connector"
          compose="Marker + Rail"
          avoid="28px circle with border + ::before line"
        >
          <Rail size="sm" class={styles.fill} aria-label="Order progress">
            <RailItem state="done">
              <Marker size="sm" appearance="solid" tone="success" gap>
                <Glyph name="check" />
              </Marker>{' '}
              Order placed
            </RailItem>
            <RailItem state="active">
              <Marker size="sm" appearance="solid" ring gap>
                2
              </Marker>{' '}
              Packing
            </RailItem>
            <RailItem state="dashed">
              <Marker size="sm" appearance="outline" gap>
                3
              </Marker>{' '}
              Delivery
            </RailItem>
          </Rail>
        </CompositionRow>
        <CompositionRow need="Glyph in a tinted box" compose="IconTile" avoid="grid + width/height + tone background">
          <IconTile icon="bell" tone="info" />
          <IconTile icon="check" tone="success" />
          <IconTile icon="triangle-alert" tone="warning" />
          <IconTile icon="sparkles" tone="brand" shape="circle" />
        </CompositionRow>
      </ul>
    ),
  },
  {
    id: 'overview-status-atoms',
    span: 6,
    render: () => (
      <ul class={styles.rows}>
        <CompositionRow
          need="Status or category chip"
          compose="Badge · Tag (soft · dashed · pill · tone)"
          avoid="tinted pill with own tones"
        >
          <Badge tone="success" dot>
            Paid
          </Badge>
          <Badge tone="warning" variant="outline">
            Due soon
          </Badge>
          <Tag variant="soft" tone="brand">
            Design
          </Tag>
          <Tag variant="dashed">Add label</Tag>
        </CompositionRow>
        <CompositionRow need="Numeric pill or status point" compose="Count · Dot" avoid="min-width pill · 6px circle">
          <Count value={4} label="4 unread" />
          <Count value={128} tone="danger" label="More than 99 alerts" />
          <Dot tone="success" label="Online" />
          <Dot tone="danger" pulse label="Offline" />
        </CompositionRow>
        <CompositionRow need="One-of-N switch in a track" compose="Segmented" avoid="sunken track + raised thumb">
          <Segmented size="sm" role="radiogroup" aria-label="Density">
            <SegmentedItem role="radio" selected>
              Compact
            </SegmentedItem>
            <SegmentedItem role="radio" selected={false}>
              Comfortable
            </SegmentedItem>
          </Segmented>
        </CompositionRow>
        <CompositionRow need="Bar for a known quantity" compose="Meter" avoid="track + fill span">
          <div class={styles.fill}>
            <Meter value={64} label="Storage used" />
          </div>
          <div class={styles.fill}>
            <Meter value={3} max={4} steps={4} tone="success" label="Password strength" />
          </div>
        </CompositionRow>
      </ul>
    ),
  },
  {
    id: 'overview-containers',
    span: 12,
    render: () => (
      <ul class={styles.tiles}>
        <ContainerTile name="Surface" purpose="Paints background, border, radius and elevation">
          <Surface padding="md">
            <div class={styles.stack}>
              <Text variant="label" as="p">
                Paint only
              </Text>
              <Text variant="caption" tone="secondary" as="p">
                No regions, no layout opinions.
              </Text>
            </div>
          </Surface>
        </ContainerTile>
        <ContainerTile name="Card" purpose="Surface plus header, body and footer regions">
          <Card
            padding="sm"
            title="Card"
            description="Header, body, footer"
            footer={
              <Button size="xs" variant="ghost">
                Action
              </Button>
            }
          >
            <Text variant="body-sm">Region padding comes from the card.</Text>
          </Card>
        </ContainerTile>
        <ContainerTile name="FeatureCard" purpose="Card with a tone tile, copy and one action">
          <FeatureCard icon="sparkles" title="Quiet defaults" description="Tone, tile and spacing preset." />
        </ContainerTile>
        <ContainerTile name="Stat" purpose="Card for one number, its delta and a hint">
          <Stat label="Monthly revenue" value="€ 48,210" delta="+4.2%" hint="Against last month" />
        </ContainerTile>
        <ContainerTile name="StructuredCard" purpose="Hairline-divided media, header, body and footer">
          <StructuredCard
            title="Brand review"
            meta="12 slides"
            badge={
              <Badge size="sm" tone="info">
                Draft
              </Badge>
            }
            footer={
              <Text variant="caption" tone="secondary">
                Edited 2 days ago
              </Text>
            }
          >
            <Text variant="body-sm">Typography and colour notes.</Text>
          </StructuredCard>
        </ContainerTile>
        <ContainerTile name="Surface · overlay · dialog" purpose="Floating panels for popovers, menus and dialogs">
          <div class={styles.floating}>
            <Surface variant="overlay" padding="sm">
              <Text variant="label" as="p">
                Popover panel
              </Text>
            </Surface>
            <Surface variant="dialog" padding="sm">
              <Text variant="label" as="p">
                Dialog panel
              </Text>
            </Surface>
          </div>
        </ContainerTile>
      </ul>
    ),
  },
];
