import { RatingSummary } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import styles from './RatingReviewsDemo.module.css';
import { REVIEW_COUNTS } from './selectionData';

export const RatingReviewsDemo = () => {
  const [star, setStar] = createSignal<number | null>(null);
  return (
    <div class={styles.root}>
      <RatingSummary counts={REVIEW_COUNTS} activeStar={star()} onFilter={setStar} />
      <p class={styles.status} aria-live="polite">
        <Show when={star()} fallback="Showing all reviews">
          {(value) => <>Showing {value()}-star reviews only</>}
        </Show>
      </p>
    </div>
  );
};
