import { useI18n } from '@jankrajewskiit/i18n';
import { Card, Grid, type SurfaceVariant } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

const VARIANT_NOTES = {
  default: 'library.cards.demo.variantNotes.default',
  low: 'library.cards.demo.variantNotes.low',
  flat: 'library.cards.demo.variantNotes.flat',
  raised: 'library.cards.demo.variantNotes.raised',
  subtle: 'library.cards.demo.variantNotes.subtle',
  sunken: 'library.cards.demo.variantNotes.sunken',
  brand: 'library.cards.demo.variantNotes.brand',
  'brand-solid': 'library.cards.demo.variantNotes.brandSolid',
  inverse: 'library.cards.demo.variantNotes.inverse',
  overlay: 'library.cards.demo.variantNotes.overlay',
  dialog: 'library.cards.demo.variantNotes.dialog',
  glass: 'library.cards.demo.variantNotes.glass',
} as const satisfies Record<SurfaceVariant, string>;

const VARIANTS = Object.keys(VARIANT_NOTES) as SurfaceVariant[];

export const CardVariantsDemo = () => {
  const { ts } = useI18n();

  return (
    <Grid min={176} gap={3}>
      <For each={VARIANTS}>
        {(variant) => (
          <Card variant={variant} padding="sm" title={variant}>
            {ts(VARIANT_NOTES[variant])}
          </Card>
        )}
      </For>
    </Grid>
  );
};
