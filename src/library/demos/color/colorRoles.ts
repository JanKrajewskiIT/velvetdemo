export const BACKGROUND_ROLES = [
  { token: '--bg-page', fg: '--fg-primary' },
  { token: '--bg-subtle', fg: '--fg-primary' },
  { token: '--bg-raised', fg: '--fg-primary' },
  { token: '--bg-sunken', fg: '--fg-primary' },
  { token: '--bg-overlay', fg: '--fg-primary' },
  { token: '--bg-field', fg: '--fg-primary' },
  { token: '--bg-selected', fg: '--fg-brand' },
  { token: '--bg-brand-subtle', fg: '--fg-brand' },
  { token: '--bg-brand', fg: '--on-color-fg' },
  { token: '--bg-inverse', fg: '--fg-inverse' },
  { token: '--bg-media', fg: '--on-color-fg' },
  { token: '--bg-glass', fg: '--fg-primary' },
] as const;

export const FOREGROUND_ROLES = [
  { token: '--fg-primary', sample: 'report', measured: true },
  { token: '--fg-secondary', sample: 'prepared', measured: true },
  { token: '--fg-tertiary', sample: 'updated', measured: true },
  { token: '--fg-brand', sample: 'workspace', measured: true },
  { token: '--fg-link', sample: 'invoices', measured: true },
  { token: '--fg-disabled', sample: 'unavailable', measured: false },
] as const;
