import { useI18n } from '@jankrajewskiit/i18n';
import { FlipCard, Glyph } from '@jankrajewskiit/ui';
import type { JSX } from 'solid-js';

import styles from './FlipCardsDemo.module.css';

const Top = (props: { label: string; inverse?: boolean }) => (
  <div class={styles.top}>
    <span class={props.inverse ? styles.chipInverse : styles.chip}>{props.label}</span>
    <Glyph name="refresh" size="md" class={styles.flipIcon} />
  </div>
);

const Foot = (props: { icon: string; children: JSX.Element; inverse?: boolean }) => (
  <div class={props.inverse ? styles.footInverse : styles.foot}>
    <Glyph name={props.icon} size="sm" />
    <span>{props.children}</span>
  </div>
);

const Question = (props: { children: JSX.Element; large?: boolean }) => (
  <div class={props.large ? styles.questionLarge : styles.question}>{props.children}</div>
);

const Answer = (props: { label: string; children: JSX.Element }) => (
  <div>
    <div class={styles.answerLabel}>{props.label}</div>
    <div class={styles.answerBody}>{props.children}</div>
  </div>
);

export const FlipCardsDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.row}>
      <FlipCard
        width={230}
        height={290}
        align="start"
        flipOnHover
        label={ts('library.cards.demo.cardLabel', { title: 'throttle vs debounce' })}
        front={
          <>
            <Top label={ts('library.cards.demo.question')} />
            <Question>
              How does <code class={styles.code}>throttle</code> differ from <code class={styles.code}>debounce</code>?
            </Question>
            <Foot icon="book-open">JavaScript · Performance</Foot>
          </>
        }
        back={
          <>
            <Top label={ts('library.cards.demo.answer')} inverse />
            <Answer label={ts('library.cards.demo.inShort')}>
              <code class={styles.codeInverse}>throttle</code> runs at most once per interval;{' '}
              <code class={styles.codeInverse}>debounce</code> waits until calls <b>stop</b> for the interval.
            </Answer>
            <Foot icon="check" inverse>
              {ts('library.cards.demo.iKnowThis')}
            </Foot>
          </>
        }
      />
      <FlipCard
        width={230}
        height={290}
        align="start"
        flipOnHover
        defaultFlipped
        label={ts('library.cards.demo.cardLabel', { title: 'event delegation' })}
        front={
          <>
            <Top label={ts('library.cards.demo.concept')} />
            <Question>What is “event delegation”?</Question>
            <Foot icon="code">JavaScript · DOM</Foot>
          </>
        }
        back={
          <>
            <Top label={ts('library.cards.demo.answer')} inverse />
            <Answer label={ts('library.cards.demo.inShort')}>
              One listener on a shared ancestor handles events from many children thanks to bubbling — fewer listeners,
              works for dynamic elements.
            </Answer>
            <Foot icon="star" inverse>
              {ts('library.cards.demo.reviewTomorrow')}
            </Foot>
          </>
        }
      />
      <FlipCard
        width={230}
        height={290}
        align="start"
        flipOnHover
        backVariant="inverse"
        label={ts('library.cards.demo.score')}
        front={
          <>
            <Top label={ts('library.cards.demo.score')} />
            <div>
              <div class={styles.score}>78%</div>
              <Question large>{ts('library.cards.demo.accuracy')}</Question>
            </div>
            <Foot icon="bar-chart">{ts('library.cards.demo.last30Days')}</Foot>
          </>
        }
        back={
          <>
            <Top label={ts('library.cards.demo.details')} inverse />
            <div class={styles.details}>
              <div class={styles.detailRow}>
                <span>{ts('library.cards.demo.solved')}</span>
                <b>142</b>
              </div>
              <div class={styles.detailRow}>
                <span>{ts('library.cards.demo.correct')}</span>
                <b>111</b>
              </div>
              <div class={styles.detailRow}>
                <span>{ts('library.cards.demo.streak')}</span>
                <b>9 days</b>
              </div>
            </div>
            <Foot icon="trending-up" inverse>
              {ts('library.cards.demo.pointsVsPrevious')}
            </Foot>
          </>
        }
      />
    </div>
  );
};
