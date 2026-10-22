import { useI18n } from '@jankrajewskiit/i18n';
import { Button, type GateItem, GateList, SectionLabel, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const GateListDemo = () => {
  const { ts } = useI18n();
  const [resolved, setResolved] = createSignal(false);
  const allStatuses = (): GateItem[] => [
    { id: 'identity', label: ts('library.feedback.gates.identity'), status: 'pass', code: 'AUTH-01' },
    {
      id: 'billing',
      label: ts('library.feedback.gates.billing'),
      detail: ts('library.feedback.gates.billingDetail'),
      status: 'fail',
      code: 'BILL-02',
    },
    {
      id: 'quota',
      label: ts('library.feedback.gates.quota'),
      detail: ts('library.feedback.gates.quotaDetail'),
      status: 'warn',
      code: 'LIMIT-03',
    },
    { id: 'migration', label: ts('library.feedback.gates.migration'), status: 'skip', code: 'DATA-04' },
    {
      id: 'review',
      label: ts('library.feedback.gates.review'),
      status: 'pending',
      code: 'REV-05',
    },
  ];
  const items = (): GateItem[] => {
    if (!resolved()) return allStatuses();
    return allStatuses().map<GateItem>((item) => {
      if (item.status === 'fail' || item.status === 'pending') return { ...item, status: 'pass' };
      return item;
    });
  };
  const status = () => ts(resolved() ? 'library.feedback.gates.ready' : 'library.feedback.gates.blocked');
  const action = () => ts(resolved() ? 'library.feedback.gates.reset' : 'library.feedback.gates.resolve');

  return (
    <Stack gap={5}>
      <Stack gap={3}>
        <SectionLabel>{ts('library.feedback.gates.ordered')}</SectionLabel>
        <GateList items={items()} />
        <Text variant="caption" role="status">
          {status()}
        </Text>
        <Button size="sm" variant="secondary" onClick={() => setResolved((value) => !value)}>
          {action()}
        </Button>
      </Stack>
      <Stack gap={3}>
        <SectionLabel>{ts('library.feedback.gates.unordered')}</SectionLabel>
        <GateList items={allStatuses()} ordered={false} stopAtFirstFail={false} size="sm" />
      </Stack>
    </Stack>
  );
};
