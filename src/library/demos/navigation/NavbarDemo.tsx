import { IconButton, Navbar, NavbarLocale, NavbarUser } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './NavbarDemo.module.css';
import { NAV_ITEMS } from './navigationData';

export const NavbarDemo = () => {
  const [active, setActive] = createSignal('overview');

  return (
    <div class={styles.root}>
      <Navbar
        brand="Velvet"
        label="Main, links"
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        actions={<IconButton icon="search" label="Search" />}
      />
      <Navbar
        variant="menubar"
        logo="Velvet"
        label="Main, menubar"
        items={NAV_ITEMS}
        active={active()}
        onNavigate={setActive}
        actions={
          <>
            <NavbarLocale value="EN" />
            <NavbarUser
              name="Anna Kowalska"
              items={[
                { label: 'Profile', icon: 'user' },
                { label: 'Settings', icon: 'settings' },
                { divider: true },
                { label: 'Sign out', icon: 'log-out', danger: true },
              ]}
            />
          </>
        }
      />
    </div>
  );
};
