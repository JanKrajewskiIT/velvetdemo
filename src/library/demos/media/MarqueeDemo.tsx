import { useI18n } from '@jankrajewskiit/i18n';
import { Marquee, Stack, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './MarqueeDemo.module.css';
import { sampleImages } from './sampleImages';

const PARTNERS = [
  'Northwind',
  'Harbour & Co',
  'Fieldstone',
  'Linden',
  'Marlowe',
  'Ashgrove',
  'Copperleaf',
  'Tidewater',
];

const PHOTOS = sampleImages(8);

export const MarqueeDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Marquee label={ts('library.media.demo.partnersLabel')}>
        <For each={PARTNERS}>
          {(name) => (
            <Text as="span" variant="title" tone="tertiary">
              {name}
            </Text>
          )}
        </For>
      </Marquee>
      <Marquee label={ts('library.media.demo.photoStripLabel')} direction="right" speed={30} gap={16}>
        <For each={PHOTOS}>{(photo) => <img class={styles.photo} src={photo.src} alt={photo.alt} />}</For>
      </Marquee>
    </Stack>
  );
};
