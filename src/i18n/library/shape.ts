import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const shapeEn = defineDictionary({
  title: 'Shape',
  blurb: 'Radius and border weights, from hairline to pill.',
  borderWidths: {
    colourRoles: 'Border colour roles',
    widths: {
      hairline: { name: 'Hairline', use: 'Cards, fields and dividers' },
      medium: { name: 'Medium', use: 'Drop targets and emphasised outlines' },
      thick: { name: 'Thick', use: 'Focus rings and the active tab' },
      accent: { name: 'Accent', use: 'Strips and quotes' },
    },
    colours: { subtle: 'Subtle', default: 'Default', strong: 'Strong', brand: 'Brand', focus: 'Focus' },
  },
  radiusScale: {
    pill: 'Pill',
    uses: {
      none: 'Flush edges',
      twoXs: 'Bars, marks and tracks',
      xs: 'Chips and code',
      sm: 'Small controls',
      md: 'Buttons and fields',
      lg: 'Cards and panels',
      xl: 'Dialogs and the FAB',
      twoXl: 'Hero tiles',
      full: 'Pills, dots and avatars',
    },
  },
  nestedRadius: {
    live: 'Live track',
    range: 'Range',
    ranges: { day: 'Day', week: 'Week', month: 'Month' },
    caption: 'The track radius is {radius}: the outer radius minus the {inset} inset keeps corners concentric.',
    trackTitle: 'Segmented track · 3× zoom',
    cardTitle: 'Card with inset media · 3× zoom',
  },
  shapeInControls: {
    saveChanges: 'Save changes',
    projectName: 'Project name',
    updatedToday: 'Updated today',
    reportTitle: 'Quarterly report',
    deleteTitle: 'Delete project?',
    deleteBody: 'This cannot be undone.',
    active: 'Active',
    moreActions: 'More actions',
  },
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
  borderWidths: {
    colourRoles: 'Role kolorów obramowania',
    widths: {
      hairline: { name: 'Włosowata', use: 'Karty, pola i separatory' },
      medium: { name: 'Średnia', use: 'Strefy upuszczania i wyraźne kontury' },
      thick: { name: 'Gruba', use: 'Pierścienie fokusa i aktywna zakładka' },
      accent: { name: 'Akcentowa', use: 'Paski i cytaty' },
    },
    colours: { subtle: 'Subtelna', default: 'Domyślna', strong: 'Mocna', brand: 'Marki', focus: 'Fokus' },
  },
  radiusScale: {
    pill: 'Pigułka',
    uses: {
      none: 'Równe krawędzie',
      twoXs: 'Paski, znaczniki i ścieżki',
      xs: 'Chipy i kod',
      sm: 'Małe kontrolki',
      md: 'Przyciski i pola',
      lg: 'Karty i panele',
      xl: 'Okna dialogowe i FAB',
      twoXl: 'Duże kafelki',
      full: 'Pigułki, kropki i awatary',
    },
  },
  nestedRadius: {
    live: 'Ścieżka na żywo',
    range: 'Zakres',
    ranges: { day: 'Dzień', week: 'Tydzień', month: 'Miesiąc' },
    caption: 'Promień ścieżki to {radius}: promień zewnętrzny minus wcięcie {inset} zachowuje współśrodkowe narożniki.',
    trackTitle: 'Segmentowana ścieżka · powiększenie 3×',
    cardTitle: 'Karta z wciętym multimedium · powiększenie 3×',
  },
  shapeInControls: {
    saveChanges: 'Zapisz zmiany',
    projectName: 'Nazwa projektu',
    updatedToday: 'Zaktualizowano dziś',
    reportTitle: 'Raport kwartalny',
    deleteTitle: 'Usunąć projekt?',
    deleteBody: 'Tej operacji nie można cofnąć.',
    active: 'Aktywny',
    moreActions: 'Więcej działań',
  },
  specimens: {
    'shape-radius-scale': { name: 'Skala promieni', subtitle: 'Dziewięć stopni od kąta prostego po pigułkę' },
    'shape-border-widths': { name: 'Grubości obramowań', subtitle: 'Od linii włosowatej po akcent, z rolami kolorów' },
    'shape-nested-radius': { name: 'Zagnieżdżony promień', subtitle: 'Współśrodkowe narożniki w ścieżkach i kartach' },
    'shape-in-controls': { name: 'Kształt w komponentach', subtitle: 'Przycisk, pole, karta, okno, odznaka, koła' },
  },
};
