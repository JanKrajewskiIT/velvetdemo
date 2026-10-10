import {
  ActionRow,
  Button,
  FormGrid,
  FormLayout,
  FormSection,
  FormSpan,
  Input,
  RangeInput,
  Select,
  Text,
  Textarea,
} from '@jankrajewskiit/ui';

import type { formsEn } from '../../i18n/library/forms';
import { AccountSettingsDemo } from '../demos/forms/AccountSettingsDemo';
import { ErrorSummaryDemo } from '../demos/forms/ErrorSummaryDemo';
import { emailProblem, postalCodeProblem } from '../demos/forms/validators';
import { WizardDemo } from '../demos/forms/WizardDemo';
import type { Specimen, SpecimenIdOf } from '../types';

const COUNTRIES = ['Poland', 'Germany', 'France', 'Spain'];
const CURRENCIES = ['EUR', 'PLN', 'USD'];
const PERIODS = ['Hourly', 'Monthly', 'Yearly'];

export const formSpecimens: readonly Specimen<SpecimenIdOf<typeof formsEn>>[] = [
  {
    id: 'forms-layout',
    span: 8,
    render: () => (
      <FormLayout>
        <FormSection title="Profile" description="Shown to teammates and in comments.">
          <FormGrid columns={2}>
            <Input label="First name" defaultValue="Anna" />
            <Input label="Last name" defaultValue="Kowalska" />
            <FormSpan>
              <Textarea label="About" rows={3} hint="A line or two about your role." />
            </FormSpan>
            <Select label="Country" options={COUNTRIES} defaultValue="Poland" />
            <Input label="Job title" defaultValue="Product designer" />
          </FormGrid>
        </FormSection>
        <ActionRow
          divider
          start={
            <Text variant="caption" tone="secondary">
              Last saved 2 minutes ago
            </Text>
          }
        >
          <Button variant="secondary">Discard</Button>
          <Button type="submit">Save changes</Button>
        </ActionRow>
      </FormLayout>
    ),
  },
  {
    id: 'forms-range-input',
    span: 4,
    render: () => (
      <FormLayout as="div">
        <RangeInput
          label="Salary"
          defaultValue={{ min: 6000, max: 9000 }}
          unitOptions={CURRENCIES}
          defaultUnit="EUR"
          periodOptions={PERIODS}
          defaultPeriod="Monthly"
        />
        <RangeInput
          label="Floor area"
          suffix="m²"
          defaultValue={{ min: 40 }}
          hint="Leave a bound empty for an open range."
        />
        <RangeInput label="Budget" prefix="€" defaultValue={{ min: 1200, max: 800 }} />
      </FormLayout>
    ),
  },
  {
    id: 'forms-error-summary',
    span: 6,
    render: () => <ErrorSummaryDemo />,
  },
  {
    id: 'forms-validation',
    span: 6,
    render: () => (
      <FormLayout as="div">
        <Input
          label="Work email"
          type="email"
          placeholder="name@company.com"
          hint="Checked when you leave the field."
          validate={emailProblem}
        />
        <Input
          label="Postal code"
          placeholder="00-000"
          hint="Re-checked on every change once touched."
          validate={postalCodeProblem}
        />
        <Input label="Nickname" optional reserveHint />
        <Text variant="caption" tone="secondary">
          Fields that validate or reserve a hint keep a fixed message lane, so errors never shift the form.
        </Text>
      </FormLayout>
    ),
  },
  {
    id: 'forms-wizard',
    span: 12,
    render: () => <WizardDemo />,
  },
  {
    id: 'forms-account-settings',
    span: 12,
    render: () => <AccountSettingsDemo />,
  },
];
