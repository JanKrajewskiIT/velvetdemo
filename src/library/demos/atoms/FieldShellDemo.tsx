import { Control, Field, Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';

export const FieldShellDemo = () => (
  <Stack gap={5}>
    <Grid min={220} gap={5}>
      <Field label="Email" hint="We only use it for receipts.">
        {(control) => (
          <Control iconLeft="mail">
            <input
              class="vui-control__input"
              id={control.id}
              type="email"
              aria-describedby={control.describedBy}
              placeholder="you@example.com"
            />
          </Control>
        )}
      </Field>
      <Field label="Username" error="That username is taken." required>
        {(control) => (
          <Control invalid prefix="@">
            <input
              class="vui-control__input"
              id={control.id}
              aria-invalid={control.invalid}
              aria-describedby={control.describedBy}
              required={control.required}
              value="velvet"
            />
          </Control>
        )}
      </Field>
      <Field label="Short bio" optional count={16} maxCount={80}>
        {(control) => (
          <Control>
            <input
              class="vui-control__input"
              id={control.id}
              aria-describedby={control.describedBy}
              value="Product designer"
            />
          </Control>
        )}
      </Field>
    </Grid>
    <Stack gap={2}>
      <SectionLabel>Sizes and states</SectionLabel>
      <Grid min={160} gap={3}>
        <Control size="sm">
          <input class="vui-control__input" aria-label="Small" placeholder="Small" />
        </Control>
        <Control>
          <input class="vui-control__input" aria-label="Medium" placeholder="Medium" />
        </Control>
        <Control size="lg">
          <input class="vui-control__input" aria-label="Large" placeholder="Large" />
        </Control>
        <Control disabled>
          <input class="vui-control__input" aria-label="Disabled" placeholder="Disabled" disabled />
        </Control>
        <Control readOnly>
          <input class="vui-control__input" aria-label="Read only" value="Read only" readOnly />
        </Control>
      </Grid>
    </Stack>
  </Stack>
);
