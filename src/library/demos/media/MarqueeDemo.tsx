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

export const MarqueeDemo = () => (
  <Stack gap={5}>
    <Marquee label="Partner names">
      <For each={PARTNERS}>
        {(name) => (
          <Text as="span" variant="title" tone="tertiary">
            {name}
          </Text>
        )}
      </For>
    </Marquee>
    <Marquee label="Photo strip" direction="right" speed={30} gap={16}>
      <For each={PHOTOS}>{(photo) => <img class={styles.photo} src={photo.src} alt={photo.alt} />}</For>
    </Marquee>
  </Stack>
);
