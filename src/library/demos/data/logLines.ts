import type { LogViewerProps } from '@jankrajewskiit/ui';

type LogEntry = Exclude<LogViewerProps['lines'][number], string>;

const SERVICES = ['api', 'auth', 'worker', 'billing'] as const;
const SECONDS_PER_LINE = 7;
const START_HOUR = 9;
const MS_PER_SECOND = 1000;

interface MessageTemplate {
  level: NonNullable<LogEntry['level']>;
  message: string;
}

const FALLBACK_MESSAGE: MessageTemplate = { level: 'info', message: 'Heartbeat received' };

const MESSAGES: readonly MessageTemplate[] = [
  { level: 'info', message: 'Request completed in 38 ms' },
  { level: 'info', message: 'Session refreshed for user 4821' },
  { level: 'debug', message: 'Cache hit for key plans:list' },
  { level: 'info', message: 'Job export-invoices dequeued' },
  { level: 'warn', message: 'Response time above 500 ms threshold' },
  { level: 'info', message: 'Webhook delivered to https://example.test/hooks' },
  { level: 'error', message: 'Payment provider returned 502, retrying in 5 s' },
  { level: 'info', message: 'Retry succeeded after 1 attempt' },
];

export const MAX_LOG_LINES = 200;

const baseTime = (): number => {
  const day = new Date();
  day.setHours(START_HOUR, 0, 0, 0);
  return day.getTime();
};

export const makeLogLine = (index: number, base: number = baseTime()): LogEntry => {
  const template = MESSAGES[index % MESSAGES.length] ?? FALLBACK_MESSAGE;
  return {
    ...template,
    ts: base + index * SECONDS_PER_LINE * MS_PER_SECOND,
    source: SERVICES[index % SERVICES.length],
  };
};

export const makeLogLines = (count: number): LogEntry[] => {
  const base = baseTime();
  return Array.from({ length: count }, (_, index) => makeLogLine(index, base));
};
