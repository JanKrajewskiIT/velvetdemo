import { useI18n } from '@jankrajewskiit/i18n';
import { PlayerButton, Stack, Surface, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const RATES = [1, 1.5, 2] as const;

export const PlayerButtonDemo = () => {
  const { ts } = useI18n();
  const [playing, setPlaying] = createSignal(false);
  const [muted, setMuted] = createSignal(false);
  const [rateIndex, setRateIndex] = createSignal(0);
  const rate = () => RATES[rateIndex()] ?? RATES[0];
  const playIcon = () => (playing() ? 'pause' : 'play');
  const playLabel = () => (playing() ? ts('library.media.demo.pausePreview') : ts('library.media.demo.playPreview'));
  const playState = () => (playing() ? ts('library.media.demo.playing') : ts('library.media.demo.paused'));
  const soundState = () => (muted() ? ts('library.media.demo.muted') : ts('library.media.demo.soundOn'));

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
          <PlayerButton
            icon="volume"
            label={ts('library.media.demo.mutePreview')}
            pressed={muted()}
            onClick={() => setMuted(!muted())}
          />
          <PlayerButton
            label={ts('library.media.demo.rateLabel', { rate: rate() })}
            onClick={() => setRateIndex((current) => (current + 1) % RATES.length)}
          >
            {rate()}×
          </PlayerButton>
        </Stack>
      </Surface>
      <Text variant="caption" tone="secondary">
        {ts('library.media.demo.controlState', { playState: playState(), soundState: soundState(), rate: rate() })}
      </Text>
    </Stack>
  );
};
