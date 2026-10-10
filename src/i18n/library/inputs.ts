import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const inputsEn = defineDictionary({
  title: 'Inputs',
  blurb: 'Text, numbers, passwords, phones, files and rich text.',
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
    'inputs-mention-input': { name: 'MentionInput', subtitle: 'At-mention and hash-tag suggestions at the caret' },
    'inputs-signature-pad': { name: 'SignaturePad', subtitle: 'Draw-to-sign field with undo, clear and status' },
  },
});

export const inputsPl: TranslationOf<typeof inputsEn> = {
  title: 'Pola wprowadzania',
  blurb: 'Tekst, liczby, hasła, telefony, pliki i tekst sformatowany.',
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
    'inputs-signature-pad': {
      name: 'SignaturePad',
      subtitle: 'Pole podpisu odręcznego z cofaniem, czyszczeniem i statusem',
    },
  },
};
