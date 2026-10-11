import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const actionsEn = defineDictionary({
  title: 'Actions',
  blurb: 'Buttons in every variant, size and state.',
  auth: {
    failure: 'Simulate a sign-in failure',
    loading: 'Resolving the local session…',
    signedOut: 'Signed out. Sign in to create a local demo session.',
    signedIn: 'Signed in as {email}.',
    failed: 'Sign-in failed. Turn off the failure simulation and try again.',
  },
  specimens: {
    'actions-button': { name: 'Button', subtitle: 'Seven variants, four sizes, icons and states' },
    'actions-copy': { name: 'CopyButton and CopyField', subtitle: 'Clipboard copy with announced feedback' },
    'actions-icon-buttons': {
      name: 'IconButton and ButtonGroup',
      subtitle: 'Seven icon variants, labelled actions and segmented groups',
    },
    'actions-toggles': { name: 'ToggleButton and ToggleGroup', subtitle: 'Pressed states, single and multiple choice' },
    'actions-fab': { name: 'Fab', subtitle: 'Plain, extended and speed dial, contained' },
    'actions-session': {
      name: 'AuthButton, AuthActionButton and CalendarEventButton',
      subtitle: 'Offline session initialization, sign-in failure and add-to-calendar',
    },
    'actions-preferences': { name: 'ThemeToggle and LocaleSwitcher', subtitle: 'Appearance and language switches' },
  },
});

export const actionsPl: TranslationOf<typeof actionsEn> = {
  title: 'Akcje',
  blurb: 'Przyciski w każdym wariancie, rozmiarze i stanie.',
  auth: {
    failure: 'Symuluj błąd logowania',
    loading: 'Sprawdzanie lokalnej sesji…',
    signedOut: 'Wylogowano. Zaloguj się, aby utworzyć lokalną sesję demo.',
    signedIn: 'Zalogowano jako {email}.',
    failed: 'Logowanie nie powiodło się. Wyłącz symulację błędu i spróbuj ponownie.',
  },
  specimens: {
    'actions-button': { name: 'Button', subtitle: 'Siedem wariantów, cztery rozmiary, ikony i stany' },
    'actions-copy': { name: 'CopyButton i CopyField', subtitle: 'Kopiowanie do schowka z komunikatem zwrotnym' },
    'actions-icon-buttons': {
      name: 'IconButton i ButtonGroup',
      subtitle: 'Siedem wariantów ikon, opisane akcje i grupy segmentowe',
    },
    'actions-toggles': {
      name: 'ToggleButton i ToggleGroup',
      subtitle: 'Stany wciśnięcia, wybór pojedynczy i wielokrotny',
    },
    'actions-fab': { name: 'Fab', subtitle: 'Zwykły, rozszerzony i szybkie menu, w kontenerze' },
    'actions-session': {
      name: 'AuthButton, AuthActionButton i CalendarEventButton',
      subtitle: 'Inicjalizacja lokalnej sesji, błąd logowania i dodawanie do kalendarza',
    },
    'actions-preferences': { name: 'ThemeToggle i LocaleSwitcher', subtitle: 'Przełączniki wyglądu i języka' },
  },
};
