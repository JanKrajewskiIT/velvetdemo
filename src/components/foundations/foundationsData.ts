export const FONT_FAMILIES = [
  { id: 'display', name: 'Space Grotesk' },
  { id: 'text', name: 'Hanken Grotesk' },
  { id: 'mono', name: 'JetBrains Mono' },
] as const;

export const TYPE_ROLES = ['display-md', 'h2', 'title-lg', 'body-lg', 'code'] as const;

export const NEUTRAL_TOKENS = [
  '--bg-page',
  '--bg-subtle',
  '--bg-raised',
  '--bg-sunken',
  '--bg-inverse',
  '--fg-primary',
  '--fg-secondary',
  '--fg-tertiary',
] as const;

export const STATUS_TOKENS = [
  { tone: 'success', token: '--status-success-solid' },
  { tone: 'warning', token: '--status-warning-solid' },
  { tone: 'danger', token: '--status-danger-solid' },
  { tone: 'info', token: '--status-info-solid' },
  { tone: 'brand', token: '--action-primary' },
  { tone: 'neutral', token: '--status-neutral-solid' },
] as const;

export const RADII = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const;

export const ELEVATIONS = ['control', 'card', 'raised', 'popover', 'dialog', 'brand'] as const;

export const EASINGS = ['linear', 'standard', 'emphasized', 'exit', 'spring'] as const;
