import { useI18n } from '@jankrajewskiit/i18n';
import { ContextSwitcher, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

export const ContextSwitcherDemo = () => {
  const { ts } = useI18n();
  const [context, setContext] = createSignal('paper');

  return (
    <Stack align="start">
      <ContextSwitcher
        tone="surface"
        value={context()}
        onValueChange={setContext}
        label={ts('library.trading.workspace.context')}
        sectionLabel={ts('library.trading.workspace.context')}
        items={[
          { id: 'paper', label: ts('library.trading.workspace.paper'), tone: 'info' },
          { id: 'review', label: ts('library.trading.workspace.review'), tone: 'warning' },
        ]}
        confirmWhen={(next) => next.id === 'review'}
        confirmTitle={ts('library.trading.workspace.confirmContext')}
        confirmDescription={ts('library.trading.workspace.contextHint')}
      />
      <Text role="status" tone="secondary">
        {ts(context() === 'paper' ? 'library.trading.workspace.paper' : 'library.trading.workspace.review')}
      </Text>
    </Stack>
  );
};
