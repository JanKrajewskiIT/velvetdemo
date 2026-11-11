import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const brandEn = defineDictionary({
  title: 'Brand',
  blurb: 'Wordmark, signet and how they sit on light, dark and brand fills.',
  fills: { caption: 'tone="{tone}" on {token}' },
  specimens: {
    'brand-velvet': {
      name: 'Velvet',
      subtitle: 'Lockup, mark and wordmark at four sizes',
      fullLogo: 'lockup · {size}',
      mark: 'mark',
      wordmark: 'wordmark',
      glowOff: '28px · glow off',
    },
    'brand-recron': {
      name: 'Recron',
      subtitle: 'Signet and wordmark by logo height',
      fullLogo: 'lockup · {size}',
      markSized: 'mark · {size}',
    },
    'brand-quantcore': {
      name: 'QuantCore',
      subtitle: 'Lockup and mark at preset and custom heights',
      fullLogo: 'lockup · {size}',
      markSized: 'mark · {size}',
    },
    'brand-on-fills': { name: 'On fills', subtitle: 'Default and inverse tone on three grounds' },
    'brand-wordmark': { name: 'Type-only wordmark', subtitle: 'Display face on raised and brand' },
    'brand-velvet-ramp': { name: 'Velvet ramp', subtitle: 'Eleven steps and the roles they feed' },
  },
});

export const brandPl: TranslationOf<typeof brandEn> = {
  title: 'Marka',
  blurb: 'Logotyp, sygnet i ich wygląd na jasnych, ciemnych i markowych tłach.',
  fills: { caption: 'tone="{tone}" na {token}' },
  specimens: {
    'brand-velvet': {
      name: 'Velvet',
      subtitle: 'Pełne logo, znak i logotyp w czterech rozmiarach',
      fullLogo: 'pełne logo · {size}',
      mark: 'znak',
      wordmark: 'logotyp',
      glowOff: '28px · bez poświaty',
    },
    'brand-recron': {
      name: 'Recron',
      subtitle: 'Sygnet i logotyp według wysokości logo',
      fullLogo: 'pełne logo · {size}',
      markSized: 'znak · {size}',
    },
    'brand-quantcore': {
      name: 'QuantCore',
      subtitle: 'Pełne logo i znak w wysokościach predefiniowanych i własnej',
      fullLogo: 'pełne logo · {size}',
      markSized: 'znak · {size}',
    },
    'brand-on-fills': { name: 'Na tłach', subtitle: 'Ton domyślny i odwrócony na trzech tłach' },
    'brand-wordmark': { name: 'Logotyp tekstowy', subtitle: 'Krój display na tle podniesionym i markowym' },
    'brand-velvet-ramp': { name: 'Skala Velvet', subtitle: 'Jedenaście stopni i role, które je zasilają' },
  },
};
