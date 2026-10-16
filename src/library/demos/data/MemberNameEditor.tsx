import type { GridEditorContext } from '@jankrajewskiit/data';
import { ControlInput } from '@jankrajewskiit/ui';

import styles from './MemberNameEditor.module.css';
import type { Member } from './members';

export interface MemberNameEditorProps {
  context: GridEditorContext<Member>;
}

export const MemberNameEditor = (props: MemberNameEditorProps) => (
  <ControlInput
    ref={(element) => {
      queueMicrotask(() => {
        if (element.isConnected) element.focus({ preventScroll: true });
      });
    }}
    class={styles.input}
    textVariant="body-sm"
    aria-label="Member name"
    aria-invalid={props.context.error ? 'true' : undefined}
    aria-describedby={props.context.error ? props.context.errorId : undefined}
    readOnly={props.context.pending}
    value={props.context.draft}
    onInput={(event) => props.context.setDraft(event.currentTarget.value)}
    onBlur={() => props.context.commit()}
    onKeyDown={(event) => {
      if (event.key === 'Enter' || event.key === 'Tab') {
        event.preventDefault();
        props.context.commit(event.key === 'Enter' ? 'down' : event.shiftKey ? 'left' : 'right');
      } else if (event.key === 'Escape') {
        event.preventDefault();
        props.context.cancel();
      }
    }}
  />
);
