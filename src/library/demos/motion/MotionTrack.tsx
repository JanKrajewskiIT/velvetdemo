import styles from './MotionTrack.module.css';

interface MotionTrackProps {
  duration: string;
  easing: string;
  speed: number;
  atEnd: boolean;
  reduced: boolean;
}

export const MotionTrack = (props: MotionTrackProps) => (
  <div
    class={styles.track}
    data-end={props.atEnd ? '' : undefined}
    data-still={props.reduced ? '' : undefined}
    style={{
      '--track-duration': `calc(var(${props.duration}) * ${props.speed})`,
      '--track-easing': `var(${props.easing})`,
    }}
    aria-hidden="true"
  >
    <span class={styles.dot} />
  </div>
);
