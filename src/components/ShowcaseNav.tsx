import { isSupportedLocale, useI18n } from '@jankrajewskiit/i18n';
import { LocaleSwitcher, Text, ThemeToggle } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './ShowcaseNav.module.css';

const LINKS = [
  { href: '#brand', id: 'brand' },
  { href: '#foundations', id: 'foundations' },
  { href: '#ecosystem', id: 'ecosystem' },
  { href: '#library', id: 'library' },
] as const;

export const ShowcaseNav = () => {
  const { ts, locale, setLocale } = useI18n();

  const changeLocale = (next: string) => {
    if (isSupportedLocale(next)) setLocale(next);
  };

  return (
    <header class={styles.nav}>
      <div class={styles.inner}>
        <a class={styles.brand} href="#top">
          <Text as="i" variant="label" class={styles.mark} aria-hidden="true">
            V
          </Text>
          <Text as="span" variant="title">
            Velvet UI
          </Text>
        </a>
        <nav class={styles.links} aria-label={ts('showcase.nav.sections')}>
          <For each={LINKS}>
            {(link) => (
              <a href={link.href}>
                <Text as="span" variant="label">
                  {ts(`showcase.nav.${link.id}`)}
                </Text>
              </a>
            )}
          </For>
        </nav>
        <div class={styles.controls}>
          <LocaleSwitcher value={locale()} onChange={changeLocale} />
          <ThemeToggle appearance="segmented" size="sm" />
        </div>
      </div>
    </header>
  );
};
