import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const overviewEn = defineDictionary({
  title: 'Overview',
  blurb: 'How the system is put together — token layers and composition rules.',
  specimens: {
    'overview-token-layers': { name: 'Token layers', subtitle: 'ref to sys to comp to the rendered class' },
    'overview-token-rules': { name: 'What components read', subtitle: 'Semantic tokens in, raw values never' },
    'overview-structure-atoms': { name: 'Structure atoms', subtitle: 'Containers, fields, steps and tiles' },
    'overview-status-atoms': { name: 'Status and measure atoms', subtitle: 'Chips, counts, switches and bars' },
    'overview-containers': {
      name: 'Container hierarchy',
      subtitle: 'Surface, Card, composed cards, floating panels',
    },
  },
});

export const overviewPl: TranslationOf<typeof overviewEn> = {
  title: 'Przegląd',
  blurb: 'Jak zbudowany jest system — warstwy tokenów i zasady kompozycji.',
  specimens: {
    'overview-token-layers': { name: 'Warstwy tokenów', subtitle: 'ref do sys do comp do wyrenderowanej klasy' },
    'overview-token-rules': {
      name: 'Co czytają komponenty',
      subtitle: 'Tokeny semantyczne tak, surowe wartości nigdy',
    },
    'overview-structure-atoms': { name: 'Atomy strukturalne', subtitle: 'Kontenery, pola, kroki i kafelki' },
    'overview-status-atoms': { name: 'Atomy statusu i miary', subtitle: 'Znaczniki, liczniki, przełączniki i paski' },
    'overview-containers': {
      name: 'Hierarchia kontenerów',
      subtitle: 'Surface, Card, karty złożone, panele pływające',
    },
  },
};
