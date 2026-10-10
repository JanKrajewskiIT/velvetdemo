import { Text } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, onMount } from 'solid-js';

import styles from './BreakpointsDemo.module.css';
import { TokenBarList } from './TokenBarList';

const BREAKPOINT_TOKENS = ['--bp-sm', '--bp-md', '--bp-lg', '--bp-xl', '--bp-2xl'] as const;

export const BreakpointsDemo = () => {
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
        Viewport {viewport()} px. The highlighted row is the active minimum width.
      </Text>
      <TokenBarList tokens={BREAKPOINT_TOKENS} viewport={viewport()} />
      <Text variant="caption" tone="tertiary">
        Breakpoints are documented as tokens but written as literals in media queries.
      </Text>
    </div>
  );
};
