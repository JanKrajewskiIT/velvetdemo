import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Lightbox, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import styles from './LightboxDemo.module.css';
import { sampleImages } from './sampleImages';

const IMAGES = sampleImages(5);

export const LightboxDemo = () => {
  const { ts } = useI18n();
  const [index, setIndex] = createSignal<number | null>(null);

  return (
    <Stack gap={4}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.media.demo.lightboxIntro')}
      </Text>
      <div class={styles.strip}>
        <For each={IMAGES}>
          {(image, position) => (
            <button
              type="button"
              class={styles.thumb}
              aria-label={ts('library.media.demo.openPhoto', {
                name: image.alt ?? ts('library.media.demo.photoFallback'),
              })}
              onClick={() => setIndex(position())}
            >
              <img class={styles.image} src={image.src} alt="" />
            </button>
          )}
        </For>
      </div>
      <div>
        <Button variant="secondary" onClick={() => setIndex(0)}>
          {ts('library.media.demo.openGallery')}
        </Button>
      </div>
      <Lightbox images={IMAGES} index={index()} onIndexChange={setIndex} onClose={() => setIndex(null)} />
    </Stack>
  );
};
