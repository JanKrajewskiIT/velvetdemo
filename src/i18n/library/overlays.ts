import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const overlaysEn = defineDictionary({
  title: 'Overlays',
  blurb: 'Dialogs, drawers, sheets, popovers, tooltips and tours.',
  specimens: {
    'overlays-dialog': { name: 'Dialog', subtitle: 'Modal in three sizes with inert page' },
    'overlays-drawer': { name: 'Drawer', subtitle: 'Dialog sliding from the right or left' },
    'overlays-bottom-sheet': { name: 'Bottom sheet', subtitle: 'Draggable mobile panel from the bottom' },
    'overlays-confirm': {
      name: 'Confirm dialog and action',
      subtitle: 'Routine, destructive, typed and failing confirmations',
    },
    'overlays-popover': { name: 'Popover', subtitle: 'Click panels and a hover card' },
    'overlays-tooltip': { name: 'Tooltip', subtitle: 'Hints on four sides with a shortcut' },
    'overlays-tour': { name: 'Tour', subtitle: 'Spotlight walkthrough across the toolbar' },
  },
});

export const overlaysPl: TranslationOf<typeof overlaysEn> = {
  title: 'Nakładki',
  blurb: 'Dialogi, szuflady, panele, popovery, podpowiedzi i przewodniki.',
  specimens: {
    'overlays-dialog': { name: 'Dialog', subtitle: 'Okno modalne w trzech rozmiarach z nieaktywną stroną' },
    'overlays-drawer': { name: 'Drawer', subtitle: 'Okno wysuwane z prawej lub lewej strony' },
    'overlays-bottom-sheet': { name: 'Panel dolny', subtitle: 'Przeciągany panel mobilny od dołu' },
    'overlays-confirm': {
      name: 'Okno i akcja potwierdzenia',
      subtitle: 'Potwierdzenia rutynowe, destrukcyjne, z wpisywaniem i zakończone błędem',
    },
    'overlays-popover': { name: 'Popover', subtitle: 'Panele po kliknięciu i karta po najechaniu' },
    'overlays-tooltip': { name: 'Tooltip', subtitle: 'Podpowiedzi z czterech stron ze skrótem klawiszowym' },
    'overlays-tour': { name: 'Tour', subtitle: 'Przewodnik z podświetleniem elementów paska narzędzi' },
  },
};
