import { useI18n } from '@jankrajewskiit/i18n';
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
import { ValidationDemo } from '../demos/forms/ValidationDemo';
import { WizardDemo } from '../demos/forms/WizardDemo';
import type { Specimen, SpecimenIdOf } from '../types';

const CURRENCIES = ['EUR', 'PLN', 'USD'];

export const formSpecimens: readonly Specimen<SpecimenIdOf<typeof formsEn>>[] = [
  {
    id: 'forms-layout',
    span: 8,
    render: () => {
      const { t } = useI18n();
      const countries = [
        t('library.forms.specimens.forms-layout.countryPoland'),
        t('library.forms.specimens.forms-layout.countryGermany'),
        t('library.forms.specimens.forms-layout.countryFrance'),
        t('library.forms.specimens.forms-layout.countrySpain'),
      ];
      return (
        <FormLayout>
          <FormSection
            title={t('library.forms.specimens.forms-layout.profileTitle')}
            description={t('library.forms.specimens.forms-layout.profileDescription')}
          >
            <FormGrid columns={2}>
              <Input label={t('library.forms.specimens.forms-layout.firstName')} defaultValue="Anna" />
              <Input label={t('library.forms.specimens.forms-layout.lastName')} defaultValue="Kowalska" />

              <FormSpan>
                <Textarea
                  label={t('library.forms.specimens.forms-layout.about')}
                  rows={3}
                  hint={t('library.forms.specimens.forms-layout.aboutHint')}
                />
              </FormSpan>
              <Select
                label={t('library.forms.specimens.forms-layout.country')}
                options={countries}
                defaultValue={countries[0]}
              />
              <Input
                label={t('library.forms.specimens.forms-layout.jobTitle')}
                defaultValue={t('library.forms.specimens.forms-layout.jobTitleValue')}
              />
            </FormGrid>
          </FormSection>
          <ActionRow
            divider
            start={
              <Text variant="caption" tone="secondary">
                {t('library.forms.specimens.forms-layout.lastSaved')}
              </Text>
            }
          >
            <Button variant="secondary">{t('library.forms.specimens.forms-layout.discard')}</Button>
            <Button type="submit">{t('library.forms.specimens.forms-layout.saveChanges')}</Button>
          </ActionRow>
        </FormLayout>
      );
    },
  },
  {
    id: 'forms-range-input',
    span: 4,
    render: () => {
      const { t } = useI18n();
      const periods = [
        t('library.forms.specimens.forms-range-input.periodHourly'),
        t('library.forms.specimens.forms-range-input.periodMonthly'),
        t('library.forms.specimens.forms-range-input.periodYearly'),
      ];
      return (
        <FormLayout as="div">
          <RangeInput
            label={t('library.forms.specimens.forms-range-input.salary')}
            defaultValue={{ min: 6000, max: 9000 }}
            unitOptions={CURRENCIES}
            defaultUnit="EUR"
            periodOptions={periods}
            defaultPeriod={periods[1]}
          />
          <RangeInput
            label={t('library.forms.specimens.forms-range-input.floorArea')}
            suffix="m²"
            defaultValue={{ min: 40 }}
            hint={t('library.forms.specimens.forms-range-input.floorAreaHint')}
          />
          <RangeInput
            label={t('library.forms.specimens.forms-range-input.budget')}
            prefix="€"
            defaultValue={{ min: 1200, max: 800 }}
          />
        </FormLayout>
      );
    },
  },

  {
    id: 'forms-error-summary',
    span: 6,
    render: () => <ErrorSummaryDemo />,
  },
  {
    id: 'forms-validation',
    span: 6,
    render: () => <ValidationDemo />,
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
