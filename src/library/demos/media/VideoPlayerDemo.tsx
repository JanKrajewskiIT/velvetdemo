import { useI18n } from '@jankrajewskiit/i18n';
import { MediaFrame, Stack, Text, VideoPlayer } from '@jankrajewskiit/ui';
import { createMemo, createSignal, Match, onCleanup, onMount, Show, Switch } from 'solid-js';

import { createDemoVideo, revokeDemoVideo } from './createDemoVideo';
import { sampleImage } from './sampleImages';

type ClipState = { kind: 'preparing' } | { kind: 'ready'; url: string } | { kind: 'unsupported' };

const POSTER = sampleImage();

export const VideoPlayerDemo = () => {
  const { ts } = useI18n();
  const [clip, setClip] = createSignal<ClipState>({ kind: 'preparing' });
  const [failed, setFailed] = createSignal(false);

  const readyUrl = createMemo(() => {
    const state = clip();
    return state.kind === 'ready' ? state.url : undefined;
  });

  onMount(() => {
    const controller = new AbortController();
    void createDemoVideo(controller.signal)
      .then((url) => {
        if (controller.signal.aborted) return;
        setClip(url ? { kind: 'ready', url } : { kind: 'unsupported' });
      })
      .catch(() => {
        if (!controller.signal.aborted) {
          setClip({ kind: 'unsupported' });
          setFailed(true);
        }
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
          <VideoPlayer
            src={url()}
            poster={POSTER.src}
            title={ts('library.media.demo.sampleClipTitle')}
            muted
            loop
            onError={() => setFailed(true)}
          />
        )}
      </Show>
      <div role="status">
        <Text variant="caption" tone="secondary">
          <Switch>
            <Match when={clip().kind === 'preparing'}>{ts('library.media.demo.clipPreparing')}</Match>
            <Match when={clip().kind === 'ready'}>{ts('library.media.demo.clipReady')}</Match>
            <Match when={clip().kind === 'unsupported'}>{ts('library.media.demo.clipUnsupported')}</Match>
          </Switch>
        </Text>
      </div>
      <Show when={failed()}>
        <Text variant="caption" tone="danger">
          {ts('library.media.demo.videoError')}
        </Text>
      </Show>
    </Stack>
  );
};
