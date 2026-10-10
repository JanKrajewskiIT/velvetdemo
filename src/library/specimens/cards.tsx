import {
  Badge,
  Button,
  Card,
  FeatureCard,
  FlipCard,
  Glyph,
  Grid,
  IconButton,
  ScoreCard,
  Stack,
  Stat,
  StructuredCard,
  Text,
} from '@jankrajewskiit/ui';

import type { cardsEn } from '../../i18n/library/cards';
import { CardVariantsDemo } from '../demos/cards/CardVariantsDemo';
import { MediaBlock } from '../demos/cards/MediaBlock';
import { QuestionCardDemo } from '../demos/cards/QuestionCardDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const cardSpecimens: readonly Specimen<SpecimenIdOf<typeof cardsEn>>[] = [
  {
    id: 'cards-surfaces',
    span: 12,
    render: () => <CardVariantsDemo />,
  },
  {
    id: 'cards-card',
    span: 12,
    render: () => (
      <Grid min={240} gap={4}>
        <Card
          title="Billing"
          description="Manage plan and invoices."
          actions={<IconButton icon="settings" label="Billing settings" variant="ghost" size="sm" />}
          footerAlign="between"
          footer={
            <>
              <Text variant="caption" tone="tertiary">
                Updated today
              </Text>
              <Button size="sm">Save</Button>
            </>
          }
        >
          Your workspace is on the Team plan.
        </Card>
        <Card hoverable tonal tone="teal" accent padding="sm" title="Tonal hover">
          Lift, border and glow follow the tone. Small padding.
        </Card>
        <Card interactive as="button" title="Interactive">
          The whole card is one action, with a focus ring.
        </Card>
        <Card selected padding="lg" title="Selected">
          Brand-tinted state with large padding.
        </Card>
      </Grid>
    ),
  },
  {
    id: 'cards-structured',
    span: 8,
    render: () => (
      <Grid min={240} gap={4}>
        <StructuredCard
          hoverable
          tonal
          tone="violet"
          media={<MediaBlock icon="image" />}
          mediaTag={<Badge variant="solid">Guide</Badge>}
          mediaMeta={
            <>
              <Glyph name="clock" />6 min read
            </>
          }
          title="Designing with tokens"
          meta="Maria Nowak"
          footer={
            <>
              <Text variant="caption" tone="tertiary">
                Design systems
              </Text>
              <Button size="sm" variant="link">
                Read
              </Button>
            </>
          }
        >
          The scrim keeps the overlaid tag and reading time legible on any image.
        </StructuredCard>
        <StructuredCard
          hoverable
          tonal
          tone="teal"
          accent
          title="Project Atlas"
          meta={
            <>
              <Glyph name="clock" />
              Updated 2h ago
            </>
          }
          badge={
            <Badge tone="success" dot>
              Active
            </Badge>
          }
          footerAlign="end"
          footer={<Button size="sm">Open</Button>}
        >
          Header and footer are divided by the same hairline the card uses.
        </StructuredCard>
      </Grid>
    ),
  },
  {
    id: 'cards-flip',
    span: 4,
    render: () => (
      <FlipCard
        align="start"
        tone="info"
        accent
        front={
          <Stack gap={2}>
            <Text variant="h4">What is a closure?</Text>
            <Text variant="caption" tone="tertiary">
              Select to reveal the answer
            </Text>
          </Stack>
        }
        back={<Text variant="body-sm">A function together with the scope it was created in.</Text>}
      />
    ),
  },
  {
    id: 'cards-feature',
    span: 12,
    render: () => (
      <Grid min={240} gap={4}>
        <FeatureCard
          icon="zap"
          title="Fast by default"
          description="Tokens and plain CSS, no runtime styling."
          action={
            <Button variant="link" size="sm">
              Read more
            </Button>
          }
        />
        <FeatureCard
          icon="shield"
          tone="success"
          look="lift"
          title="Accessible"
          description="Keyboard and screen reader parity."
          action={
            <Button variant="link" size="sm">
              Read more
            </Button>
          }
        />
        <FeatureCard
          icon="layers"
          tone="teal"
          layout="inline"
          title="Inline layout"
          description="Icon on the left, compact."
        />
        <FeatureCard
          icon="globe"
          tone="info"
          look="lift"
          layout="inline"
          title="Inline, lifted"
          description="Lifts with a tone glow on hover."
        />
      </Grid>
    ),
  },
  {
    id: 'cards-metrics',
    span: 12,
    render: () => (
      <Stack gap={4}>
        <Grid min={200} gap={4}>
          <Stat label="Revenue" value="€48,290" delta="+12.4%" hint="vs. last month" />
          <Stat accent="teal" label="Time to hire" value="21 d" delta="-3 d" spark={[30, 28, 26, 24, 21]} />
          <Stat label="Churn" value="2.1%" delta="+0.4%" tone="danger" hint="Higher is worse" />
          <Stat
            accent="violet"
            label="Open roles"
            value="34"
            delta="+5"
            tone="neutral"
            spark={[22, 24, 23, 28, 30, 34]}
          />
        </Grid>
        <Grid min={240} gap={4}>
          <ScoreCard
            label="ATS match"
            score={82}
            verdict="Strong match"
            hint="Based on 14 keywords"
            criteria={[
              { label: 'Skills', value: 90 },
              { label: 'Experience', value: 74 },
            ]}
          />
          <ScoreCard
            label="Quiz result"
            score={58}
            verdict="Needs work"
            criteria={[
              { label: 'Accuracy', value: 61 },
              { label: 'Speed', value: 40 },
            ]}
          />
          <ScoreCard label="Health check" score={31} verdict="At risk" />
        </Grid>
      </Stack>
    ),
  },
  {
    id: 'cards-question',
    span: 12,
    render: () => <QuestionCardDemo />,
  },
];
