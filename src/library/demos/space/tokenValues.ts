const probeHidden = 'position:absolute;visibility:hidden;pointer-events:none;height:0;';

export const measureLength = (expression: string, scope: HTMLElement = document.body): number => {
  const probe = document.createElement('span');
  probe.style.cssText = `${probeHidden}width:${expression};`;
  scope.append(probe);
  const width = probe.getBoundingClientRect().width;
  probe.remove();
  return Math.round(width * 100) / 100;
};

export const measureToken = (token: string, scope?: HTMLElement): number => measureLength(`var(${token})`, scope);

export const readTokenValue = (token: string, scope: HTMLElement = document.documentElement): string =>
  getComputedStyle(scope).getPropertyValue(token).trim();

export const formatPx = (value: number): string => `${Number.parseFloat(value.toFixed(1))} px`;
