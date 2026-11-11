import type { useI18n } from '@jankrajewskiit/i18n';
import type { AccordionItem } from '@jankrajewskiit/ui';

type Ts = ReturnType<typeof useI18n>['ts'];

export const createFaqItems = (ts: Ts): AccordionItem[] => [
  {
    value: 'billing',
    title: ts('library.data.faq.billing.title'),
    subtitle: ts('library.data.faq.billing.subtitle'),
    icon: 'file-text',
    content: ts('library.data.faq.billing.content'),
  },
  {
    value: 'export',
    title: ts('library.data.faq.dataExport.title'),
    icon: 'download',
    meta: 'CSV · JSON',
    content: ts('library.data.faq.dataExport.content'),
  },
  {
    value: 'sso',
    title: ts('library.data.faq.sso.title'),
    icon: 'shield',
    content: ts('library.data.faq.sso.content'),
  },
  {
    value: 'legacy',
    title: ts('library.data.faq.legacy.title'),
    disabled: true,
    content: ts('library.data.faq.legacy.content'),
  },
];

export const createStatusItems = (ts: Ts): AccordionItem[] => [
  {
    value: 'deploy',
    title: ts('library.data.statusItems.deploy.title'),
    tone: 'success',
    content: ts('library.data.statusItems.deploy.content'),
  },
  {
    value: 'latency',
    title: ts('library.data.statusItems.latency.title'),
    tone: 'warning',
    content: ts('library.data.statusItems.latency.content'),
  },
  {
    value: 'payment',
    title: ts('library.data.statusItems.payment.title'),
    tone: 'danger',
    content: ts('library.data.statusItems.payment.content'),
  },
  {
    value: 'release',
    title: ts('library.data.statusItems.release.title'),
    tone: 'info',
    content: ts('library.data.statusItems.release.content'),
  },
];
