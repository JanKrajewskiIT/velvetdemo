import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const motionEn = defineDictionary({
  title: 'Motion',
  blurb: 'Five durations, six curves, named by intent.',
  travel: 'Navigation indicator travel',
  specimens: {
    'motion-durations': { name: 'Durations', subtitle: 'Five steps from 80 to 500 milliseconds' },
    'motion-easing': { name: 'Easing', subtitle: 'Six curves, including back overshoot, on a live track' },
    'motion-intents': { name: 'Motion intents', subtitle: 'Duration and curve paired per purpose' },
    'motion-keyframes': { name: 'Shared keyframes', subtitle: 'Base-layer animations used across components' },
    'motion-stagger': { name: 'Stagger and distance', subtitle: 'Sibling delay, rise and nudge' },
  },
});

export const motionPl: TranslationOf<typeof motionEn> = {
  title: 'Ruch',
  blurb: 'Pięć czasów trwania, sześć krzywych, nazwanych według intencji.',
  travel: 'Przemieszczanie wskaźnika nawigacji',
  specimens: {
    'motion-durations': { name: 'Czasy trwania', subtitle: 'Pięć stopni od 80 do 500 milisekund' },
    'motion-easing': { name: 'Easing', subtitle: 'Sześć krzywych, w tym back z przekroczeniem celu, na żywym torze' },
    'motion-intents': { name: 'Intencje ruchu', subtitle: 'Czas trwania i krzywa dobrane do celu' },
    'motion-keyframes': {
      name: 'Wspólne klatki kluczowe',
      subtitle: 'Animacje warstwy bazowej używane w komponentach',
    },
    'motion-stagger': { name: 'Kaskada i dystans', subtitle: 'Opóźnienie elementów, wznios i przesunięcie' },
  },
};
