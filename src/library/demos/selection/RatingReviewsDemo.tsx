import { useI18n } from '@jankrajewskiit/i18n';
import { RatingSummary } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './RatingReviewsDemo.module.css';
import { REVIEW_COUNTS } from './selectionData';

export const RatingReviewsDemo = () => {
  const { ts } = useI18n();
  const [star, setStar] = createSignal<number | null>(null);
  return (
    <div class={styles.root}>
      <RatingSummary counts={REVIEW_COUNTS} activeStar={star()} onFilter={setStar} />
      <p class={styles.status} aria-live="polite">
        <Show when={star()} fallback={ts('library.display.reviews.all')}>
          {(value) => ts('library.display.reviews.filtered', { count: value() })}
        </Show>
      </p>
    </div>
  );
};
