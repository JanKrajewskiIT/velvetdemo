import type { Billing, PricingTier } from '@jankrajewskiit/ui';
import { PricingTable } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './PricingDemo.module.css';

const TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: '$0', yearly: '$0' },
    blurb: 'For one person trying things out.',
    features: [
      '1 workspace',
      '3 projects',
      'Community support',
      { label: 'SSO', included: false },
      { label: 'Audit log', included: false },
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    price: { monthly: '$24', yearly: '$240' },
    note: { monthly: 'per seat', yearly: 'per seat, $20 per month' },
    blurb: 'For teams shipping every week.',
    featured: true,
    includes: 'Everything in Starter, plus',
    features: ['Unlimited projects', 'SSO', 'Priority support', 'Custom labels'],
  },
  {
    id: 'atlas',
    name: 'Atlas',
    price: 'Talk to us',
    blurb: 'For organisations with compliance needs.',
    cta: 'Contact sales',
    includes: 'Everything in Studio, plus',
    features: ['Dedicated instance', 'Audit log', '99.95% uptime SLA'],
  },
];

export const PricingDemo = () => {
  const [message, setMessage] = createSignal('Current plan: Starter.');
  const select = (tier: PricingTier, billing: Billing) => setMessage(`Selected ${tier.name}, billed ${billing}.`);

  return (
    <div class={styles.root}>
      <PricingTable tiers={TIERS} yearlyNote="2 months free" current="starter" onSelect={select} />
      <p class={styles.status} role="status">
        {message()}
      </p>
    </div>
  );
};
