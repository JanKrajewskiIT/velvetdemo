import { Button, LogViewer } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { makeLogLine, makeLogLines, MAX_LOG_LINES } from './logLines';
import styles from './LogViewerDemo.module.css';

const INITIAL_LINE_COUNT = 48;

export const LogViewerDemo = () => {
  const [lines, setLines] = createSignal(makeLogLines(INITIAL_LINE_COUNT));

  const appendLine = () => setLines((current) => [...current, makeLogLine(current.length)].slice(-MAX_LOG_LINES));

  return (
    <div class={styles.root}>
      <Button size="sm" variant="secondary" iconLeft="plus" onClick={appendLine}>
        Append line
      </Button>
      <LogViewer title="api-gateway.log" height={320} lines={lines()} />
    </div>
  );
};
