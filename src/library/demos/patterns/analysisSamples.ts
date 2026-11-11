import type { useI18n } from '@jankrajewskiit/i18n';
import type { AnalysisSource, AnalysisType, ReportResult } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const createAnalysisSteps = (ts: Ts): string[] => [
  ts('library.patterns.analysisFlow.steps.reading'),
  ts('library.patterns.analysisFlow.steps.matching'),
  ts('library.patterns.analysisFlow.steps.scoring'),
];

export const createAnalysisSources = (ts: Ts): AnalysisSource[] => [
  {
    id: 'cv',
    label: ts('library.patterns.analysisFlow.sources.cv'),
    kind: 'document',
    detail: ts('library.patterns.analysisFlow.sources.cvDetail'),
  },
  {
    id: 'job',
    label: ts('library.patterns.analysisFlow.sources.job'),
    kind: 'document',
    detail: ts('library.patterns.analysisFlow.sources.jobDetail'),
  },
  {
    id: 'notes',
    label: ts('library.patterns.analysisFlow.sources.notes'),
    kind: 'notes',
    detail: ts('library.patterns.analysisFlow.sources.notesDetail'),
  },
  {
    id: 'call',
    label: ts('library.patterns.analysisFlow.sources.call'),
    kind: 'transcript',
    status: 'error',
    error: ts('library.patterns.analysisFlow.sources.callError'),
  },
];

export const createAnalysisTypes = (ts: Ts): AnalysisType[] => [
  {
    id: 'match',
    label: ts('library.patterns.analysisFlow.types.match.label'),
    description: ts('library.patterns.analysisFlow.types.match.description'),
    icon: 'target',
    requires: ['cv', 'job'],
  },
  {
    id: 'summary',
    label: ts('library.patterns.analysisFlow.types.summary.label'),
    description: ts('library.patterns.analysisFlow.types.summary.description'),
    icon: 'file-text',
    requires: ['cv'],
  },
];

export const createReportResult = (ts: Ts): ReportResult => ({
  score: 78,
  verdict: ts('library.patterns.analysisFlow.report.verdict'),
  summary: ts('library.patterns.analysisFlow.report.summary'),
  categories: [
    {
      label: ts('library.patterns.analysisFlow.report.skills'),
      score: 88,
      weight: 3,
      note: ts('library.patterns.analysisFlow.report.skillsNote'),
    },
    { label: ts('library.patterns.analysisFlow.report.experience'), score: 72, weight: 2 },
    {
      label: ts('library.patterns.analysisFlow.report.leadership'),
      score: 45,
      weight: 1,
      note: ts('library.patterns.analysisFlow.report.leadershipNote'),
    },
  ],
  keywords: { matched: ['React', 'TypeScript', 'Vite'], partial: ['GraphQL'], missing: ['Kubernetes', 'Terraform'] },
  strengths: [
    ts('library.patterns.analysisFlow.report.strengthShipped'),
    ts('library.patterns.analysisFlow.report.strengthTesting'),
  ],
  gaps: [ts('library.patterns.analysisFlow.report.gapManagement')],
  recommendations: [
    {
      severity: 'critical',
      title: ts('library.patterns.analysisFlow.report.teamSizeTitle'),
      message: ts('library.patterns.analysisFlow.report.teamSizeMessage'),
      evidence: {
        quote: 'Coordinated the frontend guild',
        source: ts('library.patterns.analysisFlow.report.evidenceSource'),
      },
    },
    {
      severity: 'warning',
      title: ts('library.patterns.analysisFlow.report.outcomesTitle'),
      message: ts('library.patterns.analysisFlow.report.outcomesMessage'),
    },
    {
      severity: 'suggestion',
      title: ts('library.patterns.analysisFlow.report.summaryTitle'),
      message: ts('library.patterns.analysisFlow.report.summaryMessage'),
    },
  ],
});
