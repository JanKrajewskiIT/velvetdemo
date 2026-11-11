import { useI18n } from '@jankrajewskiit/i18n';
import { Carousel, MediaFrame } from '@jankrajewskiit/ui';

import { sampleImages } from './sampleImages';

const IMAGES = sampleImages(5);

export const CarouselDemo = () => {
  const { ts } = useI18n();

  return (
    <Carousel
      label={ts('library.media.demo.carouselLabel')}
      loop
      slides={IMAGES.map((image) => (
        <MediaFrame src={image.src} alt={image.alt} ratio="video" caption={image.caption} />
      ))}
    />
  );
};
