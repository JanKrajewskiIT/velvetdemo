type OrderStatus = 'Paid' | 'Pending' | 'Refunded' | 'Failed';

export interface Order {
  id: number;
  reference: string;
  customer: string;
  status: OrderStatus;
  amount: number;
}

export const ORDER_STATUS_TONE = { Paid: 'success', Pending: 'info', Refunded: 'warning', Failed: 'danger' } as const;

const CUSTOMERS = [
  'Acme Sp. z o.o.',
  'Nordlicht GmbH',
  'Kowalski Logistics',
  'Harbour & Pine',
  'Studio Lumen',
  'Bluefield Labs',
  'Marrow Foods',
  'Orbit Cycles',
] as const;

const STATUSES: readonly OrderStatus[] = ['Paid', 'Paid', 'Paid', 'Pending', 'Refunded', 'Paid', 'Failed', 'Paid'];
const FIRST_REFERENCE = 10_000;
const AMOUNT_SPREAD = 48_000;
const AMOUNT_FLOOR = 1_200;
const AMOUNT_STRIDE = 7_919;

export const makeOrders = (count: number): Order[] =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    reference: `ORD-${FIRST_REFERENCE + i}`,
    customer: CUSTOMERS[i % CUSTOMERS.length] ?? '',
    status: STATUSES[(i * 3) % STATUSES.length] ?? 'Paid',
    amount: ((i * AMOUNT_STRIDE) % AMOUNT_SPREAD) / 100 + AMOUNT_FLOOR / 100,
  }));
