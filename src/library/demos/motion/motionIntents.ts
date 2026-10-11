export type IntentKind =
  | 'press'
  | 'colour'
  | 'select'
  | 'resize'
  | 'chevron'
  | 'enter'
  | 'exit'
  | 'switch'
  | 'bounce'
  | 'pop'
  | 'lift'
  | 'slide'
  | 'travel'
  | 'progress';

export interface MotionIntent {
  token: string;
  kind: IntentKind;
  use: string;
}

export const MOTION_INTENTS: readonly MotionIntent[] = [
  { token: '--motion-instant', kind: 'press', use: 'Press feedback' },
  { token: '--motion-fast', kind: 'colour', use: 'Hover and colour' },
  { token: '--motion-base', kind: 'select', use: 'State change' },
  { token: '--motion-move', kind: 'resize', use: 'Position and size' },
  { token: '--motion-reveal', kind: 'chevron', use: 'Chevrons and small popups' },
  { token: '--motion-enter', kind: 'enter', use: 'Overlays arriving' },
  { token: '--motion-exit', kind: 'exit', use: 'Overlays leaving' },
  { token: '--motion-spring', kind: 'switch', use: 'Thumbs and checks' },
  { token: '--motion-bounce', kind: 'bounce', use: 'Quick pops' },
  { token: '--motion-pop', kind: 'pop', use: 'Things appearing' },
  { token: '--motion-lift', kind: 'lift', use: 'Card hover' },
  { token: '--motion-slide', kind: 'slide', use: 'Carousels and drawers' },
  { token: '--motion-travel', kind: 'travel', use: 'Navigation indicator travel' },
  { token: '--motion-progress', kind: 'progress', use: 'Bars and meters' },
];
