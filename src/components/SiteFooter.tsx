import { useI18n } from '@jankrajewskiit/i18n';

import styles from './SiteFooter.module.css';

export const SiteFooter = () => {
  const { ts } = useI18n();

  return (
    <footer class={styles.footer}>
      <div class={styles.inner}>
        <span>{ts('showcase.footer.title')}</span>
        <span class={styles.note}>{ts('showcase.footer.note')}</span>
      </div>
    </footer>
  );
};
