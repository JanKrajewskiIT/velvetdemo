import type { useI18n } from '@jankrajewskiit/i18n';

type Ts = ReturnType<typeof useI18n>['ts'];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const POSTAL_CODE_PATTERN = /^\d{2}-\d{3}$/u;

export type Problem = (value: string) => string | undefined;

const requiredProblem =
  (message: () => string): Problem =>
  (value) =>
    value.trim() ? undefined : message();

// Messages resolve at validation time so that a locale switch applies to validators created earlier.
export const makeProblems = (ts: Ts) => ({
  name: requiredProblem(() => ts('library.forms.validation.name')),
  workspaceName: requiredProblem(() => ts('library.forms.validation.workspaceName')),
  email: ((value) =>
    EMAIL_PATTERN.test(value.trim()) ? undefined : ts('library.forms.validation.email')) satisfies Problem,
  postalCode: ((value) =>
    POSTAL_CODE_PATTERN.test(value.trim()) ? undefined : ts('library.forms.validation.postalCode')) satisfies Problem,
});
