import { Grid, ImageGrid, MediaFrame, Stack } from '@jankrajewskiit/ui';

import type { mediaEn } from '../../i18n/library/media';
import { AudioPlayerDemo } from '../demos/media/AudioPlayerDemo';
import { CarouselDemo } from '../demos/media/CarouselDemo';
import { ImageCropperDemo } from '../demos/media/ImageCropperDemo';
import { LightboxDemo } from '../demos/media/LightboxDemo';
import { MarqueeDemo } from '../demos/media/MarqueeDemo';
import { PlayerButtonDemo } from '../demos/media/PlayerButtonDemo';
import { sampleImage, sampleImages } from '../demos/media/sampleImages';
import { VideoPlayerDemo } from '../demos/media/VideoPlayerDemo';
import type { Specimen, SpecimenIdOf } from '../types';

const FRAME_IMAGE = sampleImage();

const COVER_GRID_IMAGES = sampleImages(6).map((image, index) =>
  index === 0 ? { ...image, span: 2, badge: 'Cover' } : image,
);

const FEATURE_GRID_IMAGES = sampleImages(5);
const MASONRY_IMAGES = sampleImages(5).map((image, index) => ({
  ...image,
  ratio: index % 2 === 0 ? '4 / 3' : '3 / 4',
}));

export const mediaSpecimens: readonly Specimen<SpecimenIdOf<typeof mediaEn>>[] = [
  {
    id: 'media-carousel',
    span: 8,
    render: () => <CarouselDemo />,
  },
  {
    id: 'media-frame',
    span: 4,
    render: () => (
      <Stack gap={3}>
        <MediaFrame
          src={FRAME_IMAGE.src}
          alt={FRAME_IMAGE.alt}
          ratio="photo"
          caption="Dune ridge at dawn"
          credit="Generated sample"
          badge="New"
        />
        <Grid columns={2} gap={3}>
          <MediaFrame loading ratio="square" />
          <MediaFrame showRatio ratio="square" />
        </Grid>
      </Stack>
    ),
  },
  {
    id: 'media-image-grid',
    span: 6,
    render: () => <ImageGrid images={COVER_GRID_IMAGES} />,
  },
  {
    id: 'media-image-grid-feature',
    span: 6,
    render: () => <ImageGrid layout="feature" images={FEATURE_GRID_IMAGES} />,
  },
  {
    id: 'media-image-grid-masonry',
    span: 6,
    render: () => <ImageGrid layout="masonry" columns={2} max={4} images={MASONRY_IMAGES} />,
  },
  {
    id: 'media-player-button',
    span: 6,
    render: () => <PlayerButtonDemo />,
  },
  {
    id: 'media-marquee',
    span: 12,
    render: () => <MarqueeDemo />,
  },
  {
    id: 'media-lightbox',
    span: 6,
    render: () => <LightboxDemo />,
  },
  {
    id: 'media-audio-player',
    span: 6,
    render: () => <AudioPlayerDemo />,
  },
  {
    id: 'media-video-player',
    span: 6,
    render: () => <VideoPlayerDemo />,
  },
  {
    id: 'media-image-cropper',
    span: 6,
    render: () => <ImageCropperDemo />,
  },
];
