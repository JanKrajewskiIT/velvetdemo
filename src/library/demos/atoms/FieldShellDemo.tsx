import { Control, ControlInput, Field, Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';

export const FieldShellDemo = () => (
  <Stack gap={5}>
    <Grid min={220} gap={5}>
      <Field label="Email" hint="We only use it for receipts.">
        {(control) => (
          <Control iconLeft="mail">
            <ControlInput
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
            <ControlInput
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
            <ControlInput id={control.id} aria-describedby={control.describedBy} value="Product designer" />
          </Control>
        )}
      </Field>
    </Grid>
    <Stack gap={2}>
      <SectionLabel>Sizes and states</SectionLabel>
      <Grid min={160} gap={3}>
        <Control size="sm">
          <ControlInput aria-label="Small" placeholder="Small" />
        </Control>
        <Control>
          <ControlInput aria-label="Medium" placeholder="Medium" />
        </Control>
        <Control size="lg">
          <ControlInput aria-label="Large" placeholder="Large" />
        </Control>
        <Control disabled>
          <ControlInput aria-label="Disabled" placeholder="Disabled" disabled />
        </Control>
        <Control readOnly>
          <ControlInput aria-label="Read only" value="Read only" readOnly />
        </Control>
      </Grid>
    </Stack>
  </Stack>
);
