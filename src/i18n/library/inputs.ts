import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const inputsEn = defineDictionary({
  title: 'Inputs',
  blurb: 'Text, numbers, passwords, phones, files, rich text and code.',
  codeEditor: {
    configuration: 'Project configuration',
    hint: 'Edit the JSON. Tab indents; Escape then Tab moves to the next control.',
    invalid: 'Enter valid JSON, including quoted keys and no trailing commas.',
    reset: 'Reset JSON',
    loadInvalid: 'Load invalid JSON',
    preview: 'Read-only preview',
    previewHint: 'This preview follows the editable value.',
    plain: 'Plain-text notes',
    plainHint: 'Uncontrolled, without highlighting or line numbers.',
    plainValue: 'Release checklist\nReview component examples\nCheck light and dark themes',
  },
  specimens: {
    'inputs-input': { name: 'Input', subtitle: 'Affixes, icons, validation, counter and states' },
    'inputs-textarea': { name: 'Textarea', subtitle: 'Auto-grow with a row cap and counter' },
    'inputs-identity': { name: 'PasswordInput, PhoneInput and OtpInput', subtitle: 'Credential and contact fields' },
    'inputs-numeric': { name: 'NumberInput and RangeInput', subtitle: 'Stepper and from-to numeric fields' },
    'inputs-search-tags': {
      name: 'SearchInput, TagInput and InlineEdit',
      subtitle: 'Suggestions, free-text tags, click-to-edit',
    },
    'inputs-file-upload': { name: 'FileUpload', subtitle: 'Dropzone with progress, retry and remove' },
    'inputs-rich-text': { name: 'RichTextEditor', subtitle: 'Toolbar, markdown shortcuts and read-only output' },
    'inputs-code-editor': {
      name: 'CodeEditor',
      subtitle: 'Controlled JSON, validation, read-only preview and plain text',
    },
    'inputs-mention-input': { name: 'MentionInput', subtitle: 'At-mention and hash-tag suggestions at the caret' },
    'inputs-signature-pad': { name: 'SignaturePad', subtitle: 'Draw-to-sign field with undo, clear and status' },
  },
});

export const inputsPl: TranslationOf<typeof inputsEn> = {
  title: 'Pola wprowadzania',
  blurb: 'Tekst, liczby, hasła, telefony, pliki, tekst sformatowany i kod.',
  codeEditor: {
    configuration: 'Konfiguracja projektu',
    hint: 'Edytuj JSON. Tab dodaje wcięcie; Escape, a potem Tab przenosi do następnej kontrolki.',
    invalid: 'Wprowadź poprawny JSON z kluczami w cudzysłowach i bez końcowych przecinków.',
    reset: 'Przywróć JSON',
    loadInvalid: 'Wczytaj niepoprawny JSON',
    preview: 'Podgląd tylko do odczytu',
    previewHint: 'Podgląd pokazuje aktualną edytowaną wartość.',
    plain: 'Notatki tekstowe',
    plainHint: 'Stan niekontrolowany, bez podświetlania i numerów wierszy.',
    plainValue: 'Lista przed wydaniem\nPrzejrzyj przykłady komponentów\nSprawdź jasny i ciemny motyw',
  },
  specimens: {
    'inputs-input': { name: 'Input', subtitle: 'Przedrostki i przyrostki, ikony, walidacja, licznik i stany' },
    'inputs-textarea': { name: 'Textarea', subtitle: 'Automatyczne powiększanie z limitem wierszy i licznikiem' },
    'inputs-identity': {
      name: 'PasswordInput, PhoneInput i OtpInput',
      subtitle: 'Pola danych uwierzytelniających i kontaktowych',
    },
    'inputs-numeric': { name: 'NumberInput i RangeInput', subtitle: 'Pole z krokiem i pola liczbowe od–do' },
    'inputs-search-tags': {
      name: 'SearchInput, TagInput i InlineEdit',
      subtitle: 'Podpowiedzi, dowolne tagi, edycja po kliknięciu',
    },
    'inputs-file-upload': { name: 'FileUpload', subtitle: 'Strefa upuszczania z postępem, ponawianiem i usuwaniem' },
    'inputs-rich-text': {
      name: 'RichTextEditor',
      subtitle: 'Pasek narzędzi, skróty markdown i wynik tylko do odczytu',
    },
    'inputs-mention-input': { name: 'MentionInput', subtitle: 'Podpowiedzi wzmianek @ i tagów # przy kursorze' },
    'inputs-code-editor': {
      name: 'CodeEditor',
      subtitle: 'Kontrolowany JSON, walidacja, podgląd tylko do odczytu i zwykły tekst',
    },
    'inputs-signature-pad': {
      name: 'SignaturePad',
      subtitle: 'Pole podpisu odręcznego z cofaniem, czyszczeniem i statusem',
    },
  },
};
