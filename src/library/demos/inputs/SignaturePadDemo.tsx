import { SignaturePad, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './SignaturePadDemo.module.css';

const PAD_HEIGHT_PX = 160;

export const SignaturePadDemo = () => {
  const [strokeCount, setStrokeCount] = createSignal(0);

  return (
    <div class={styles.root}>
      <SignaturePad
        label="Signature"
        hint="Draw with a mouse, finger or pen"
        height={PAD_HEIGHT_PX}
        onValueChange={(dataUrl, strokes) => setStrokeCount(dataUrl === null ? 0 : strokes.length)}
      />
      <Text as="p" variant="caption" tone="secondary" class={styles.status} aria-live="polite">
        <Show when={strokeCount() > 0} fallback="Signature is empty">
          Signed, strokes: {strokeCount()}
        </Show>
      </Text>
    </div>
  );
};
