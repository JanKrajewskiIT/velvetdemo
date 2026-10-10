export type Rgb = readonly [red: number, green: number, blue: number];

export type ContrastLevel = 'AAA' | 'AA' | 'AA large' | 'Fail';

const CHANNEL_MAX = 255;
const AAA_MIN = 7;
const AA_MIN = 4.5;
const AA_LARGE_MIN = 3;
const LUMINANCE_OFFSET = 0.05;

const channelLuminance = (channel: number): number => {
  const unit = channel / CHANNEL_MAX;
  return unit <= 0.04045 ? unit / 12.92 : ((unit + 0.055) / 1.055) ** 2.4;
};

const relativeLuminance = ([red, green, blue]: Rgb): number =>
  0.2126 * channelLuminance(red) + 0.7152 * channelLuminance(green) + 0.0722 * channelLuminance(blue);

export const contrastRatio = (first: Rgb, second: Rgb): number => {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  return (
    (Math.max(firstLuminance, secondLuminance) + LUMINANCE_OFFSET) /
    (Math.min(firstLuminance, secondLuminance) + LUMINANCE_OFFSET)
  );
};

export const contrastLevel = (ratio: number): ContrastLevel => {
  if (ratio >= AAA_MIN) return 'AAA';
  if (ratio >= AA_MIN) return 'AA';
  if (ratio >= AA_LARGE_MIN) return 'AA large';
  return 'Fail';
};

export const formatRatio = (ratio: number): string => `${(Math.floor(ratio * 10) / 10).toFixed(1)}:1`;
