import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const displayEn = defineDictionary({
  title: 'Display',
  blurb: 'Accordions, code labels, markdown, code snippets, QR codes, countdowns, watermarks and news.',
  markdown: { source: 'Source', rendered: 'Rendered' },
  reviews: { all: 'Showing all reviews', filtered: 'Showing {count}-star reviews only' },
  rows: {
    report: 'Quarterly report',
    updated: 'Updated 2 hours ago',
    comments: '2 comments',
    projects: 'Projects',
    selected: 'Selected row',
    archive: 'Archive',
    disabled: 'Disabled row',
  },
  specimens: {
    'display-list-item': {
      name: 'ListItem',
      subtitle: 'Leading icon, description, trailing count, selected and disabled',
    },
    'display-rating-summary': { name: 'RatingSummary', subtitle: 'Review distribution with a working star filter' },
    'display-badge': { name: 'Badge', subtitle: 'Soft, solid and outline across status tones' },
    'display-tag': { name: 'Tag', subtitle: 'Variants, tones, filters and removable chips' },
    'display-avatar': { name: 'Avatar', subtitle: 'Sizes, hashed colours, presence and groups' },
    'display-kbd': { name: 'Kbd', subtitle: 'Key caps, combos and plain shortcut text' },
    'display-icons': { name: 'Icon and Glyph', subtitle: 'Mask glyphs by token size, inline SVG by stroke' },
    'display-markdown': {
      name: 'Markdown',
      subtitle: 'Safe prose, autolinks, reference images and unique heading anchors',
    },
    'display-markdown-editor': {
      name: 'MarkdownEditor and MarkdownEditDialog',
      subtitle: 'Write, split and preview tabs, plus a modal draft editor',
    },
    'display-watermark': { name: 'Watermark', subtitle: 'Repeating stamp text over content' },
    'display-qr-code': { name: 'QRCode', subtitle: 'Scannable code with levels, sizes and a centre logo' },
  },
});

export const displayPl: TranslationOf<typeof displayEn> = {
  title: 'Wyświetlanie',
  blurb: 'Akordeony, etykiety kodów, markdown, fragmenty kodu, QR, liczniki, znaki wodne i wiadomości.',
  markdown: { source: 'Źródło', rendered: 'Podgląd' },
  reviews: {
    all: 'Wszystkie opinie',
    filtered:
      '{count, plural, one {Opinie z oceną # gwiazdki} few {Opinie z oceną # gwiazdek} other {Opinie z oceną # gwiazdek}}',
  },
  rows: {
    report: 'Raport kwartalny',
    updated: 'Zaktualizowano 2 godziny temu',
    comments: '2 komentarze',
    projects: 'Projekty',
    selected: 'Zaznaczony wiersz',
    archive: 'Archiwum',
    disabled: 'Niedostępny wiersz',
  },
  specimens: {
    'display-list-item': { name: 'ListItem', subtitle: 'Ikona, opis, licznik oraz stany zaznaczony i niedostępny' },
    'display-rating-summary': { name: 'RatingSummary', subtitle: 'Rozkład ocen z działającym filtrem gwiazdek' },
    'display-badge': { name: 'Badge', subtitle: 'Łagodna, pełna i konturowa w tonach statusu' },
    'display-tag': { name: 'Tag', subtitle: 'Warianty, tony, filtry i usuwalne chipy' },
    'display-avatar': { name: 'Avatar', subtitle: 'Rozmiary, kolory z hasha, obecność i grupy' },
    'display-kbd': { name: 'Kbd', subtitle: 'Klawisze, kombinacje i zwykły tekst skrótów' },
    'display-icons': {
      name: 'Icon i Glyph',
      subtitle: 'Glify maskowe wg rozmiaru tokenu, SVG w linii wg grubości kreski',
    },
    'display-markdown': {
      name: 'Markdown',
      subtitle: 'Bezpieczny tekst, autolinki, obrazy referencyjne i unikalne kotwice nagłówków',
    },
    'display-markdown-editor': {
      name: 'MarkdownEditor i MarkdownEditDialog',
      subtitle: 'Karty pisania, podziału i podglądu oraz edytor szkicu w oknie modalnym',
    },
    'display-watermark': { name: 'Watermark', subtitle: 'Powtarzany napis znak wodny nad treścią' },
    'display-qr-code': { name: 'QRCode', subtitle: 'Kod do skanowania z poziomami, rozmiarami i logo pośrodku' },
  },
};
