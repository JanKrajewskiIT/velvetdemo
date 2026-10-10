import { Count, Dot, Glyph, SectionLabel, Stack, Swatch, Text, TONES } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

const SWATCH_TONES = ['brand', 'blue', 'teal', 'violet', 'magenta', 'slate'] as const;
const GLYPH_SIZES = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

export const StatusMarksDemo = () => {
  const [swatch, setSwatch] = createSignal<(typeof SWATCH_TONES)[number]>('brand');

  return (
    <Stack gap={5}>
      <Stack gap={2}>
        <SectionLabel>Dot</SectionLabel>
        <Stack direction="row" gap={4} align="center" wrap>
          <For each={TONES}>
            {(tone) => (
              <Stack direction="row" gap={2} align="center">
                <Dot tone={tone} />
                <Text variant="caption" as="span">
                  {tone}
                </Text>
              </Stack>
            )}
          </For>
          <Stack direction="row" gap={2} align="center">
            <Dot tone="success" pulse />
            <Text variant="caption" as="span">
              live
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Count</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <Count value={3} label="3 unread" />
          <Count value={120} label="More than 99" />
          <Count value={0} showZero label="None" />
          <Count value={7} tone="danger" label="7 failed" />
          <Count value={7} tone="success" label="7 passed" />
          <Count value={7} tone="soft" label="7 drafts" />
          <Count value={7} tone="neutral" size="lg" label="7 archived" />
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Swatch</SectionLabel>
        <Stack direction="row" gap={2} align="center" wrap>
          <For each={SWATCH_TONES}>
            {(tone) => (
              <Swatch tone={tone} label={tone} round selected={swatch() === tone} onClick={() => setSwatch(tone)} />
            )}
          </For>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Glyph</SectionLabel>
        <Stack direction="row" gap={5} align="end" wrap>
          <For each={GLYPH_SIZES}>
            {(size) => (
              <Stack gap={1} align="center">
                <Glyph name="star" size={size} />
                <Text variant="caption" tone="tertiary" mono as="span">
                  {size}
                </Text>
              </Stack>
            )}
          </For>
          <Glyph name="heart-filled" size={32} label="Liked" />
        </Stack>
      </Stack>
    </Stack>
  );
};
