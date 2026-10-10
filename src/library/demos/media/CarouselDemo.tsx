import { Carousel, MediaFrame } from '@jankrajewskiit/ui';

import { sampleImages } from './sampleImages';

const IMAGES = sampleImages(5);

export const CarouselDemo = () => (
  <Carousel
    label="Landscape highlights"
    loop
    slides={IMAGES.map((image) => (
      <MediaFrame src={image.src} alt={image.alt} ratio="video" caption={image.caption} />
    ))}
  />
);
