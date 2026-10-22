import { useI18n } from '@jankrajewskiit/i18n';
import { Checkbox, MoneyPrivacy, Stack } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { PrivateBalances } from './PrivateBalances';

export const MoneyPrivacyDemo = () => {
  const { ts } = useI18n();
  const [hidden, setHidden] = createSignal(false);
  return (
    <Stack>
      <Checkbox
        label={ts('library.finance.controls.hideAmounts')}
        checked={hidden()}
        onChange={(event) => setHidden(event.currentTarget.checked)}
      />
      <MoneyPrivacy hidden={hidden()}>
        <PrivateBalances />
      </MoneyPrivacy>
    </Stack>
  );
};
