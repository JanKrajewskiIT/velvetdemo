import { defineDictionary, type TranslationOf } from '@jankrajewskiit/i18n';

export const mediaEn = defineDictionary({
  title: 'Media',
  blurb: 'Carousels, lightbox, players and image tools.',
  specimens: {
    'media-carousel': { name: 'Carousel', subtitle: 'Arrows, dots, swipe and arrow keys' },
    'media-frame': { name: 'MediaFrame', subtitle: 'Captioned image, loading and empty states' },
    'media-image-grid': { name: 'ImageGrid', subtitle: 'Uniform tiles with a cover; opens Lightbox' },
    'media-image-grid-feature': { name: 'ImageGrid feature', subtitle: 'Hero plus two thumbs and a +N counter' },
    'media-image-grid-masonry': {
      name: 'ImageGrid masonry',
      subtitle: 'Natural image heights, two columns and a gallery limit',
    },
    'media-player-button': {
      name: 'PlayerButton',
      subtitle: 'Icon and text controls with pressed state and speed cycling',
    },
    'media-marquee': { name: 'Marquee', subtitle: 'Names and photos scrolling in both directions' },
    'media-lightbox': { name: 'Lightbox', subtitle: 'Full-screen viewer with keyboard, zoom and thumbnails' },
    'media-audio-player': { name: 'AudioPlayer', subtitle: 'Waveform scrubber, speed and mute; full and compact rows' },
    'media-video-player': { name: 'VideoPlayer', subtitle: 'Custom controls over a clip recorded in the browser' },
    'media-image-cropper': {
      name: 'ImageCropper',
      subtitle: 'Cover and avatar masks, controlled zoom, pan and rotation',
    },
  },
});

export const mediaPl: TranslationOf<typeof mediaEn> = {
  title: 'Multimedia',
  blurb: 'Karuzele, lightbox, odtwarzacze i narzędzia do obrazów.',
  specimens: {
    'media-carousel': { name: 'Carousel', subtitle: 'Strzałki, kropki, przesunięcie i klawisze strzałek' },
    'media-frame': { name: 'MediaFrame', subtitle: 'Obraz z podpisem, stany wczytywania i pusty' },
    'media-image-grid': { name: 'ImageGrid', subtitle: 'Jednolite kafelki z okładką; otwiera Lightbox' },
    'media-image-grid-feature': { name: 'ImageGrid feature', subtitle: 'Duży obraz, dwie miniatury i licznik +N' },
    'media-image-grid-masonry': {
      name: 'ImageGrid masonry',
      subtitle: 'Naturalne wysokości obrazów, dwie kolumny i limit galerii',
    },
    'media-player-button': {
      name: 'PlayerButton',
      subtitle: 'Kontrolki ikonowe i tekstowe ze stanem wciśnięcia i zmianą prędkości',
    },
    'media-marquee': { name: 'Marquee', subtitle: 'Nazwy i zdjęcia przewijane w obu kierunkach' },
    'media-lightbox': { name: 'Lightbox', subtitle: 'Podgląd pełnoekranowy z klawiaturą, powiększeniem i miniaturami' },
    'media-audio-player': {
      name: 'AudioPlayer',
      subtitle: 'Przewijanie po fali dźwięku, prędkość i wyciszenie; wersja pełna i kompaktowa',
    },
    'media-video-player': { name: 'VideoPlayer', subtitle: 'Własne kontrolki nad klipem nagranym w przeglądarce' },
    'media-image-cropper': {
      name: 'ImageCropper',
      subtitle: 'Maski okładki i awatara, kontrolowane powiększenie, ruch i obrót',
    },
  },
};
