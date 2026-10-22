import type { financeEn } from '../../i18n/library/finance';
import { ContributionBarDemo } from '../demos/finance/ContributionBarDemo';
import { DataStateDemo } from '../demos/finance/DataStateDemo';
import { DirectionBadgeDemo } from '../demos/finance/DirectionBadgeDemo';
import { EnvironmentBarDemo } from '../demos/finance/EnvironmentBarDemo';
import { InstrumentLabelDemo } from '../demos/finance/InstrumentLabelDemo';
import { MoneyDemo } from '../demos/finance/MoneyDemo';
import { MoneyPrivacyDemo } from '../demos/finance/MoneyPrivacyDemo';
import { NewsItemDemo } from '../demos/finance/NewsItemDemo';
import { PriceChangeDemo } from '../demos/finance/PriceChangeDemo';
import { RangeBandChartDemo } from '../demos/finance/RangeBandChartDemo';
import { ValueShiftDemo } from '../demos/finance/ValueShiftDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const financeSpecimens: readonly Specimen<SpecimenIdOf<typeof financeEn>>[] = [
  { id: 'money', span: 6, render: () => <MoneyDemo /> },
  { id: 'money-privacy', span: 6, render: () => <MoneyPrivacyDemo /> },
  { id: 'price-change', span: 6, render: () => <PriceChangeDemo /> },
  { id: 'direction-badge', span: 6, render: () => <DirectionBadgeDemo /> },
  { id: 'instrument-label', span: 6, render: () => <InstrumentLabelDemo /> },
  { id: 'value-shift', span: 6, render: () => <ValueShiftDemo /> },
  { id: 'contribution-bar', span: 6, render: () => <ContributionBarDemo /> },
  { id: 'data-state', span: 6, render: () => <DataStateDemo /> },
  { id: 'environment-bar', span: 12, render: () => <EnvironmentBarDemo /> },
  { id: 'news-item', span: 6, render: () => <NewsItemDemo /> },
  { id: 'range-band-chart', span: 12, render: () => <RangeBandChartDemo /> },
];
