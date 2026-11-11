import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, onMount } from 'solid-js';

import styles from './BreakpointsDemo.module.css';
import { TokenBarList } from './TokenBarList';

const BREAKPOINT_TOKENS = ['--bp-sm', '--bp-md', '--bp-lg', '--bp-xl', '--bp-2xl'] as const;

export const BreakpointsDemo = () => {
  const { ts } = useI18n();
  const [viewport, setViewport] = createSignal(0);

  onMount(() => {
    const update = () => setViewport(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    onCleanup(() => window.removeEventListener('resize', update));
  });

  return (
    <div class={styles.root}>
      <Text variant="body-sm" tone="secondary" tabular>
        {ts('library.spaceLayout.breakpoints.viewport', { px: viewport() })}
      </Text>
      <TokenBarList tokens={BREAKPOINT_TOKENS} viewport={viewport()} />
      <Text variant="caption" tone="tertiary">
        {ts('library.spaceLayout.breakpoints.note')}
      </Text>
    </div>
  );
};
