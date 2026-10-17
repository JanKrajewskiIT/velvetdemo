import {
  Button,
  Checkmark,
  Chevron,
  CloseButton,
  Control,
  ControlInput,
  Handle,
  SectionLabel,
  Stack,
  Text,
} from '@jankrajewskiit/ui';
import { createSignal, createUniqueId } from 'solid-js';

export const DisclosureDismissDemo = () => {
  const [open, setOpen] = createSignal(false);
  const [search, setSearch] = createSignal('velvet');
  const panelId = createUniqueId();

  return (
    <Stack gap={5}>
      <Stack gap={2} align="flex-start">
        <SectionLabel>Chevron</SectionLabel>
        <Button
          variant="secondary"
          aria-expanded={open()}
          aria-controls={panelId}
          iconRight={<Chevron open={open()} />}
          onClick={() => setOpen(!open())}
        >
          Shipping details
        </Button>
        <Text id={panelId} variant="body-sm" tone="secondary" hidden={!open()}>
          Orders leave the warehouse within two working days.
        </Text>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Close button</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <CloseButton label="Close panel" />
          <CloseButton size="xs" label="Dismiss notice" />
          <Control
            end={
              <CloseButton variant="field" label="Clear search" disabled={!search()} onClick={() => setSearch('')} />
            }
          >
            <ControlInput
              aria-label="Search"
              value={search()}
              onInput={(event) => setSearch(event.currentTarget.value)}
            />
          </Control>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Handle</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <Handle label="Reorder Design (up or down)" />
          <Handle decorative />
          <Handle icon="lock" label="Locked" disabled />
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Checkmark</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <Checkmark />
          <Checkmark checked />
          <Checkmark indeterminate />
          <Checkmark radio checked />
          <Checkmark round checked />
          <Checkmark checked disabled />
        </Stack>
      </Stack>
    </Stack>
  );
};
