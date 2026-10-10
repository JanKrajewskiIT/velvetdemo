import { Button, IconButton, Stack, Text, Tour, type TourStep } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const SEARCH_ID = 'overlays-tour-search';
const CREATE_ID = 'overlays-tour-create';

const STEPS: TourStep[] = [
  { title: 'Welcome', body: 'A short tour of the toolbar. Use the arrow keys or the buttons.' },
  { target: `#${SEARCH_ID}`, title: 'Search', body: 'Find anything in your workspace.', placement: 'bottom' },
  { target: `#${CREATE_ID}`, title: 'Create', body: 'Start a new project from here.', placement: 'bottom' },
];

export const TourDemo = () => {
  const [open, setOpen] = createSignal(false);

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2} wrap align="center">
        <IconButton id={SEARCH_ID} icon="search" label="Search" variant="secondary" size="sm" />
        <Button id={CREATE_ID} variant="secondary" size="sm" iconLeft="plus">
          New project
        </Button>
        <Button size="sm" onClick={() => setOpen(true)}>
          Start tour
        </Button>
      </Stack>
      <Text variant="caption" tone="secondary">
        Arrow keys move between steps; Esc skips the tour.
      </Text>
      <Tour steps={STEPS} open={open()} onClose={() => setOpen(false)} />
    </Stack>
  );
};
