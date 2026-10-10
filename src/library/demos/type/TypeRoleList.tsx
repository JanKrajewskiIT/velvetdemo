import { For } from 'solid-js';

import styles from './TypeRoleList.module.css';
import { TypeRoleRow } from './TypeRoleRow';
import type { TypeRole } from './typeRoles';

export interface TypeRoleListProps {
  roles: readonly TypeRole[];
}

export const TypeRoleList = (props: TypeRoleListProps) => (
  <ul class={styles.list}>
    <For each={props.roles}>{(role) => <TypeRoleRow role={role} />}</For>
  </ul>
);
