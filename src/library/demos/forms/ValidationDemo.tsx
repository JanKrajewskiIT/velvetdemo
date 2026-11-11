import { useI18n } from '@jankrajewskiit/i18n';
import { FormLayout, Input, Text } from '@jankrajewskiit/ui';

import { makeProblems } from './validators';

export const ValidationDemo = () => {
  const { ts } = useI18n();
  const problems = makeProblems(ts);

  return (
    <FormLayout as="div">
      <Input
        label="Work email"
        type="email"
        placeholder="name@company.com"
        hint="Checked when you leave the field."
        validate={problems.email}
      />
      <Input
        label="Postal code"
        placeholder="00-000"
        hint="Re-checked on every change once touched."
        validate={problems.postalCode}
      />
      <Input label="Nickname" optional reserveHint />
      <Text variant="caption" tone="secondary">
        Fields that validate or reserve a hint keep a fixed message lane, so errors never shift the form.
      </Text>
    </FormLayout>
  );
};
