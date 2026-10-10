import { Button, Lightbox, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './LightboxDemo.module.css';
import { sampleImages } from './sampleImages';

const IMAGES = sampleImages(5);

export const LightboxDemo = () => {
  const [index, setIndex] = createSignal<number | null>(null);

  return (
    <Stack gap={4}>
      <Text variant="body-sm" tone="secondary">
        Open a photo to browse with arrow keys, zoom with a click and close with Escape.
      </Text>
      <div class={styles.strip}>
        <For each={IMAGES}>
          {(image, position) => (
            <button
              type="button"
              class={styles.thumb}
              aria-label={`Open ${image.alt ?? 'photo'} in the lightbox`}
              onClick={() => setIndex(position())}
            >
              <img class={styles.image} src={image.src} alt="" />
            </button>
          )}
        </For>
      </div>
      <div>
        <Button variant="secondary" onClick={() => setIndex(0)}>
          Open gallery
        </Button>
      </div>
      <Lightbox images={IMAGES} index={index()} onIndexChange={setIndex} onClose={() => setIndex(null)} />
    </Stack>
  );
};
