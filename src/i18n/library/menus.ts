import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const menusEn = defineDictionary({
  title: 'Menus',
  blurb: 'Menus, context menus, split buttons and the command palette.',
  positions: {
    projectStart: 'Project · leading icons',
    projectEnd: 'Project · trailing icons',
    viewEnd: 'View · trailing icons',
    start: 'Leading icons',
    end: 'Trailing icons · checks stay at the start',
  },
  specimens: {
    'menus-menu': { name: 'Menu', subtitle: 'Leading or trailing icons with sections, shortcuts and checks' },
    'menus-panel': { name: 'MenuPanel', subtitle: 'Compare icon positions with checks, danger and disabled items' },
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
  positions: {
    projectStart: 'Projekt · ikony na początku',
    projectEnd: 'Projekt · ikony na końcu',
    viewEnd: 'Widok · ikony na końcu',
    start: 'Ikony na początku',
    end: 'Ikony na końcu · zaznaczenia pozostają na początku',
  },
  specimens: {
    'menus-menu': { name: 'Menu', subtitle: 'Ikony na początku lub końcu z sekcjami, skrótami i zaznaczeniami' },
    'menus-panel': { name: 'MenuPanel', subtitle: 'Porównanie pozycji ikon z zaznaczeniami i stanami pozycji' },
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
