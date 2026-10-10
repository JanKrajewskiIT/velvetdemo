export const readToken = (token: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(token).trim();

export const parseMs = (value: string): number => Number.parseFloat(value) || 0;
