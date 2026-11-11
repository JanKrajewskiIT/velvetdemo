import { useI18n } from '@jankrajewskiit/i18n';
import {
  Badge,
  Button,
  Card,
  FeatureCard,
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
import { FlipCardsDemo } from '../demos/cards/FlipCardsDemo';
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
    render: () => {
      const { t } = useI18n();
      return (
        <Grid min={240} gap={4}>
          <Card
            title={t('library.cards.specimens.cards-card.billingTitle')}
            description={t('library.cards.specimens.cards-card.billingDescription')}
            actions={
              <IconButton
                icon="settings"
                label={t('library.cards.specimens.cards-card.billingSettings')}
                variant="ghost"
                size="sm"
              />
            }
            footerAlign="between"
            footer={
              <>
                <Text variant="caption" tone="tertiary">
                  {t('library.cards.specimens.cards-card.updatedToday')}
                </Text>
                <Button size="sm">{t('library.cards.specimens.cards-card.save')}</Button>
              </>
            }
          >
            {t('library.cards.specimens.cards-card.billingBody')}
          </Card>
          <Card
            hoverable
            tonal
            tone="teal"
            accent
            padding="sm"
            title={t('library.cards.specimens.cards-card.tonalHoverTitle')}
          >
            {t('library.cards.specimens.cards-card.tonalHoverBody')}
          </Card>
          <Card interactive as="button" title={t('library.cards.specimens.cards-card.interactiveTitle')}>
            {t('library.cards.specimens.cards-card.interactiveBody')}
          </Card>
          <Card selected padding="lg" title={t('library.cards.specimens.cards-card.selectedTitle')}>
            {t('library.cards.specimens.cards-card.selectedBody')}
          </Card>
        </Grid>
      );
    },
  },
  {
    id: 'cards-structured',
    span: 8,
    render: () => {
      const { t } = useI18n();
      return (
        <Grid min={240} gap={4}>
          <StructuredCard
            hoverable
            tonal
            tone="violet"
            media={<MediaBlock icon="image" />}
            mediaTag={<Badge variant="solid">{t('library.cards.specimens.cards-structured.guide')}</Badge>}
            mediaMeta={
              <>
                <Glyph name="clock" />
                {t('library.cards.specimens.cards-structured.readingTime')}
              </>
            }
            title={t('library.cards.specimens.cards-structured.tokensTitle')}
            meta="Maria Nowak"
            footer={
              <>
                <Text variant="caption" tone="tertiary">
                  {t('library.cards.specimens.cards-structured.designSystems')}
                </Text>
                <Button size="sm" variant="link">
                  {t('library.cards.specimens.cards-structured.read')}
                </Button>
              </>
            }
          >
            {t('library.cards.specimens.cards-structured.scrimBody')}
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
                {t('library.cards.specimens.cards-structured.updatedHoursAgo')}
              </>
            }
            badge={
              <Badge tone="success" dot>
                {t('library.cards.specimens.cards-structured.active')}
              </Badge>
            }
            footerAlign="end"
            footer={<Button size="sm">{t('library.cards.specimens.cards-structured.open')}</Button>}
          >
            {t('library.cards.specimens.cards-structured.headerFooterBody')}
          </StructuredCard>
        </Grid>
      );
    },
  },
  {
    id: 'cards-flip',
    span: 12,
    render: () => <FlipCardsDemo />,
  },
  {
    id: 'cards-feature',
    span: 12,
    render: () => {
      const { t } = useI18n();
      return (
        <Grid min={240} gap={4}>
          <FeatureCard
            icon="zap"
            title={t('library.cards.specimens.cards-feature.fastTitle')}
            description={t('library.cards.specimens.cards-feature.fastDescription')}
            action={
              <Button variant="link" size="sm">
                {t('library.cards.specimens.cards-feature.readMore')}
              </Button>
            }
          />
          <FeatureCard
            icon="shield"
            tone="success"
            look="lift"
            title={t('library.cards.specimens.cards-feature.accessibleTitle')}
            description={t('library.cards.specimens.cards-feature.accessibleDescription')}
            action={
              <Button variant="link" size="sm">
                {t('library.cards.specimens.cards-feature.readMore')}
              </Button>
            }
          />
          <FeatureCard
            icon="layers"
            tone="teal"
            layout="inline"
            title={t('library.cards.specimens.cards-feature.inlineTitle')}
            description={t('library.cards.specimens.cards-feature.inlineDescription')}
          />
          <FeatureCard
            icon="globe"
            tone="info"
            look="lift"
            layout="inline"
            title={t('library.cards.specimens.cards-feature.liftedTitle')}
            description={t('library.cards.specimens.cards-feature.liftedDescription')}
          />
        </Grid>
      );
    },
  },
  {
    id: 'cards-metrics',
    span: 12,
    render: () => {
      const { t, ts } = useI18n();
      return (
        <Stack gap={4}>
          <Grid min={200} gap={4}>
            <Stat
              label={t('library.cards.specimens.cards-metrics.revenue')}
              value="€48,290"
              delta="+12.4%"
              hint={t('library.cards.specimens.cards-metrics.vsLastMonth')}
            />
            <Stat
              accent="teal"
              label={t('library.cards.specimens.cards-metrics.timeToHire')}
              value={t('library.cards.specimens.cards-metrics.timeToHireValue')}
              delta={t('library.cards.specimens.cards-metrics.timeToHireDelta')}
              spark={[30, 28, 26, 24, 21]}
            />
            <Stat
              label={t('library.cards.specimens.cards-metrics.churn')}
              value="2.1%"
              delta="+0.4%"
              tone="danger"
              hint={t('library.cards.specimens.cards-metrics.higherIsWorse')}
            />
            <Stat
              accent="violet"
              label={t('library.cards.specimens.cards-metrics.openRoles')}
              value="34"
              delta="+5"
              tone="neutral"
              spark={[22, 24, 23, 28, 30, 34]}
            />
          </Grid>
          <Grid min={240} gap={4}>
            <ScoreCard
              label={t('library.cards.specimens.cards-metrics.atsMatch')}
              score={82}
              verdict={t('library.cards.specimens.cards-metrics.strongMatch')}
              hint={ts('library.cards.specimens.cards-metrics.basedOnKeywords', { count: 14 })}
              criteria={[
                { label: t('library.cards.specimens.cards-metrics.skills'), value: 90 },
                { label: t('library.cards.specimens.cards-metrics.experience'), value: 74 },
              ]}
            />
            <ScoreCard
              label={t('library.cards.specimens.cards-metrics.quizResult')}
              score={58}
              verdict={t('library.cards.specimens.cards-metrics.needsWork')}
              criteria={[
                { label: t('library.cards.specimens.cards-metrics.accuracy'), value: 61 },
                { label: t('library.cards.specimens.cards-metrics.speed'), value: 40 },
              ]}
            />
            <ScoreCard
              label={t('library.cards.specimens.cards-metrics.healthCheck')}
              score={31}
              verdict={t('library.cards.specimens.cards-metrics.atRisk')}
            />
          </Grid>
        </Stack>
      );
    },
  },
  {
    id: 'cards-question',
    span: 12,
    render: () => <QuestionCardDemo />,
  },
];
