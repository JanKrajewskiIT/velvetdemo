import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const depthEn = defineDictionary({
  title: 'Depth',
  blurb: 'Elevation intents, layers, shadows and scrims.',
  specimens: {
    'depth-elevation-intents': { name: 'Elevation intents', subtitle: 'Nine shadows named by what they lift' },
    'depth-layering': { name: 'Layering', subtitle: 'Page, subtle, raised and overlay surfaces' },
    'depth-shadow-ladder': { name: 'Shadow ladder', subtitle: 'Five steps from xs to xl' },
    'depth-scrims': { name: 'Scrims', subtitle: 'Backdrop, image and media veils' },
    'depth-hero-surface': { name: 'Highlight and glow', subtitle: 'Inset light and brand halo' },
  },
});

export const depthPl: TranslationOf<typeof depthEn> = {
  title: 'Głębia',
  blurb: 'Poziomy wzniesienia, warstwy, cienie i przesłony.',
  specimens: {
    'depth-elevation-intents': {
      name: 'Poziomy wzniesienia',
      subtitle: 'Dziewięć cieni nazwanych według tego, co unoszą',
    },
    'depth-layering': { name: 'Warstwy', subtitle: 'Powierzchnie: strona, subtelna, podniesiona i nakładka' },
    'depth-shadow-ladder': { name: 'Drabina cieni', subtitle: 'Pięć stopni od xs do xl' },
    'depth-scrims': { name: 'Przesłony', subtitle: 'Zasłony tła, obrazu i mediów' },
    'depth-hero-surface': { name: 'Rozjaśnienie i poświata', subtitle: 'Wewnętrzne światło i halo marki' },
  },
};
