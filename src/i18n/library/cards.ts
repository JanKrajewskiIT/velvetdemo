import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const cardsEn = defineDictionary({
  title: 'Cards',
  blurb: 'Card and every card built on top of it.',
  specimens: {
    'cards-surfaces': { name: 'Card surfaces', subtitle: 'All twelve Surface paints through Card' },
    'cards-card': { name: 'Card', subtitle: 'Regions, padding, hover and selection' },
    'cards-structured': { name: 'StructuredCard', subtitle: 'Media, scrim, tag, header, body and footer' },
    'cards-flip': { name: 'FlipCard', subtitle: 'Two faces, flips on click or Enter' },
    'cards-feature': { name: 'FeatureCard', subtitle: 'Icon tile, copy and action; card and lift looks' },
    'cards-metrics': { name: 'Stat and ScoreCard', subtitle: 'KPIs with trend, scores with criteria' },
    'cards-question': { name: 'QuestionCard', subtitle: 'Category, difficulty, tags and expandable answer' },
  },
});

export const cardsPl: TranslationOf<typeof cardsEn> = {
  title: 'Karty',
  blurb: 'Card oraz wszystkie karty zbudowane na jej podstawie.',
  specimens: {
    'cards-surfaces': { name: 'Powierzchnie kart', subtitle: 'Wszystkie dwanaście wypełnień Surface w Card' },
    'cards-card': { name: 'Card', subtitle: 'Obszary, odstępy, najechanie i zaznaczenie' },
    'cards-structured': { name: 'StructuredCard', subtitle: 'Media, przyciemnienie, tag, nagłówek, treść i stopka' },
    'cards-flip': { name: 'FlipCard', subtitle: 'Dwie strony, obracana kliknięciem lub klawiszem Enter' },
    'cards-feature': { name: 'FeatureCard', subtitle: 'Kafelek z ikoną, opis i akcja; warianty card i lift' },
    'cards-metrics': { name: 'Stat i ScoreCard', subtitle: 'Wskaźniki KPI z trendem, wyniki z kryteriami' },
    'cards-question': { name: 'QuestionCard', subtitle: 'Kategoria, trudność, tagi i rozwijana odpowiedź' },
  },
};
