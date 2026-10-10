import { contrastRatio, type Rgb } from './contrast';

let sampler: CanvasRenderingContext2D | null | undefined;

const getSampler = (): CanvasRenderingContext2D | null => {
  sampler ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  return sampler;
};

const readToken = (probe: Element, token: string): string => getComputedStyle(probe).getPropertyValue(token).trim();

const paint = (context: CanvasRenderingContext2D, color: string): void => {
  context.fillStyle = color;
  context.fillRect(0, 0, 1, 1);
};

const sample = (context: CanvasRenderingContext2D): Rgb => {
  const [red = 0, green = 0, blue = 0] = context.getImageData(0, 0, 1, 1).data;
  return [red, green, blue];
};

// Tokens resolve where the probe sits, so nested [data-theme] and [data-tone] scopes are honored.
export const measureContrast = (
  probe: Element,
  foreground: string,
  background: string,
  base: string,
): number | undefined => {
  const context = getSampler();
  const colors = [base, background, foreground].map((token) => readToken(probe, token));
  const [baseColor, backgroundColor, foregroundColor] = colors;
  if (!context || !baseColor || !backgroundColor || !foregroundColor) return undefined;
  paint(context, baseColor);
  paint(context, backgroundColor);
  const backdrop = sample(context);
  paint(context, foregroundColor);
  return contrastRatio(sample(context), backdrop);
};
