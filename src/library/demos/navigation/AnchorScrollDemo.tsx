import { Anchor, type AnchorItem, BackToTop } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './AnchorScrollDemo.module.css';

const SCROLLER_ID = 'library-nav-scroller';
const SCROLLER_SELECTOR = `#${SCROLLER_ID}`;

const SECTIONS: AnchorItem[] = [
  { id: 'library-nav-overview', label: 'Overview' },
  { id: 'library-nav-install', label: 'Installation' },
  { id: 'library-nav-config', label: 'Configuration' },
  { id: 'library-nav-env', label: 'Environment', level: 2 },
  { id: 'library-nav-trouble', label: 'Troubleshooting' },
];

export const AnchorScrollDemo = () => (
  <div class={styles.root}>
    <div class={styles.host}>
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard users need to scroll the region */}
      <div id={SCROLLER_ID} class={styles.scroller} role="region" aria-label="Sample article" tabIndex={0}>
        <For each={SECTIONS}>
          {(section) => (
            <section id={section.id} class={styles.section}>
              <h4 class={styles.heading}>{section.label}</h4>
              <p class={styles.copy}>
                Section content for {section.label}. Scroll this area and the contents list follows the section in view.
              </p>
            </section>
          )}
        </For>
      </div>
      <div class={styles.top}>
        <BackToTop position="static" target={SCROLLER_SELECTOR} threshold={80} />
      </div>
    </div>
    <Anchor items={SECTIONS} container={SCROLLER_SELECTOR} class={styles.anchor} />
  </div>
);
