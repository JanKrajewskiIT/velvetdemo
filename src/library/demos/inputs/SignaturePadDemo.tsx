import { useI18n } from '@jankrajewskiit/i18n';
import { SignaturePad, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './SignaturePadDemo.module.css';

const PAD_HEIGHT_PX = 160;

export const SignaturePadDemo = () => {
  const { ts } = useI18n();
  const [strokeCount, setStrokeCount] = createSignal(0);

  return (
    <div class={styles.root}>
      <SignaturePad
        label={ts('library.inputs.demos.signature.label')}
        hint={ts('library.inputs.demos.signature.hint')}
        height={PAD_HEIGHT_PX}
        onValueChange={(dataUrl, strokes) => setStrokeCount(dataUrl === null ? 0 : strokes.length)}
      />
      <Text as="p" variant="caption" tone="secondary" class={styles.status} aria-live="polite">
        <Show when={strokeCount() > 0} fallback={ts('library.inputs.demos.signature.empty')}>
          {ts('library.inputs.demos.signature.signed', { strokes: strokeCount() })}
        </Show>
      </Text>
    </div>
  );
};
