import type { financeEn } from '../../i18n/library/finance';
import { CodeLabelDemo } from '../demos/finance/CodeLabelDemo';
import { DataStateDemo } from '../demos/finance/DataStateDemo';
import { DirectionBadgeDemo } from '../demos/finance/DirectionBadgeDemo';
import { EnvironmentBarDemo } from '../demos/finance/EnvironmentBarDemo';
import { MoneyPrivacyDemo } from '../demos/finance/MoneyPrivacyDemo';
import { NewsItemDemo } from '../demos/finance/NewsItemDemo';
import { RangeBandChartDemo } from '../demos/finance/RangeBandChartDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const financeSpecimens: readonly Specimen<SpecimenIdOf<typeof financeEn>>[] = [
  { id: 'money-privacy', span: 6, render: () => <MoneyPrivacyDemo /> },
  { id: 'direction-badge', span: 6, render: () => <DirectionBadgeDemo /> },
  { id: 'instrument-label', span: 6, render: () => <CodeLabelDemo /> },
  { id: 'data-state', span: 6, render: () => <DataStateDemo /> },
  { id: 'environment-bar', span: 12, render: () => <EnvironmentBarDemo /> },
  { id: 'news-item', span: 12, render: () => <NewsItemDemo /> },
  { id: 'range-band-chart', span: 12, render: () => <RangeBandChartDemo /> },
];
