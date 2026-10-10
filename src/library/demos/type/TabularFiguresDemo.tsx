import { Text } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import { cx } from '../../../styles/cx';
import styles from './TabularFiguresDemo.module.css';

const AMOUNTS = ['1,111.11', '8,880.00', '11.11', '480.25', '7,771.77', '12,345.67'];

export const TabularFiguresDemo = () => (
  <table class={styles.table}>
    <caption class={styles.caption}>Same amounts, two figure styles, right-aligned</caption>
    <thead>
      <tr>
        <th scope="col" class={styles.head}>
          Proportional
        </th>
        <th scope="col" class={styles.head}>
          Tabular
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
