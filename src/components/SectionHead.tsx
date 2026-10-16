import { Heading, Text } from '@jankrajewskiit/ui';
import type { JSX } from 'solid-js';

import styles from './SectionHead.module.css';

export interface SectionHeadProps {
  overline: string;
  title: string;
  children: JSX.Element;
}

export const SectionHead = (props: SectionHeadProps) => (
  <div class={styles.head}>
    <div>
      <Text variant="overline" tone="tertiary">
        {props.overline}
      </Text>
      <Heading level={2} variant="display-sm" class={styles.title}>
        {props.title}
      </Heading>
    </div>
    <Text as="p" variant="body-lg" tone="secondary" class={styles.lead}>
      {props.children}
    </Text>
  </div>
);
