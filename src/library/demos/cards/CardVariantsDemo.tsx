import { Card, Grid, type SurfaceVariant } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

interface VariantNote {
  variant: SurfaceVariant;
  note: string;
}

const VARIANTS: readonly VariantNote[] = [
  { variant: 'default', note: 'Resting surface with a hairline border.' },
  { variant: 'low', note: 'Control-level elevation for dense toolbars.' },
  { variant: 'flat', note: 'No shadow, a stronger border.' },
  { variant: 'raised', note: 'Shadow instead of a border.' },
  { variant: 'subtle', note: 'Quiet fill to group content.' },
  { variant: 'sunken', note: 'Inset well for secondary areas.' },
  { variant: 'brand', note: 'Brand-tinted fill and border.' },
  { variant: 'brand-solid', note: 'Full brand fill for one focal card.' },
  { variant: 'inverse', note: 'Opposite theme for contrast.' },
  { variant: 'overlay', note: 'Elevated paint for floating content.' },
  { variant: 'dialog', note: 'Modal surface with dialog elevation.' },
  { variant: 'glass', note: 'Translucent surface with backdrop blur.' },
];

export const CardVariantsDemo = () => (
  <Grid min={176} gap={3}>
    <For each={VARIANTS}>
      {(item) => (
        <Card variant={item.variant} padding="sm" title={item.variant}>
          {item.note}
        </Card>
      )}
    </For>
  </Grid>
);
