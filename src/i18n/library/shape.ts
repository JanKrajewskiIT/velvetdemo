import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const shapeEn = defineDictionary({
  title: 'Shape',
  blurb: 'Radius and border weights, from hairline to pill.',
  specimens: {
    'shape-radius-scale': { name: 'Radius scale', subtitle: 'Nine steps from square to pill' },
    'shape-border-widths': { name: 'Border widths', subtitle: 'Hairline to accent, with colour roles' },
    'shape-nested-radius': { name: 'Nested radius', subtitle: 'Concentric corners inside tracks and cards' },
    'shape-in-controls': { name: 'Shape in components', subtitle: 'Button, field, card, dialog, badge, circles' },
  },
});

export const shapePl: TranslationOf<typeof shapeEn> = {
  title: 'Kształt',
  blurb: 'Promienie i grubości obramowań, od linii włosowatej po pigułkę.',
  specimens: {
    'shape-radius-scale': { name: 'Skala promieni', subtitle: 'Dziewięć stopni od kąta prostego po pigułkę' },
    'shape-border-widths': { name: 'Grubości obramowań', subtitle: 'Od linii włosowatej po akcent, z rolami kolorów' },
    'shape-nested-radius': { name: 'Zagnieżdżony promień', subtitle: 'Współśrodkowe narożniki w ścieżkach i kartach' },
    'shape-in-controls': { name: 'Kształt w komponentach', subtitle: 'Przycisk, pole, karta, okno, odznaka, koła' },
  },
};
