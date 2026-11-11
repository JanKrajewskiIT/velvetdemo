export type TypeSampleKey =
  'display' | 'heading' | 'title' | 'body' | 'label' | 'caption' | 'overline' | 'section' | 'button';

export type TypeRole = {
  role: string;
  caps?: boolean;
} & ({ sampleKey: TypeSampleKey } | { sample: string });

export const DISPLAY_ROLES: readonly TypeRole[] = [
  { role: 'display-lg', sampleKey: 'display' },
  { role: 'display-md', sampleKey: 'display' },
  { role: 'display-sm', sampleKey: 'display' },
  { role: 'h1', sampleKey: 'heading' },
  { role: 'h2', sampleKey: 'heading' },
  { role: 'h3', sampleKey: 'heading' },
  { role: 'h4', sampleKey: 'heading' },
  { role: 'h5', sampleKey: 'heading' },
  { role: 'title-lg', sampleKey: 'title' },
  { role: 'title', sampleKey: 'title' },
  { role: 'kpi', sample: '€ 48,210' },
];

export const UI_ROLES: readonly TypeRole[] = [
  { role: 'body-lg', sampleKey: 'body' },
  { role: 'body', sampleKey: 'body' },
  { role: 'body-sm', sampleKey: 'body' },
  { role: 'label', sampleKey: 'label' },
  { role: 'label-sm', sampleKey: 'label' },
  { role: 'caption', sampleKey: 'caption' },
  { role: 'overline', sampleKey: 'overline', caps: true },
  { role: 'section', sampleKey: 'section', caps: true },
  { role: 'button-lg', sampleKey: 'button' },
  { role: 'button', sampleKey: 'button' },
  { role: 'button-sm', sampleKey: 'button' },
  { role: 'code', sample: 'const theme = "dark";' },
  { role: 'kbd', sample: 'Ctrl K' },
  { role: 'micro', sample: '12 · 3/10 · [1]' },
];
