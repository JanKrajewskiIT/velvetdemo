import { type Accessor, createEffect, createSignal, onCleanup, onMount } from 'solid-js';

import { createReducedMotion } from './createReducedMotion';
import { parseMs, readToken } from './readToken';

export const PLAYBACK_SPEEDS = [1, 4, 10] as const;
export type PlaybackSpeed = (typeof PLAYBACK_SPEEDS)[number];

const DEFAULT_SPEED: PlaybackSpeed = 4;
const HOLD_MS = 1200;

export interface MotionPlayback {
  reduced: Accessor<boolean>;
  speed: Accessor<PlaybackSpeed>;
  setSpeed: (speed: PlaybackSpeed) => void;
  atEnd: Accessor<boolean>;
  replay: () => void;
}

export const createMotionPlayback = (longestDurationToken: string): MotionPlayback => {
  const reduced = createReducedMotion();
  const [speed, setSpeed] = createSignal<PlaybackSpeed>(DEFAULT_SPEED);
  const [longestMs, setLongestMs] = createSignal(0);
  const [forward, setForward] = createSignal(false);
  let timer: number | undefined;

  const stop = () => window.clearTimeout(timer);

  const schedule = () => {
    stop();
    if (reduced() || longestMs() === 0) return;
    timer = window.setTimeout(
      () => {
        setForward((value) => !value);
        schedule();
      },
      longestMs() * speed() + HOLD_MS,
    );
  };

  const replay = () => {
    setForward((value) => !value);
    schedule();
  };

  onMount(() => setLongestMs(parseMs(readToken(longestDurationToken))));
  createEffect(schedule);
  onCleanup(stop);

  return { reduced, speed, setSpeed, atEnd: () => reduced() || forward(), replay };
};
