import { useI18n } from '@jankrajewskiit/i18n';
import type { MenuItem, ThemePreference } from '@jankrajewskiit/ui';
import {
  applyTheme,
  IconButton,
  Navbar,
  NavbarLocale,
  NavbarUser,
  readThemePreference,
  Text,
} from '@jankrajewskiit/ui';
import { createSignal, onCleanup, onMount } from 'solid-js';

import styles from './NavbarDemo.module.css';
import { NAV_ITEMS } from './navigationData';

export const NavbarDemo = () => {
  const { ts, locale, setLocale } = useI18n();
  const [active, setActive] = createSignal('overview');
  const [theme, setTheme] = createSignal(readThemePreference());
  const [feedback, setFeedback] = createSignal('');
  const items = (): MenuItem[] => [
    {
      label: ts('library.navigation.account.profile'),
      icon: 'user',
      onSelect: () => setFeedback(ts('library.navigation.account.profileSelected')),
    },
    {
      label: ts('library.navigation.account.settings'),
      icon: 'settings',
      onSelect: () => setFeedback(ts('library.navigation.account.settingsSelected')),
    },
    { label: ts('library.navigation.account.billing'), icon: 'lock', disabled: true },
  ];
  const signOut = () => setFeedback(ts('library.navigation.account.signedOut'));
  const changeTheme = (next: ThemePreference) => {
    applyTheme(next);
    setTheme(next);
  };
  const changeLocale = () => setLocale(locale() === 'en' ? 'pl' : 'en');

  onMount(() => {
    const observer = new MutationObserver(() => setTheme(readThemePreference()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    onCleanup(() => observer.disconnect());
  });

  return (
    <div class={styles.root}>
      <Navbar
        brand="Velvet"
        label={ts('library.navigation.account.links')}
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        actions={
          <IconButton
            icon="search"
            label={ts('library.navigation.account.search')}
            onClick={() => setFeedback(ts('library.navigation.account.searchSelected'))}
          />
        }
      />
      <Navbar
        variant="menubar"
        logo="Velvet"
        label={ts('library.navigation.account.pill')}
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        actions={
          <>
            <NavbarLocale value={locale().toUpperCase()} onClick={changeLocale} />
            <NavbarUser
              name="Anna Kowalska"
              items={[
                ...items(),
                { divider: true },
                { label: ts('library.navigation.account.signOut'), icon: 'log-out', danger: true, onSelect: signOut },
              ]}
            />
          </>
        }
      />
      <Navbar
        variant="menubar"
        logo="Velvet"
        label={ts('library.navigation.account.compact')}
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        actions={
          <NavbarUser
            compact
            name="Anna Kowalska"
            email="anna@example.com"
            meta={ts('library.navigation.account.plan')}
            items={items()}
            theme={theme()}
            onThemeChange={changeTheme}
            onSignOut={signOut}
          />
        }
      />
      <Text variant="body-sm" tone="secondary" role="status">
        {feedback()}
      </Text>
    </div>
  );
};
