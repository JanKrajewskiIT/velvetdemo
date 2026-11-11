import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const depthEn = defineDictionary({
  title: 'Depth',
  blurb: 'Elevation intents, layers, shadows and scrims.',
  elevation: {
    flat: 'Inline, bordered content',
    control: 'Buttons and fields',
    card: 'Resting cards',
    cardHover: 'Hovered cards, lifted',
    raised: 'Panels above the page',
    popover: 'Menus and popovers',
    dialog: 'Dialogs and sheets',
    brand: 'Brand hero surface',
    media: 'Imagery and lightboxes',
  },
  hero: {
    highlight: 'Top-edge light on a raised surface',
    glow: 'Brand halo around a hero card',
    lift: 'Glow plus lift on a brand fill',
    note: 'Reserved for one hero surface per view.',
  },
  layers: {
    flat: 'flat',
    flatHairline: 'flat, hairline',
    note: 'Light surfaces share white and separate by elevation. Dark surfaces get lighter with every step.',
  },
  scrims: {
    backdrop: 'Behind dialogs and drawers',
    image: 'Under text on imagery',
    media: 'Full-bleed media viewer',
    dialogTitle: 'Discard draft?',
    imageTitle: 'Harbour at dusk',
    imageMeta: 'Photograph, 2 min read',
    viewer: 'Viewer',
  },
  shadows: {
    xs: 'Controls',
    sm: 'Resting cards',
    md: 'Hovered cards',
    lg: 'Raised panels, popovers',
    xl: 'Dialogs',
  },
  specimens: {
    'depth-elevation-intents': { name: 'Elevation intents', subtitle: 'Nine shadows named by what they lift' },
    'depth-layering': { name: 'Layering', subtitle: 'Page, subtle, raised and overlay surfaces' },
    'depth-shadow-ladder': { name: 'Shadow ladder', subtitle: 'Five steps from xs to xl' },
    'depth-scrims': { name: 'Scrims', subtitle: 'Backdrop, image and media veils' },
    'depth-hero-surface': { name: 'Highlight and glow', subtitle: 'Inset light and brand halo' },
  },
});

export const depthPl: TranslationOf<typeof depthEn> = {
  title: 'Głębia',
  blurb: 'Poziomy wzniesienia, warstwy, cienie i przesłony.',
  elevation: {
    flat: 'Treść w linii, z obramowaniem',
    control: 'Przyciski i pola',
    card: 'Karty w spoczynku',
    cardHover: 'Karty po najechaniu, uniesione',
    raised: 'Panele nad stroną',
    popover: 'Menu i popovery',
    dialog: 'Okna dialogowe i arkusze',
    brand: 'Główna powierzchnia marki',
    media: 'Obrazy i lightboxy',
  },
  hero: {
    highlight: 'Światło na górnej krawędzi podniesionej powierzchni',
    glow: 'Halo marki wokół karty głównej',
    lift: 'Poświata i uniesienie na wypełnieniu marki',
    note: 'Zarezerwowane dla jednej głównej powierzchni na widok.',
  },
  layers: {
    flat: 'płasko',
    flatHairline: 'płasko, cienka linia',
    note: 'Jasne powierzchnie dzielą biel i rozdzielają się wzniesieniem. Ciemne powierzchnie jaśnieją z każdym stopniem.',
  },
  scrims: {
    backdrop: 'Za oknami dialogowymi i szufladami',
    image: 'Pod tekstem na obrazach',
    media: 'Pełnoekranowa przeglądarka mediów',
    dialogTitle: 'Odrzucić szkic?',
    imageTitle: 'Port o zmierzchu',
    imageMeta: 'Fotografia, 2 min czytania',
    viewer: 'Podgląd',
  },
  shadows: {
    xs: 'Przyciski',
    sm: 'Karty w spoczynku',
    md: 'Karty po najechaniu',
    lg: 'Panele uniesione, popovery',
    xl: 'Okna dialogowe',
  },
  specimens: {
    'depth-elevation-intents': {
      name: 'Poziomy wzniesienia',
      subtitle: 'Dziewięć cieni nazwanych według tego, co unoszą',
    },
    'depth-layering': { name: 'Warstwy', subtitle: 'Powierzchnie: strona, subtelna, podniesiona i nakładka' },
    'depth-shadow-ladder': { name: 'Drabina cieni', subtitle: 'Pięć stopni od xs do xl' },
    'depth-scrims': { name: 'Przesłony', subtitle: 'Zasłony tła, obrazu i mediów' },
    'depth-hero-surface': { name: 'Rozjaśnienie i poświata', subtitle: 'Wewnętrzne światło i halo marki' },
  },
};
