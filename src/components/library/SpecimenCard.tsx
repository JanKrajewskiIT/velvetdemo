import { Heading, Text } from '@jankrajewskiit/ui';

import type { LibraryGroup, Specimen, SpecimenSpan } from '../../library/types';
import { useLibraryText } from '../../library/useLibraryText';
import { cx } from '../../styles/cx';
import styles from './SpecimenCard.module.css';

export interface SpecimenCardProps {
  group: LibraryGroup;
  specimen: Specimen;
}

const SPAN_CLASS: Record<SpecimenSpan, string | undefined> = {
  4: styles.span4,
  6: styles.span6,
  8: styles.span8,
  12: styles.span12,
};

export const SpecimenCard = (props: SpecimenCardProps) => {
  const text = useLibraryText();

  return (
    <article class={cx(styles.card, SPAN_CLASS[props.specimen.span])}>
      <header class={styles.header}>
        <Heading level={4} variant="h4" class={styles.title}>
          {text.specimenName(props.group, props.specimen.id)}
        </Heading>
        <Text as="span" variant="caption" tone="tertiary" class={styles.subtitle}>
          {text.specimenSubtitle(props.group, props.specimen.id)}
        </Text>
      </header>
      <div class={styles.frame}>{props.specimen.render()}</div>
    </article>
  );
};
