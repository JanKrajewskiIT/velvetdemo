import { createTokenValue } from './createTokenValue';
import styles from './MotionTokenValue.module.css';

interface MotionTokenValueProps {
  token: string;
}

export const MotionTokenValue = (props: MotionTokenValueProps) => {
  const value = createTokenValue(() => props.token);
  return <span class={styles.value}>{value()}</span>;
};
