import { useI18n } from '@jankrajewskiit/i18n';
import { Heading, Text } from '@jankrajewskiit/ui';

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
        <Heading level={3} variant="title" class={styles.title}>
          {info().name}
        </Heading>
        <Text variant="code" tone="tertiary">
          v{info().version}
        </Text>
      </header>
      <Text variant="code" tone="brand" class={styles.packageName}>
        {info().packageName}
      </Text>
      <Text as="p" variant="body" tone="secondary" class={styles.description}>
        {ts(`showcase.ecosystem.packages.${props.id}.description`)}
      </Text>
    </article>
  );
};
