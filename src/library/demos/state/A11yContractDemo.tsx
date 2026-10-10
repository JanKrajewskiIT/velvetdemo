import { Button, Chip, Count, Input, LiveRegion, VisuallyHidden } from '@jankrajewskiit/ui';
import { createSignal, type JSX } from 'solid-js';

import styles from './A11yContractDemo.module.css';

interface Announcement {
  text: string;
  id: number;
}

interface RuleProps {
  title: string;
  rule: string;
  children: JSX.Element;
}

const LIVE_REGION_CLEAR_MS = 3000;

const Rule = (props: RuleProps) => (
  <li class={styles.rule}>
    <h4 class={styles.title}>{props.title}</h4>
    <p class={styles.text}>{props.rule}</p>
    <div class={styles.proof}>{props.children}</div>
  </li>
);

export const A11yContractDemo = () => {
  const [announcement, setAnnouncement] = createSignal<Announcement>();
  const announce = (text: string) => setAnnouncement({ text, id: Date.now() });

  return (
    <ul class={styles.list}>
      <Rule title="Focus is always visible" rule="Every interactive element shows a 3px ring from --focus-ring.">
        <Button size="sm">Tab to me</Button>
        <Button size="sm" variant="secondary">
          Then me
        </Button>
      </Rule>
      <Rule title="State is never colour alone" rule="Selection adds a check and invalid fields add a message.">
        <Chip selected>Design</Chip>
        <div class={styles.field}>
          <Input size="sm" label="Email" defaultValue="name@" error="Enter a full address." />
        </div>
      </Rule>
      <Rule
        title="Hidden context for screen readers"
        rule="Counts and icon-only controls carry text that is not drawn."
      >
        <span class={styles.inbox}>
          Inbox
          <Count value={3} />
          <VisuallyHidden>3 unread messages</VisuallyHidden>
        </span>
        <span class={styles.hint}>Reads as “Inbox 3 unread messages”.</span>
      </Rule>
      <Rule title="Changes are announced" rule="A live region mounts once and speaks when its message changes.">
        <Button size="sm" variant="secondary" onClick={() => announce('Changes saved')}>
          Save
        </Button>
        <Button size="sm" variant="ghost" onClick={() => announce('12 results')}>
          Search
        </Button>
        <LiveRegion message={announcement()} visible clearAfter={LIVE_REGION_CLEAR_MS} />
      </Rule>
    </ul>
  );
};
