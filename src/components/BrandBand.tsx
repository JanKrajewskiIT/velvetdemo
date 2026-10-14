import { useI18n } from '@jankrajewskiit/i18n';
import { VisuallyHidden } from '@jankrajewskiit/ui';
import { createSignal, For, onCleanup } from 'solid-js';

import { reportAsyncError } from '../browserDiagnostics';
import { cx } from '../styles/cx';
import styles from './BrandBand.module.css';

const BRAND_STEP = '700';
const COPIED_MS = 1600;

const RAMP = [
  { step: '50', hex: '#fdf2f5' },
  { step: '100', hex: '#fbe5ec' },
  { step: '200', hex: '#f6c6d5' },
  { step: '300', hex: '#ee98b3' },
  { step: '400', hex: '#e05f88' },
  { step: '500', hex: '#c92d62' },
  { step: '600', hex: '#ac1249' },
  { step: '700', hex: '#8b0036' },
  { step: '800', hex: '#72002d' },
  { step: '900', hex: '#5c0526' },
  { step: '950', hex: '#380014' },
] as const;

type CopyOutcome = { hex: string; ok: boolean };

const BRAND_HEX = RAMP.find((swatch) => swatch.step === BRAND_STEP)?.hex.toUpperCase();

const isLightStep = (step: string) => Number(step) < 400;

export const BrandBand = () => {
  const { ts } = useI18n();
  const [outcome, setOutcome] = createSignal<CopyOutcome | null>(null);
  let timer: ReturnType<typeof setTimeout> | undefined;
  onCleanup(() => clearTimeout(timer));

  const copy = async (hex: string) => {
    let ok = true;
    try {
      await navigator.clipboard.writeText(hex);
    } catch (error) {
      ok = false;
      console.error('Copying the colour failed.', error);
    }
    setOutcome({ hex, ok });
    clearTimeout(timer);
    timer = setTimeout(() => setOutcome(null), COPIED_MS);
  };

  const caption = (hex: string) => {
    const current = outcome();
    if (current?.hex !== hex) return hex;
    return current.ok ? ts('showcase.brand.copied') : ts('showcase.brand.copyFailed');
  };

  const statusMessage = () => {
    const current = outcome();
    if (!current) return '';
    return current.ok ? ts('showcase.brand.statusCopied') : ts('showcase.brand.statusFailed');
  };

  return (
    <section class={styles.band} id="brand">
      <div class={styles.top}>
        <div>
          <div class={styles.overline}>{ts('showcase.brand.overline')}</div>
          <div class={styles.hex}>{BRAND_HEX}</div>
        </div>
        <p>{ts('showcase.brand.description')}</p>
      </div>
      <div class={styles.ramp}>
        <For each={RAMP}>
          {(swatch) => (
            <button
              type="button"
              class={cx(
                styles.step,
                swatch.step === BRAND_STEP && styles.brand,
                isLightStep(swatch.step) && styles.light,
              )}
              style={{ background: `var(--velvet-${swatch.step})` }}
              onClick={() => void copy(swatch.hex).catch(reportAsyncError)}
              aria-label={ts('showcase.brand.copy', { step: swatch.step, hex: swatch.hex })}
            >
              <b>{swatch.step}</b>
              <span>{caption(swatch.hex)}</span>
            </button>
          )}
        </For>
      </div>
      <VisuallyHidden as="p" role="status">
        {statusMessage()}
      </VisuallyHidden>
    </section>
  );
};
