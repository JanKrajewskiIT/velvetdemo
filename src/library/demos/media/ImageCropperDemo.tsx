import { useI18n } from '@jankrajewskiit/i18n';
import type { CropArea, ImageCropperProps } from '@jankrajewskiit/ui';
import { ImageCropper, Segmented, SegmentedItem, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { sampleImage } from './sampleImages';

const IMAGE = sampleImage();

export const ImageCropperDemo = () => {
  const { ts } = useI18n();
  const [area, setArea] = createSignal<CropArea>();
  const describeCrop = (crop: CropArea): string =>
    ts('library.media.demo.cropReadout', {
      x: Math.round(crop.x),
      y: Math.round(crop.y),
      width: Math.round(crop.width),
      height: Math.round(crop.height),
      zoom: crop.zoom.toFixed(2),
      rotation: Math.round(crop.rotation),
    });
  const [shape, setShape] = createSignal<NonNullable<ImageCropperProps['shape']>>('rect');
  const [zoom, setZoom] = createSignal(1);

  return (
    <Stack gap={3}>
      <Segmented role="group" aria-label={ts('library.media.demo.cropShape')}>
        <SegmentedItem selected={shape() === 'rect'} onClick={() => setShape('rect')}>
          {ts('library.media.demo.cropCover')}
        </SegmentedItem>
        <SegmentedItem selected={shape() === 'circle'} onClick={() => setShape('circle')}>
          {ts('library.media.demo.cropAvatar')}
        </SegmentedItem>
      </Segmented>
      <ImageCropper
        src={IMAGE.src}
        alt={IMAGE.alt}
        shape={shape()}
        aspect={4 / 3}
        height={280}
        zoom={zoom()}
        onZoomChange={setZoom}
        onCropChange={setArea}
      />
      <div>
        <Show when={area()} fallback={<Text variant="caption">{ts('library.media.demo.cropHint')}</Text>}>
          {(current) => (
            <Text variant="caption" tone="secondary" tabular>
              {describeCrop(current())}
            </Text>
          )}
        </Show>
      </div>
    </Stack>
  );
};
