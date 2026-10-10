import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const iconsEn = defineDictionary({
  title: 'Icons',
  blurb: 'One stroke-based set, sized to the 12–24 icon scale.',
  specimens: {
    'icons-glyph-set': { name: 'Glyph set', subtitle: 'Search, select and copy any glyph name' },
    'icons-scale': { name: 'Icon scale', subtitle: 'Six sizes from 12 to 24 pixels' },
    'icons-filled-twins': { name: 'Filled twins', subtitle: 'Selected states only, never decoration' },
    'icons-colour': { name: 'Colour usage', subtitle: 'Secondary at rest, brand when active' },
    'icons-in-controls': { name: 'Icons in controls', subtitle: 'Buttons, fields, badges and tiles' },
  },
});

export const iconsPl: TranslationOf<typeof iconsEn> = {
  title: 'Ikony',
  blurb: 'Jeden zestaw liniowy w skali ikon od 12 do 24.',
  specimens: {
    'icons-glyph-set': { name: 'Zestaw glifów', subtitle: 'Wyszukaj, zaznacz i skopiuj nazwę dowolnego glifu' },
    'icons-scale': { name: 'Skala ikon', subtitle: 'Sześć rozmiarów od 12 do 24 pikseli' },
    'icons-filled-twins': { name: 'Wypełnione odpowiedniki', subtitle: 'Tylko stany wybrane, nigdy dekoracja' },
    'icons-colour': { name: 'Użycie koloru', subtitle: 'Drugorzędny w spoczynku, markowy po aktywacji' },
    'icons-in-controls': { name: 'Ikony w kontrolkach', subtitle: 'Przyciski, pola, odznaki i kafelki' },
  },
};
