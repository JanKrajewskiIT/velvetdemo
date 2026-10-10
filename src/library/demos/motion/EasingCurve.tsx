import { createTokenValue } from './createTokenValue';
import styles from './EasingCurve.module.css';

interface EasingCurveProps {
  token: string;
}

interface Bezier {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const SIZE = 40;
const LINEAR: Bezier = { x1: 0, y1: 0, x2: 1, y2: 1 };

const parseBezier = (value: string): Bezier => {
  const body = /^cubic-bezier\((.+)\)$/u.exec(value)?.[1];
  if (!body) return LINEAR;
  const [x1 = 0, y1 = 0, x2 = 1, y2 = 1] = body.split(',').map(Number);
  return { x1, y1, x2, y2 };
};

const point = (x: number, y: number): string => `${x * SIZE} ${SIZE - y * SIZE}`;

export const EasingCurve = (props: EasingCurveProps) => {
  const value = createTokenValue(() => props.token);
  const curve = () => parseBezier(value());
  return (
    <svg class={styles.curve} viewBox="-4 -24 48 72" aria-hidden="true">
      <path class={styles.axis} d={`M0 ${SIZE} H${SIZE} M0 ${SIZE} V0`} />
      <path
        class={styles.line}
        d={`M${point(0, 0)} C${point(curve().x1, curve().y1)} ${point(curve().x2, curve().y2)} ${point(1, 1)}`}
      />
    </svg>
  );
};
