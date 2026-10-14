const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;
const POSTAL_CODE_PATTERN = /^\d{2}-\d{3}$/u;

export type Problem = (value: string) => string | undefined;

const requiredProblem =
  (message: string): Problem =>
  (value) =>
    value.trim() ? undefined : message;

export const nameProblem = requiredProblem('Enter your full name');

export const workspaceNameProblem = requiredProblem('Enter a workspace name');

export const emailProblem: Problem = (value) =>
  EMAIL_PATTERN.test(value.trim()) ? undefined : 'Enter an email address like name@company.com';

export const postalCodeProblem: Problem = (value) =>
  POSTAL_CODE_PATTERN.test(value.trim()) ? undefined : 'Enter a postal code in the format 00-000';
