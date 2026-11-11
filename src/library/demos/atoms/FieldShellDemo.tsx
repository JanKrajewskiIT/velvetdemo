import { useI18n } from '@jankrajewskiit/i18n';
import { Control, ControlInput, Field, Grid, SectionLabel, Stack } from '@jankrajewskiit/ui';

export const FieldShellDemo = () => {
  const { ts } = useI18n();

  return (
    <Stack gap={5}>
      <Grid min={220} gap={5}>
        <Field label={ts('library.atoms.fieldShell.email')} hint={ts('library.atoms.fieldShell.emailHint')}>
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
        <Field
          label={ts('library.atoms.fieldShell.username')}
          error={ts('library.atoms.fieldShell.usernameTaken')}
          required
        >
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
        <Field label={ts('library.atoms.fieldShell.shortBio')} optional count={16} maxCount={80}>
          {(control) => (
            <Control>
              <ControlInput id={control.id} aria-describedby={control.describedBy} value="Product designer" />
            </Control>
          )}
        </Field>
      </Grid>
      <Stack gap={2}>
        <SectionLabel>{ts('library.atoms.fieldShell.sizesAndStates')}</SectionLabel>
        <Grid min={160} gap={3}>
          <Control size="sm">
            <ControlInput
              aria-label={ts('library.atoms.fieldShell.small')}
              placeholder={ts('library.atoms.fieldShell.small')}
            />
          </Control>
          <Control>
            <ControlInput
              aria-label={ts('library.atoms.fieldShell.medium')}
              placeholder={ts('library.atoms.fieldShell.medium')}
            />
          </Control>
          <Control size="lg">
            <ControlInput
              aria-label={ts('library.atoms.fieldShell.large')}
              placeholder={ts('library.atoms.fieldShell.large')}
            />
          </Control>
          <Control disabled>
            <ControlInput
              aria-label={ts('library.atoms.fieldShell.disabled')}
              placeholder={ts('library.atoms.fieldShell.disabled')}
              disabled
            />
          </Control>
          <Control readOnly>
            <ControlInput
              aria-label={ts('library.atoms.fieldShell.readOnly')}
              value={ts('library.atoms.fieldShell.readOnly')}
              readOnly
            />
          </Control>
        </Grid>
      </Stack>
    </Stack>
  );
};
