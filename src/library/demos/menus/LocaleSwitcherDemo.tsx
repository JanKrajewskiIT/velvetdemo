import { isSupportedLocale, useI18n } from '@jankrajewskiit/i18n';
import { LocaleSwitcher, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

const CUSTOM_LOCALES = [
  { value: 'pl', label: 'PL', name: 'Polski' },
  { value: 'en', label: 'EN', name: 'English' },
  { value: 'de', label: 'DE', name: 'Deutsch' },
];

export const LocaleSwitcherDemo = () => {
  const { ts, locale, setLocale } = useI18n();
  const [customLocale, setCustomLocale] = createSignal('de');
  const changeLocale = (value: string) => {
    if (isSupportedLocale(value)) setLocale(value);
  };

  return (
    <Stack>
      <Text variant="caption" tone="secondary">
        {ts('library.menus.locale.page')}
      </Text>
      <Stack direction="row" wrap>
        <LocaleSwitcher value={locale()} onChange={changeLocale} />
        <LocaleSwitcher value={locale()} onChange={changeLocale} size="md" />
      </Stack>
      <Text variant="caption" tone="secondary">
        {ts('library.menus.locale.custom')}
      </Text>
      <Stack direction="row">
        <LocaleSwitcher value={customLocale()} onChange={setCustomLocale} locales={CUSTOM_LOCALES} />
      </Stack>
    </Stack>
  );
};
