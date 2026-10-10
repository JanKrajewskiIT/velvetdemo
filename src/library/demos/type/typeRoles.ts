export interface TypeRole {
  role: string;
  sample: string;
  caps?: boolean;
}

export const DISPLAY_ROLES: readonly TypeRole[] = [
  { role: 'display-lg', sample: 'Quietly confident' },
  { role: 'display-md', sample: 'Quietly confident' },
  { role: 'display-sm', sample: 'Quietly confident' },
  { role: 'h1', sample: 'Designed to be read' },
  { role: 'h2', sample: 'Designed to be read' },
  { role: 'h3', sample: 'Designed to be read' },
  { role: 'h4', sample: 'Designed to be read' },
  { role: 'h5', sample: 'Designed to be read' },
  { role: 'title-lg', sample: 'Quarterly report' },
  { role: 'title', sample: 'Quarterly report' },
  { role: 'kpi', sample: '€ 48,210' },
];

export const UI_ROLES: readonly TypeRole[] = [
  { role: 'body-lg', sample: 'Notes stay with the project they belong to.' },
  { role: 'body', sample: 'Notes stay with the project they belong to.' },
  { role: 'body-sm', sample: 'Notes stay with the project they belong to.' },
  { role: 'label', sample: 'Email address' },
  { role: 'label-sm', sample: 'Email address' },
  { role: 'caption', sample: 'Updated 2 hours ago' },
  { role: 'overline', sample: 'Quarterly report', caps: true },
  { role: 'section', sample: 'Recent searches', caps: true },
  { role: 'button-lg', sample: 'Save changes' },
  { role: 'button', sample: 'Save changes' },
  { role: 'button-sm', sample: 'Save changes' },
  { role: 'code', sample: 'const theme = "dark";' },
  { role: 'kbd', sample: 'Ctrl K' },
  { role: 'micro', sample: '12 · 3/10 · [1]' },
];
