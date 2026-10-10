import type { LightboxImage } from '@jankrajewskiit/ui';

interface Scene {
  alt: string;
  sky: string;
  sun: string;
  far: string;
  near: string;
}

const DUNES: Scene = { alt: 'Dune ridge at dawn', sky: '#EADCC8', sun: '#D9B38C', far: '#C9A27E', near: '#A98265' };

const SCENES: readonly Scene[] = [
  DUNES,
  { alt: 'Orchard in late light', sky: '#E6D8BF', sun: '#D6A77A', far: '#B5A27A', near: '#8B8660' },
  { alt: 'Harbour at dusk', sky: '#D9C7B8', sun: '#C89B82', far: '#A88F86', near: '#7F6B67' },
  { alt: 'Meadow after rain', sky: '#DDE0CF', sun: '#E0C79A', far: '#A9AE8A', near: '#7E8764' },
  { alt: 'Canyon wall at noon', sky: '#E8D2BC', sun: '#D9A488', far: '#B97F66', near: '#8F5F4E' },
  { alt: 'Salt flats in haze', sky: '#E9E2D3', sun: '#D8C09A', far: '#CBBFA6', near: '#B09F85' },
  { alt: 'Pine hill in autumn', sky: '#DCD6C6', sun: '#D6B98F', far: '#8F9477', near: '#667057' },
  { alt: 'Glacier lake in spring', sky: '#DAD9D2', sun: '#E1CBA4', far: '#A5ABA3', near: '#7C8580' },
];

const WIDTH = 800;
const HEIGHT = 600;

const sceneSvg = (scene: Scene): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">` +
  `<rect width="${WIDTH}" height="${HEIGHT}" fill="${scene.sky}"/>` +
  `<circle cx="${WIDTH * 0.72}" cy="${HEIGHT * 0.3}" r="${HEIGHT * 0.12}" fill="${scene.sun}"/>` +
  `<path d="M0 ${HEIGHT * 0.68} Q ${WIDTH * 0.25} ${HEIGHT * 0.5} ${WIDTH * 0.5} ${HEIGHT * 0.65} ` +
  `T ${WIDTH} ${HEIGHT * 0.58} V ${HEIGHT} H 0 Z" fill="${scene.far}"/>` +
  `<path d="M0 ${HEIGHT * 0.82} Q ${WIDTH * 0.3} ${HEIGHT * 0.64} ${WIDTH * 0.6} ${HEIGHT * 0.8} ` +
  `T ${WIDTH} ${HEIGHT * 0.74} V ${HEIGHT} H 0 Z" fill="${scene.near}"/>` +
  `</svg>`;

const toDataUri = (svg: string): string => `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;

const toImage = (scene: Scene): LightboxImage => ({
  src: toDataUri(sceneSvg(scene)),
  alt: scene.alt,
  caption: scene.alt,
});

export const sampleImage = (): LightboxImage => toImage(DUNES);

export const sampleImages = (count: number): LightboxImage[] => SCENES.slice(0, count).map(toImage);
