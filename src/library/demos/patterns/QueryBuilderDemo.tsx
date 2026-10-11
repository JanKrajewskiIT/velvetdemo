import { useI18n } from '@jankrajewskiit/i18n';
import type { QueryGroup } from '@jankrajewskiit/ui';
import { Button, Checkbox, QueryBuilder, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { QUERY, QUERY_FIELDS } from './patternSamples';

export const QueryBuilderDemo = () => {
  const { ts } = useI18n();
  const [query, setQuery] = createSignal<QueryGroup>(QUERY);
  const [disabled, setDisabled] = createSignal(false);
  const [cleared, setCleared] = createSignal(false);
  const changeQuery = (next: QueryGroup) => {
    setQuery(next);
    setCleared(false);
  };

  return (
    <Stack gap={3}>
      <Checkbox
        checked={disabled()}
        onChange={(event) => setDisabled(event.currentTarget.checked)}
        label={ts('library.patterns.query.disabled')}
      />
      <QueryBuilder
        fields={QUERY_FIELDS}
        value={query()}
        onValueChange={changeQuery}
        clearable
        onClear={() => setCleared(true)}
        disabled={disabled()}
        showSummary
      />
      <p role="status">
        <Show when={cleared()}>{ts('library.patterns.query.cleared')}</Show>
      </p>
      <Text variant="caption" tone="secondary">
        {ts('library.patterns.query.hint')}
      </Text>
      <Button size="sm" variant="secondary" disabled={disabled()} onClick={() => changeQuery(QUERY)}>
        {ts('library.patterns.query.restore')}
      </Button>
    </Stack>
  );
};
