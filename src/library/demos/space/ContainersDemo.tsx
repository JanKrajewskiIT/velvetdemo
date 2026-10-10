import { Text } from '@jankrajewskiit/ui';

import styles from './ContainersDemo.module.css';
import { TokenBarList } from './TokenBarList';

const CONTAINER_TOKENS = [
  '--container-prose',
  '--container-sm',
  '--container-md',
  '--container-lg',
  '--container-xl',
  '--container-2xl',
] as const;

export const ContainersDemo = () => (
  <div class={styles.root}>
    <TokenBarList tokens={CONTAINER_TOKENS} />
    <Text variant="caption" tone="tertiary">
      Prose is measured in characters, so it tracks the body font. Page padding comes from --gutter.
    </Text>
  </div>
);
