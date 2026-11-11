import { useI18n } from '@jankrajewskiit/i18n';
import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './TabularFiguresDemo.module.css';

const AMOUNTS = ['1,111.11', '8,880.00', '11.11', '480.25', '7,771.77', '12,345.67'];

export const TabularFiguresDemo = () => {
  const { ts } = useI18n();

  return (
    <table class={styles.table}>
      <caption class={styles.caption}>{ts('library.type.tabular.caption')}</caption>
      <thead>
        <tr>
          <th scope="col" class={styles.head}>
            {ts('library.type.tabular.proportional')}
          </th>
          <th scope="col" class={styles.head}>
            {ts('library.type.tabular.tabular')}
          </th>
        </tr>
      </thead>
      <tbody>
        <For each={AMOUNTS}>
          {(amount) => (
            <tr>
              <td class={cx(styles.cell, styles.proportional)}>€ {amount}</td>
              <td class={styles.cell}>
                <Text as="span" tabular>
                  € {amount}
                </Text>
              </td>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};
