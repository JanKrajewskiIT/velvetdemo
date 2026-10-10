import { useI18n } from '@jankrajewskiit/i18n';

import { cx } from '../../styles/cx';
import { type EcosystemNodeId, isLit, type PackageId, PACKAGES } from './ecosystemData';
import styles from './PackageCard.module.css';

export interface PackageCardProps {
  id: PackageId;
  active: EcosystemNodeId | null;
  onActivate: (id: EcosystemNodeId | null) => void;
}

export const PackageCard = (props: PackageCardProps) => {
  const { ts } = useI18n();
  const info = () => PACKAGES[props.id];

  return (
    <article
      class={cx(styles.card, !isLit(props.active, props.id) && styles.dim, props.active === props.id && styles.on)}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard users trace connections through focus
      tabindex="0"
      onMouseEnter={() => props.onActivate(props.id)}
      onMouseLeave={() => props.onActivate(null)}
      onFocus={() => props.onActivate(props.id)}
      onBlur={() => props.onActivate(null)}
    >
      <header class={styles.header}>
        <h3>{info().name}</h3>
        <span class={styles.version}>v{info().version}</span>
      </header>
      <span class={styles.packageName}>{info().packageName}</span>
      <p>{ts(`showcase.ecosystem.packages.${props.id}.description`)}</p>
    </article>
  );
};
