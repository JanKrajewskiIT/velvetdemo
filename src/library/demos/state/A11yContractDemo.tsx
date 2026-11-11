import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Chip, Count, Input, LiveRegion, Text, VisuallyHidden } from '@jankrajewskiit/ui';
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
    <Text as="h4" variant="label" class={styles.title}>
      {props.title}
    </Text>
    <Text as="p" variant="body-sm" tone="secondary" class={styles.text}>
      {props.rule}
    </Text>
    <div class={styles.proof}>{props.children}</div>
  </li>
);

export const A11yContractDemo = () => {
  const { ts } = useI18n();
  const [announcement, setAnnouncement] = createSignal<Announcement>();
  const announce = (text: string) => setAnnouncement({ text, id: Date.now() });

  return (
    <ul class={styles.list}>
      <Rule title={ts('library.state.a11y.focusAlwaysVisible')} rule={ts('library.state.a11y.focusRule')}>
        <Button size="sm">{ts('library.state.a11y.tabToMe')}</Button>
        <Button size="sm" variant="secondary">
          {ts('library.state.a11y.thenMe')}
        </Button>
      </Rule>
      <Rule title={ts('library.state.a11y.colourNotAlone')} rule={ts('library.state.a11y.colourRule')}>
        <Chip selected>{ts('library.state.a11y.design')}</Chip>
        <div class={styles.field}>
          <Input
            size="sm"
            label={ts('library.state.a11y.email')}
            defaultValue="name@"
            error={ts('library.state.a11y.enterFullAddress')}
          />
        </div>
      </Rule>
      <Rule title={ts('library.state.a11y.hiddenContext')} rule={ts('library.state.a11y.hiddenRule')}>
        <span class={styles.inbox}>
          {ts('library.state.a11y.inbox')}
          <Count value={3} />
          <VisuallyHidden>{ts('library.state.a11y.unreadMessages')}</VisuallyHidden>
        </span>
        <span class={styles.hint}>
          {ts('library.state.a11y.readsAs', {
            inbox: ts('library.state.a11y.inbox'),
            unread: ts('library.state.a11y.unreadMessages'),
          })}
        </span>
      </Rule>
      <Rule title={ts('library.state.a11y.changesAnnounced')} rule={ts('library.state.a11y.announceRule')}>
        <Button size="sm" variant="secondary" onClick={() => announce(ts('library.state.a11y.changesSaved'))}>
          {ts('library.state.a11y.save')}
        </Button>
        <Button size="sm" variant="ghost" onClick={() => announce(ts('library.state.a11y.results'))}>
          {ts('library.state.a11y.search')}
        </Button>
        <LiveRegion message={announcement()} visible clearAfter={LIVE_REGION_CLEAR_MS} />
      </Rule>
    </ul>
  );
};
