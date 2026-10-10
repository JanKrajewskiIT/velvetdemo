import type { AccordionItem } from '@jankrajewskiit/ui';

export const FAQ_ITEMS: AccordionItem[] = [
  {
    value: 'billing',
    title: 'How is billing calculated?',
    subtitle: 'Per seat, monthly',
    icon: 'file-text',
    content: 'You pay for active seats. Removing a member lowers the next invoice.',
  },
  {
    value: 'export',
    title: 'Can I export my data?',
    icon: 'download',
    meta: 'CSV · JSON',
    content: 'Yes. Open Settings, then Data, and choose a format.',
  },
  {
    value: 'sso',
    title: 'Do you support single sign-on?',
    icon: 'shield',
    content: 'SAML and OIDC are available on the Business plan.',
  },
  { value: 'legacy', title: 'Legacy imports', disabled: true, content: 'Unavailable.' },
];

export const STATUS_ITEMS: AccordionItem[] = [
  { value: 'deploy', title: 'Deployment succeeded', tone: 'success', content: 'Build 482 is live in production.' },
  {
    value: 'latency',
    title: 'Latency above target',
    tone: 'warning',
    content: 'The 95th percentile is 840 ms against a target of 600 ms.',
  },
  { value: 'payment', title: 'Payment failed', tone: 'danger', content: 'The card on file was declined.' },
  { value: 'release', title: 'Release scheduled', tone: 'info', content: 'Version 2.4 ships on Thursday morning.' },
];
