import { AudioPlayer, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import { createDemoTone, revokeDemoTone } from './createDemoTone';
import { sampleImage } from './sampleImages';

const COVER = sampleImage();

export const AudioPlayerDemo = () => {
  const tone = createDemoTone();
  const [failed, setFailed] = createSignal(false);

  onCleanup(() => revokeDemoTone(tone));

  return (
    <Stack gap={4}>
      <AudioPlayer
        src={tone}
        title="Morning drone"
        artist="Generated sample"
        cover={COVER.src}
        onError={() => setFailed(true)}
      />
      <AudioPlayer src={tone} size="sm" title="Voice note" onError={() => setFailed(true)} />
      <div role="status">
        <Show when={failed()}>
          <Text variant="caption" tone="danger">
            Audio playback failed. Try playing the sample again.
          </Text>
        </Show>
      </div>
    </Stack>
  );
};
