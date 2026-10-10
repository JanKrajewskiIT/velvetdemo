import type { AnalysisSource, AnalysisType, AtsResult } from '@jankrajewskiit/ui';

export const ANALYSIS_STEPS: string[] = ['Reading CV', 'Matching requirements', 'Scoring'];

export const ANALYSIS_SOURCES: AnalysisSource[] = [
  { id: 'cv', label: 'CV', kind: 'cv', detail: 'Anna_Kowalska_CV.pdf, 2 pages' },
  { id: 'job', label: 'Job offer', kind: 'job', detail: 'Senior Frontend Engineer, 1 page' },
  { id: 'notes', label: 'Recruiter notes', kind: 'notes', detail: '3 notes' },
  {
    id: 'call',
    label: 'Interview transcript',
    kind: 'transcript',
    status: 'error',
    error: 'The file is password protected',
  },
];

export const ANALYSIS_TYPES: AnalysisType[] = [
  {
    id: 'match',
    label: 'Candidate and role match',
    description: 'Score the CV against the job offer',
    icon: 'target',
    requires: ['cv', 'job'],
  },
  {
    id: 'summary',
    label: 'Candidate summary',
    description: 'Short profile from all context',
    icon: 'file-text',
    requires: ['cv'],
  },
];

export const ATS_RESULT: AtsResult = {
  score: 78,
  verdict: 'Strong on systems work, light on people leadership',
  summary: 'The CV covers most hard requirements. Management scope is implied rather than stated.',
  categories: [
    { label: 'Skills', score: 88, weight: 3, note: 'React, TypeScript and testing are all present.' },
    { label: 'Experience', score: 72, weight: 2 },
    { label: 'Leadership', score: 45, weight: 1, note: 'No team size or hiring mentioned.' },
  ],
  keywords: { matched: ['React', 'TypeScript', 'Vite'], partial: ['GraphQL'], missing: ['Kubernetes', 'Terraform'] },
  strengths: ['Shipped a design system used by 6 teams', 'Strong testing habits'],
  gaps: ['No people-management evidence'],
  recommendations: [
    {
      severity: 'critical',
      title: 'State your team size',
      message: 'Add how many people you led and for how long.',
      evidence: { quote: 'Coordinated the frontend guild', source: 'CV, page 1' },
    },
    {
      severity: 'warning',
      title: 'Quantify outcomes',
      message: 'Replace "improved performance" with a measured result.',
    },
    { severity: 'suggestion', title: 'Add a short summary', message: 'Two lines at the top help scanners.' },
  ],
};
