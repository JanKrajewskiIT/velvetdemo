import { useI18n } from '@jankrajewskiit/i18n';
import { Button, IconButton, Stack, Text, Tour, type TourStep } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const SEARCH_ID = 'overlays-tour-search';
const CREATE_ID = 'overlays-tour-create';

export const TourDemo = () => {
  const { ts } = useI18n();
  const [open, setOpen] = createSignal(false);
  const steps = (): TourStep[] => [
    { title: ts('library.overlays.demo.welcomeTitle'), body: ts('library.overlays.demo.welcomeBody') },
    {
      target: `#${SEARCH_ID}`,
      title: ts('library.overlays.demo.search'),
      body: ts('library.overlays.demo.searchBody'),
      placement: 'bottom',
    },
    {
      target: `#${CREATE_ID}`,
      title: ts('library.overlays.demo.create'),
      body: ts('library.overlays.demo.createBody'),
      placement: 'bottom',
    },
  ];

  return (
    <Stack gap={3}>
      <Stack direction="row" gap={2} wrap align="center">
        <IconButton
          id={SEARCH_ID}
          icon="search"
          label={ts('library.overlays.demo.search')}
          variant="secondary"
          size="sm"
        />
        <Button id={CREATE_ID} variant="secondary" size="sm" iconLeft="plus">
          {ts('library.overlays.demo.newProject')}
        </Button>
        <Button size="sm" onClick={() => setOpen(true)}>
          {ts('library.overlays.demo.startTour')}
        </Button>
      </Stack>
      <Text variant="caption" tone="secondary">
        {ts('library.overlays.demo.tourHint')}
      </Text>
      <Tour steps={steps()} open={open()} onClose={() => setOpen(false)} />
    </Stack>
  );
};
