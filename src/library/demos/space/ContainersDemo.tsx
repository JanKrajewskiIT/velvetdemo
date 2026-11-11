import { useI18n } from '@jankrajewskiit/i18n';
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

export const ContainersDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.root}>
      <TokenBarList tokens={CONTAINER_TOKENS} />
      <Text variant="caption" tone="tertiary">
        {ts('library.spaceLayout.containers.note')}
      </Text>
    </div>
  );
};
