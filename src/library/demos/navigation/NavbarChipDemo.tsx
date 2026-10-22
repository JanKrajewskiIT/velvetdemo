import { useI18n } from '@jankrajewskiit/i18n';
import { BrandLogo, Navbar, NavbarChip, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './NavbarChipDemo.module.css';
import { NAV_ITEMS } from './navigationData';

export const NavbarChipDemo = () => {
  const { ts } = useI18n();
  const [condensed, setCondensed] = createSignal(false);
  const [active, setActive] = createSignal('overview');
  const [feedback, setFeedback] = createSignal('');
  const toggleCondensed = () => setCondensed((previous) => !previous);
  const search = () => setFeedback(ts('library.navigation.chips.searchSelected'));

  return (
    <div class={styles.root}>
      <div class={styles.group}>
        <Text variant="caption" tone="secondary">
          {ts('library.navigation.chips.surface')}
        </Text>
        <div class={styles.actions}>
          <NavbarChip tone="surface" icon="menu" pressed={condensed()} onClick={toggleCondensed}>
            {ts('library.navigation.chips.condensed')}
          </NavbarChip>
          <NavbarChip tone="surface" icon="home" href="#g22">
            {ts('library.navigation.chips.navigation')}
          </NavbarChip>
          <NavbarChip
            tone="surface"
            icon="search"
            iconOnly
            label={ts('library.navigation.chips.search')}
            onClick={search}
          />
        </div>
      </div>
      <Navbar
        variant="menubar"
        logo={<BrandLogo brand="quantcore" tone="inverse" size="sm" label={ts('library.navigation.chips.home')} />}
        logoHref="#g22"
        onLogoClick={() => setFeedback(ts('library.navigation.chips.homeSelected'))}
        label={ts('library.navigation.chips.brand')}
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        condensed={condensed()}
        showActiveLabel={false}
        actions={
          <>
            <NavbarChip
              icon="menu"
              iconOnly
              label={ts('library.navigation.chips.condensed')}
              pressed={condensed()}
              onClick={toggleCondensed}
            />
            <NavbarChip icon="search" collapse label={ts('library.navigation.chips.search')} onClick={search}>
              {ts('library.navigation.chips.search')}
            </NavbarChip>
          </>
        }
      />
      <Text variant="body-sm" tone="secondary">
        {ts('library.navigation.chips.hint')}
      </Text>
      <Text variant="body-sm" tone="secondary" role="status">
        {feedback()}
      </Text>
    </div>
  );
};
