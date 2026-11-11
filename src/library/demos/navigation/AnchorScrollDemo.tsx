import { useI18n } from '@jankrajewskiit/i18n';
import { Anchor, type AnchorItem, BackToTop, Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './AnchorScrollDemo.module.css';

const SCROLLER_ID = 'library-nav-scroller';
const SCROLLER_SELECTOR = `#${SCROLLER_ID}`;

type SectionSpec = { id: string; title: string; level?: 1 | 2 };

export const AnchorScrollDemo = () => {
  const { ts } = useI18n();
  const sections = (): SectionSpec[] => [
    { id: 'library-nav-overview', title: ts('library.navigation.demos.anchor.overview') },
    { id: 'library-nav-install', title: ts('library.navigation.demos.anchor.install') },
    { id: 'library-nav-config', title: ts('library.navigation.demos.anchor.config') },
    { id: 'library-nav-env', title: ts('library.navigation.demos.anchor.env'), level: 2 },
    { id: 'library-nav-trouble', title: ts('library.navigation.demos.anchor.trouble') },
  ];
  const anchorItems = (): AnchorItem[] =>
    sections().map(({ id, title, level }) => ({ id, label: title, level: level ?? 1 }));

  return (
    <div class={styles.root}>
      <div class={styles.host}>
        <div
          id={SCROLLER_ID}
          class={styles.scroller}
          role="region"
          aria-label={ts('library.navigation.demos.anchor.region')}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard users scroll the long content
          tabIndex={0}
        >
          <For each={sections()}>
            {(section) => (
              <section id={section.id} class={styles.section}>
                <Text as="h4" variant="title" class={styles.heading}>
                  {section.title}
                </Text>
                <Text as="p" variant="body-sm" tone="secondary" class={styles.copy}>
                  {ts('library.navigation.demos.anchor.copy', { label: section.title })}
                </Text>
              </section>
            )}
          </For>
        </div>
        <div class={styles.top}>
          <BackToTop position="static" target={SCROLLER_SELECTOR} threshold={80} />
        </div>
      </div>
      <Anchor items={anchorItems()} container={SCROLLER_SELECTOR} class={styles.anchor} />
    </div>
  );
};
