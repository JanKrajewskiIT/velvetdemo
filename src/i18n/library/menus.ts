import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const menusEn = defineDictionary({
  title: 'Menus',
  blurb: 'Menus, context menus, split buttons and the command palette.',
  specimens: {
    'menus-menu': { name: 'Menu', subtitle: 'Trigger menus with sections, shortcuts and checks' },
    'menus-panel': { name: 'MenuPanel', subtitle: 'The bare panel: items, danger, disabled, checkable' },
    'menus-context-menu': { name: 'ContextMenu', subtitle: 'Right-click or Shift+F10 inside a region' },
    'menus-dropdown-button': {
      name: 'DropdownButton and MenuChip',
      subtitle: 'Split buttons and single-choice filter chips',
    },
    'menus-command-palette': { name: 'CommandPalette', subtitle: 'Fuzzy-filtered, grouped commands in a modal' },
    'menus-toolbar': { name: 'Toolbar', subtitle: 'Toggle tools that collapse into an overflow menu' },
  },
});

export const menusPl: TranslationOf<typeof menusEn> = {
  title: 'Menu',
  blurb: 'Menu, menu kontekstowe, przyciski dzielone i paleta poleceń.',
  specimens: {
    'menus-menu': { name: 'Menu', subtitle: 'Menu wywoływane przyciskiem z sekcjami, skrótami i polami wyboru' },
    'menus-panel': { name: 'MenuPanel', subtitle: 'Sam panel: pozycje, niebezpieczne, wyłączone, z polem wyboru' },
    'menus-context-menu': { name: 'ContextMenu', subtitle: 'Prawy przycisk myszy lub Shift+F10 wewnątrz obszaru' },
    'menus-dropdown-button': {
      name: 'DropdownButton i MenuChip',
      subtitle: 'Przyciski dzielone i chipy filtrów z jednokrotnym wyborem',
    },
    'menus-command-palette': {
      name: 'CommandPalette',
      subtitle: 'Grupowane polecenia z filtrowaniem rozmytym w oknie modalnym',
    },
    'menus-toolbar': { name: 'Toolbar', subtitle: 'Przyciski przełączane zwijane do menu dodatkowego' },
  },
};
