import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const stateEn = defineDictionary({
  title: 'State',
  blurb: 'Hover, pressed, selected and focus — one consistent language.',
  specimens: {
    'state-language': { name: 'Interaction states', subtitle: 'Eight states on real components' },
    'state-focus': { name: 'Focus rings', subtitle: 'Ring, danger, inset and outline tokens' },
    'state-washes': { name: 'State washes', subtitle: 'Hover, pressed and selected over surfaces' },
    'state-actions': { name: 'Action states', subtitle: 'Five button variants across five states' },
    'state-accessibility': { name: 'Accessibility contract', subtitle: 'Rules every state honours, with live proof' },
  },
});

export const statePl: TranslationOf<typeof stateEn> = {
  title: 'Stany',
  blurb: 'Najechanie, wciśnięcie, zaznaczenie i fokus — jeden spójny język.',
  specimens: {
    'state-language': { name: 'Stany interakcji', subtitle: 'Osiem stanów na prawdziwych komponentach' },
    'state-focus': { name: 'Pierścienie fokusu', subtitle: 'Tokeny pierścienia, błędu, wewnętrzne i obrysu' },
    'state-washes': { name: 'Wypełnienia stanów', subtitle: 'Najechanie, wciśnięcie i zaznaczenie na powierzchniach' },
    'state-actions': { name: 'Stany akcji', subtitle: 'Pięć wariantów przycisku w pięciu stanach' },
    'state-accessibility': {
      name: 'Kontrakt dostępności',
      subtitle: 'Zasady, których przestrzega każdy stan, z żywym dowodem',
    },
  },
};
