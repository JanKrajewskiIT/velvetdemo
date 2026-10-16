import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';

import styles from './SiteFooter.module.css';

export const SiteFooter = () => {
  const { ts } = useI18n();

  return (
    <footer class={styles.footer}>
      <div class={styles.inner}>
        <Text variant="body-sm">{ts('showcase.footer.title')}</Text>
        <Text variant="code">{ts('showcase.footer.note')}</Text>
      </div>
    </footer>
  );
};
