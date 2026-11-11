import { useI18n } from '@jankrajewskiit/i18n';
import { addMonths, PeriodNav, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createMemo, createSignal, For } from 'solid-js';

const VARIANTS = [
  { id: 'attached', attached: true, variant: 'secondary', today: true },
  { id: 'ghost', attached: false, variant: 'ghost', today: true },
  { id: 'arrows', attached: true, variant: 'secondary', today: false },
] as const;

const currentMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};

export const PeriodNavDemo = () => {
  const { ts, locale } = useI18n();
  const [month, setMonth] = createSignal(currentMonth());
  const formatter = createMemo(() => new Intl.DateTimeFormat(locale(), { month: 'long', year: 'numeric' }));
  const previous = () => setMonth((value) => addMonths(value, -1));
  const next = () => setMonth((value) => addMonths(value, 1));
  const today = () => setMonth(currentMonth());

  return (
    <Stack gap={4}>
      <Text aria-live="polite">{formatter().format(month())}</Text>
      <For each={VARIANTS}>
        {(item) => (
          <Stack gap={2}>
            <SectionLabel>{ts(`library.navigation.period.${item.id}`)}</SectionLabel>
            <PeriodNav
              attached={item.attached}
              variant={item.variant}
              onPrev={previous}
              onNext={next}
              onToday={item.today ? today : undefined}
              prevLabel={ts('library.navigation.period.previous')}
              nextLabel={ts('library.navigation.period.next')}
              todayLabel={ts('library.navigation.period.today')}
            />
          </Stack>
        )}
      </For>
    </Stack>
  );
};
