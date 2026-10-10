const SAMPLE_RATE = 22050;
const DURATION_SECONDS = 6;
const FADE_SECONDS = 0.6;
const AMPLITUDE = 0.25;
const BASE_HZ = 220;
const VIBRATO_HZ = 0.5;
const BYTES_PER_SAMPLE = 2;
const HEADER_BYTES = 44;

const writeText = (view: DataView, offset: number, text: string): void => {
  for (let index = 0; index < text.length; index += 1) {
    view.setUint8(offset + index, text.charCodeAt(index));
  }
};

const envelope = (time: number): number => {
  const fadeIn = Math.min(1, time / FADE_SECONDS);
  const fadeOut = Math.min(1, (DURATION_SECONDS - time) / FADE_SECONDS);
  return Math.max(0, Math.min(fadeIn, fadeOut));
};

const buildWav = (): ArrayBuffer => {
  const sampleCount = SAMPLE_RATE * DURATION_SECONDS;
  const dataBytes = sampleCount * BYTES_PER_SAMPLE;
  const buffer = new ArrayBuffer(HEADER_BYTES + dataBytes);
  const view = new DataView(buffer);

  writeText(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataBytes, true);
  writeText(view, 8, 'WAVE');
  writeText(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, SAMPLE_RATE, true);
  view.setUint32(28, SAMPLE_RATE * BYTES_PER_SAMPLE, true);
  view.setUint16(32, BYTES_PER_SAMPLE, true);
  view.setUint16(34, 16, true);
  writeText(view, 36, 'data');
  view.setUint32(40, dataBytes, true);

  for (let index = 0; index < sampleCount; index += 1) {
    const time = index / SAMPLE_RATE;
    const frequency = BASE_HZ * (1 + 0.05 * Math.sin(2 * Math.PI * VIBRATO_HZ * time));
    const sample = Math.sin(2 * Math.PI * frequency * time) * AMPLITUDE * envelope(time);
    view.setInt16(HEADER_BYTES + index * BYTES_PER_SAMPLE, Math.round(sample * 0x7fff), true);
  }

  return buffer;
};

export const createDemoTone = (): string => URL.createObjectURL(new Blob([buildWav()], { type: 'audio/wav' }));

export const revokeDemoTone = (url: string): void => {
  URL.revokeObjectURL(url);
};
