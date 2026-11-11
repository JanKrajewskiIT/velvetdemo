import { useI18n } from '@jankrajewskiit/i18n';
import type { Billing, PricingTier } from '@jankrajewskiit/ui';
import { PricingTable } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './PricingDemo.module.css';

export const PricingDemo = () => {
  const { ts } = useI18n();
  const tiers: PricingTier[] = [
    {
      id: 'starter',
      name: 'Starter',
      price: { monthly: '$0', yearly: '$0' },
      blurb: ts('library.patterns.pricing.blurbStarter'),
      features: [
        ts('library.patterns.pricing.features.workspace'),
        ts('library.patterns.pricing.features.projects'),
        ts('library.patterns.pricing.features.community'),
        { label: ts('library.patterns.pricing.features.sso'), included: false },
        { label: ts('library.patterns.pricing.features.audit'), included: false },
      ],
    },
    {
      id: 'studio',
      name: 'Studio',
      price: { monthly: '$24', yearly: '$240' },
      note: {
        monthly: ts('library.patterns.pricing.perSeat'),
        yearly: ts('library.patterns.pricing.perSeatYearly'),
      },
      blurb: ts('library.patterns.pricing.blurbStudio'),
      featured: true,
      includes: ts('library.patterns.pricing.includesStarter'),
      features: [
        ts('library.patterns.pricing.features.unlimitedProjects'),
        ts('library.patterns.pricing.features.sso'),
        ts('library.patterns.pricing.features.priority'),
        ts('library.patterns.pricing.features.labels'),
      ],
    },
    {
      id: 'atlas',
      name: 'Atlas',
      price: ts('library.patterns.pricing.talkToUs'),
      blurb: ts('library.patterns.pricing.blurbAtlas'),
      cta: ts('library.patterns.pricing.contactSales'),
      includes: ts('library.patterns.pricing.includesStudio'),
      features: [
        ts('library.patterns.pricing.features.dedicated'),
        ts('library.patterns.pricing.features.audit'),
        ts('library.patterns.pricing.features.uptime'),
      ],
    },
  ];
  const billingLabel = (billing: Billing) =>
    billing === 'monthly' ? ts('library.patterns.pricing.monthly') : ts('library.patterns.pricing.yearly');
  const [message, setMessage] = createSignal(ts('library.patterns.pricing.currentPlan'));
  const select = (tier: PricingTier, billing: Billing) =>
    setMessage(ts('library.patterns.pricing.selected', { plan: tier.name, billing: billingLabel(billing) }));

  return (
    <div class={styles.root}>
      <PricingTable
        tiers={tiers}
        yearlyNote={ts('library.patterns.pricing.yearlyNote')}
        current="starter"
        onSelect={select}
      />
      <p class={styles.status} role="status">
        {message()}
      </p>
    </div>
  );
};
