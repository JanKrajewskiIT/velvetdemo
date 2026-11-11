import { useI18n } from '@jankrajewskiit/i18n';
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
  const { ts } = useI18n();
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
          {ts('library.atoms.disclosureDismiss.shippingDetails')}
        </Button>
        <Text id={panelId} variant="body-sm" tone="secondary" hidden={!open()}>
          {ts('library.atoms.disclosureDismiss.shippingText')}
        </Text>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Close button</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <CloseButton label={ts('library.atoms.disclosureDismiss.closePanel')} />
          <CloseButton size="xs" label={ts('library.atoms.disclosureDismiss.dismissNotice')} />
          <Control
            end={
              <CloseButton
                variant="field"
                label={ts('library.atoms.disclosureDismiss.clearSearch')}
                disabled={!search()}
                onClick={() => setSearch('')}
              />
            }
          >
            <ControlInput
              aria-label={ts('library.atoms.disclosureDismiss.search')}
              value={search()}
              onInput={(event) => setSearch(event.currentTarget.value)}
            />
          </Control>
        </Stack>
      </Stack>
      <Stack gap={2}>
        <SectionLabel>Handle</SectionLabel>
        <Stack direction="row" gap={3} align="center" wrap>
          <Handle label={ts('library.atoms.disclosureDismiss.reorderDesign')} />
          <Handle decorative />
          <Handle icon="lock" label={ts('library.atoms.disclosureDismiss.locked')} disabled />
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
