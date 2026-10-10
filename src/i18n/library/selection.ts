import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const selectionEn = defineDictionary({
  title: 'Selection',
  blurb: 'Select, autocomplete, chips, checkboxes, sliders, switches.',
  specimens: {
    'selection-select': { name: 'Select', subtitle: 'Listbox with descriptions, icons and errors' },
    'selection-autocomplete': { name: 'Autocomplete', subtitle: 'Local filtering, async search and free text' },
    'selection-hierarchy': {
      name: 'MultiSelect, Cascader and TreeSelect',
      subtitle: 'Many values and hierarchical paths in one field',
    },
    'selection-chips-switcher': {
      name: 'Chips and option switcher',
      subtitle: 'Filter chips, single choice tracks and tiles',
    },
    'selection-toggles': {
      name: 'Checkbox, radio and switch',
      subtitle: 'Indeterminate parent, plan group and settings',
    },
    'selection-editable': { name: 'EditableCollection', subtitle: 'Reorderable rows with level and weight' },
    'selection-slider-rating': {
      name: 'Slider and rating',
      subtitle: 'Single, range and snapped sliders; stars and reviews',
    },
    'selection-transfer': { name: 'TransferList', subtitle: 'Grouped, searchable and orderable assignment' },
  },
});

export const selectionPl: TranslationOf<typeof selectionEn> = {
  title: 'Wybór',
  blurb: 'Select, autocomplete, chipy, checkboxy, suwaki, przełączniki.',
  specimens: {
    'selection-select': { name: 'Select', subtitle: 'Lista wyboru z opisami, ikonami i błędami' },
    'selection-autocomplete': {
      name: 'Autocomplete',
      subtitle: 'Filtrowanie lokalne, wyszukiwanie asynchroniczne i dowolny tekst',
    },
    'selection-hierarchy': {
      name: 'MultiSelect, Cascader i TreeSelect',
      subtitle: 'Wiele wartości i ścieżki hierarchiczne w jednym polu',
    },
    'selection-chips-switcher': {
      name: 'Chipy i przełącznik opcji',
      subtitle: 'Chipy filtrów, wybór jednokrotny w paskach i kafelkach',
    },
    'selection-toggles': {
      name: 'Checkbox, radio i switch',
      subtitle: 'Nadrzędny stan pośredni, grupa planów i ustawienia',
    },
    'selection-editable': {
      name: 'EditableCollection',
      subtitle: 'Wiersze ze zmianą kolejności, poziomem i wagą',
    },
    'selection-slider-rating': {
      name: 'Slider i ocena',
      subtitle: 'Suwaki pojedyncze, zakresowe i z przyciąganiem; gwiazdki i recenzje',
    },
    'selection-transfer': {
      name: 'TransferList',
      subtitle: 'Pogrupowane, przeszukiwalne i porządkowalne przypisywanie',
    },
  },
};
