import { PlayerButton, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const RATES = [1, 1.5, 2] as const;

export const PlayerButtonDemo = () => {
  const [playing, setPlaying] = createSignal(false);
  const [muted, setMuted] = createSignal(false);
  const [rateIndex, setRateIndex] = createSignal(0);
  const rate = () => RATES[rateIndex()] ?? RATES[0];
  const playIcon = () => (playing() ? 'pause' : 'play');
  const playLabel = () => (playing() ? 'Pause preview' : 'Play preview');
  const playState = () => (playing() ? 'playing' : 'paused');
  const soundState = () => (muted() ? 'muted' : 'sound on');

  return (
    <Stack gap={3}>
      <Surface variant="inverse" padding="md">
        <Stack direction="row" gap={2} align="center" wrap>
          <PlayerButton
            icon={playIcon()}
            label={playLabel()}
            pressed={playing()}
            onClick={() => setPlaying(!playing())}
          />
          <PlayerButton icon="volume" label="Mute preview" pressed={muted()} onClick={() => setMuted(!muted())} />
          <PlayerButton
            label={`Playback speed ${rate()} times`}
            onClick={() => setRateIndex((current) => (current + 1) % RATES.length)}
          >
            {rate()}×
          </PlayerButton>
        </Stack>
      </Surface>
      <Text variant="caption" tone="secondary">
        Control state preview: {playState()}, {soundState()}, {rate()}× speed.
      </Text>
    </Stack>
  );
};
