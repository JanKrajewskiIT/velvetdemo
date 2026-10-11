import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const displayEn = defineDictionary({
  title: 'Display',
  blurb: 'Badges, tags, avatars, key caps and inline content.',
  markdown: { source: 'Source', rendered: 'Rendered' },
  specimens: {
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
  blurb: 'Odznaki, tagi, awatary, klawisze i treści w linii.',
  markdown: { source: 'Źródło', rendered: 'Podgląd' },
  specimens: {
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
