import type { CropArea, ImageCropperProps } from '@jankrajewskiit/ui';
import { ImageCropper, Segmented, SegmentedItem, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { sampleImage } from './sampleImages';

const IMAGE = sampleImage();

const describeCrop = (area: CropArea): string =>
  `x ${Math.round(area.x)}, y ${Math.round(area.y)}, ${Math.round(area.width)} × ${Math.round(area.height)} px, ` +
  `zoom ${area.zoom.toFixed(2)}×, rotation ${Math.round(area.rotation)}°`;

export const ImageCropperDemo = () => {
  const [area, setArea] = createSignal<CropArea>();
  const [shape, setShape] = createSignal<NonNullable<ImageCropperProps['shape']>>('rect');
  const [zoom, setZoom] = createSignal(1);

  return (
    <Stack gap={3}>
      <Segmented role="group" aria-label="Crop shape">
        <SegmentedItem selected={shape() === 'rect'} onClick={() => setShape('rect')}>
          Cover
        </SegmentedItem>
        <SegmentedItem selected={shape() === 'circle'} onClick={() => setShape('circle')}>
          Avatar
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
        <Show when={area()} fallback={<Text variant="caption">Drag, zoom or rotate to change the crop</Text>}>
          {(current) => (
            <Text variant="caption" tone="secondary" tabular>
              Crop: {describeCrop(current())}
            </Text>
          )}
        </Show>
      </div>
    </Stack>
  );
};
