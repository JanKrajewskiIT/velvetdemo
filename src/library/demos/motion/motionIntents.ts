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
}

export const MOTION_INTENTS: readonly MotionIntent[] = [
  { token: '--motion-instant', kind: 'press' },
  { token: '--motion-fast', kind: 'colour' },
  { token: '--motion-base', kind: 'select' },
  { token: '--motion-move', kind: 'resize' },
  { token: '--motion-reveal', kind: 'chevron' },
  { token: '--motion-enter', kind: 'enter' },
  { token: '--motion-exit', kind: 'exit' },
  { token: '--motion-spring', kind: 'switch' },
  { token: '--motion-bounce', kind: 'bounce' },
  { token: '--motion-pop', kind: 'pop' },
  { token: '--motion-lift', kind: 'lift' },
  { token: '--motion-slide', kind: 'slide' },
  { token: '--motion-travel', kind: 'travel' },
  { token: '--motion-progress', kind: 'progress' },
];
