import { useI18n } from '@jankrajewskiit/i18n';
import type { OrderTicketOrder } from '@jankrajewskiit/ui';
import { Alert, Money, OrderTicket, Stack, Text } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

export const OrderTicketDemo = () => {
  const { ts } = useI18n();
  const [submitted, setSubmitted] = createSignal<OrderTicketOrder>();

  return (
    <Stack>
      <Text variant="body-sm" tone="secondary">
        {ts('library.trading.workspace.orderHint')}
      </Text>
      <OrderTicket
        symbol="GLBX"
        price={142.5}
        currency="EUR"
        defaultQty={10}
        equity={100000}
        buyingPower={25000}
        account="DEMO-042"
        envLabel={ts('library.trading.workspace.paper')}
        envTone="info"
        onSubmit={setSubmitted}
      />
      <div role="status">
        <Show when={submitted()}>
          {(order) => (
            <Alert tone="success" title={ts('library.trading.workspace.orderSaved')}>
              <Text as="p">
                {ts('library.trading.workspace.orderSummary', {
                  quantity: order().qty,
                  side: ts(order().side === 'buy' ? 'library.trading.workspace.buy' : 'library.trading.workspace.sell'),
                })}
              </Text>
              <Money amount={order().notional} currency="EUR" />
            </Alert>
          )}
        </Show>
      </div>
    </Stack>
  );
};
