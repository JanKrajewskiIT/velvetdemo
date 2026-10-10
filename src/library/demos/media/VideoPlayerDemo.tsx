import { MediaFrame, Stack, Text, VideoPlayer } from '@jankrajewskiit/ui';
import { createMemo, createSignal, Match, onCleanup, onMount, Show, Switch } from 'solid-js';

import { createDemoVideo, revokeDemoVideo } from './createDemoVideo';
import { sampleImage } from './sampleImages';

type ClipState = { kind: 'preparing' } | { kind: 'ready'; url: string } | { kind: 'unsupported' };

const POSTER = sampleImage();

export const VideoPlayerDemo = () => {
  const [clip, setClip] = createSignal<ClipState>({ kind: 'preparing' });
  const [failed, setFailed] = createSignal(false);

  const readyUrl = createMemo(() => {
    const state = clip();
    return state.kind === 'ready' ? state.url : undefined;
  });

  onMount(() => {
    const controller = new AbortController();
    void createDemoVideo(controller.signal).then((url) => {
      if (controller.signal.aborted) return;
      setClip(url ? { kind: 'ready', url } : { kind: 'unsupported' });
    });
    onCleanup(() => {
      controller.abort();
      const url = readyUrl();
      if (url) revokeDemoVideo(url);
    });
  });

  return (
    <Stack gap={3}>
      <Show when={readyUrl()} fallback={<MediaFrame src={POSTER.src} alt={POSTER.alt} ratio="video" />}>
        {(url) => (
          <VideoPlayer src={url()} poster={POSTER.src} title="Sample clip" muted loop onError={() => setFailed(true)} />
        )}
      </Show>
      <div role="status">
        <Text variant="caption" tone="secondary">
          <Switch>
            <Match when={clip().kind === 'preparing'}>Preparing sample clip</Match>
            <Match when={clip().kind === 'ready'}>Sample clip ready</Match>
            <Match when={clip().kind === 'unsupported'}>Video recording is not supported in this browser</Match>
          </Switch>
        </Text>
      </div>
      <Show when={failed()}>
        <Text variant="caption" tone="danger">
          Video playback failed. Try playing the sample again.
        </Text>
      </Show>
    </Stack>
  );
};
