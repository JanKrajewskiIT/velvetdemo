import { useI18n } from '@jankrajewskiit/i18n';
import { Checkbox, ContributionBar, Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const ContributionBarDemo = () => {
  const { ts } = useI18n();
  const [sort, setSort] = createSignal(false);
  const items = () => [
    { label: ts('library.finance.controls.bonds'), value: 0.8 },
    { label: ts('library.finance.controls.equities'), value: 2.4 },
    { label: ts('library.finance.controls.currency'), value: -1.3 },
    { label: ts('library.finance.controls.fees'), value: -0.2 },
  ];
  return (
    <Stack>
      <Checkbox
        label={ts('library.finance.controls.sort')}
        checked={sort()}
        onChange={(event) => setSort(event.currentTarget.checked)}
      />
      <ContributionBar items={items()} unit="%" digits={1} sort={sort()} labelWidth="30%" />
    </Stack>
  );
};
