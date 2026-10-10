const WIDTH = 640;
const HEIGHT = 360;
const FPS = 30;
const DURATION_MS = 3000;
const FRAME_COUNT = (FPS * DURATION_MS) / 1000;
const MIME_TYPES = ['video/webm;codecs=vp9', 'video/webm;codecs=vp8', 'video/webm', 'video/mp4'];

const drawFrame = (context: CanvasRenderingContext2D, frame: number): void => {
  const progress = frame / FRAME_COUNT;
  const shift = progress * WIDTH;
  const gradient = context.createLinearGradient(shift - WIDTH, 0, shift + WIDTH, HEIGHT);
  gradient.addColorStop(0, '#EADCC8');
  gradient.addColorStop(0.5, '#D9A488');
  gradient.addColorStop(1, '#8B8660');
  context.fillStyle = gradient;
  context.fillRect(0, 0, WIDTH, HEIGHT);

  context.fillStyle = 'rgba(255, 255, 255, 0.55)';
  context.beginPath();
  context.arc(WIDTH * (0.15 + 0.7 * progress), HEIGHT * 0.4, HEIGHT * 0.12, 0, Math.PI * 2);
  context.fill();
};

const record = (signal: AbortSignal | undefined, resolve: (url: string | undefined) => void): void => {
  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const context = canvas.getContext('2d');

  if (
    !context ||
    signal?.aborted ||
    typeof MediaRecorder === 'undefined' ||
    typeof canvas.captureStream !== 'function'
  ) {
    resolve(undefined);
    return;
  }

  const mimeType = MIME_TYPES.find((type) => MediaRecorder.isTypeSupported(type));
  const stream = canvas.captureStream(FPS);
  let recorder: MediaRecorder;
  try {
    recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
  } catch (error) {
    stream.getTracks().forEach((track) => track.stop());
    throw error;
  }
  const chunks: Blob[] = [];
  let settled = false;
  let frame = 0;

  const timer = window.setInterval(() => {
    frame += 1;
    drawFrame(context, frame);
    if (frame >= FRAME_COUNT) {
      window.clearInterval(timer);
      recorder.stop();
    }
  }, 1000 / FPS);

  const finish = (url: string | undefined): void => {
    if (settled) return;
    settled = true;
    window.clearInterval(timer);
    signal?.removeEventListener('abort', onAbort);
    stream.getTracks().forEach((track) => track.stop());
    resolve(url);
  };

  function onAbort(): void {
    window.clearInterval(timer);
    if (recorder.state === 'inactive') {
      finish(undefined);
      return;
    }
    recorder.stop();
  }

  recorder.ondataavailable = (event) => {
    if (event.data.size > 0) chunks.push(event.data);
  };
  recorder.onerror = (event) => {
    console.error('Demo video recording failed', event);
    finish(undefined);
  };
  recorder.onstop = () => {
    if (settled) return;
    const usable = chunks.length > 0 && !signal?.aborted;
    finish(usable ? URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType })) : undefined);
  };
  signal?.addEventListener('abort', onAbort);

  drawFrame(context, frame);
  try {
    recorder.start();
  } catch (error) {
    finish(undefined);
    throw error;
  }
};

export const createDemoVideo = (signal?: AbortSignal): Promise<string | undefined> =>
  new Promise((resolve) => {
    try {
      record(signal, resolve);
    } catch (error) {
      console.error('Demo video could not be created', error);
      resolve(undefined);
    }
  });

export const revokeDemoVideo = (url: string): void => {
  URL.revokeObjectURL(url);
};
