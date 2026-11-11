import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Checkbox, Chip, Input, Switch, Text, ToggleButton } from '@jankrajewskiit/ui';
import { For, type JSX } from 'solid-js';

import styles from './StateLanguageDemo.module.css';

interface StateRowProps {
  name: string;
  signals: readonly string[];
  children: JSX.Element;
}

const StateRow = (props: StateRowProps) => (
  <li class={styles.row}>
    <div class={styles.head}>
      <Text as="h4" variant="label" class={styles.name}>
        {props.name}
      </Text>
      <Text as="div" variant="caption" tone="secondary" class={styles.signals}>
        <For each={props.signals}>{(signal) => <code>{signal}</code>}</For>
      </Text>
    </div>
    <div class={styles.samples}>{props.children}</div>
  </li>
);

export const StateLanguageDemo = () => {
  const { ts } = useI18n();

  return (
    <ul class={styles.list}>
      <StateRow
        name={ts('library.state.language.default')}
        signals={[ts('library.state.language.restTokens'), ts('library.state.language.noWash')]}
      >
        <Button size="sm" variant="secondary">
          {ts('library.state.language.save')}
        </Button>
        <Chip>{ts('library.state.language.design')}</Chip>
        <Checkbox label={ts('library.state.language.rememberMe')} />
        <Switch label={ts('library.state.language.alerts')} />
      </StateRow>
      <StateRow name={ts('library.state.language.hover')} signals={[':hover', '--bg-hover']}>
        <Button size="sm" variant="ghost">
          {ts('library.state.language.hoverMe')}
        </Button>
        <Chip>{ts('library.state.language.hoverMe')}</Chip>
        <ToggleButton>{ts('library.state.language.hoverMe')}</ToggleButton>
      </StateRow>
      <StateRow name={ts('library.state.language.focusVisible')} signals={[':focus-visible', '--focus-ring']}>
        <Button size="sm">{ts('library.state.language.tabToMe')}</Button>
        <Checkbox label={ts('library.state.language.tabToMe')} />
        <div class={styles.field}>
          <Input
            size="sm"
            aria-label={ts('library.state.language.search')}
            placeholder={ts('library.state.language.tabIntoField')}
          />
        </div>
      </StateRow>
      <StateRow name={ts('library.state.language.pressed')} signals={[':active', '--bg-pressed', '--motion-nudge']}>
        <Button size="sm" variant="secondary">
          {ts('library.state.language.pressAndHold')}
        </Button>
        <Button size="sm">{ts('library.state.language.pressAndHold')}</Button>
      </StateRow>
      <StateRow name={ts('library.state.language.selected')} signals={['aria-pressed', 'checked', '--bg-selected']}>
        <ToggleButton defaultPressed>{ts('library.state.language.bold')}</ToggleButton>
        <Chip selected>{ts('library.state.language.design')}</Chip>
        <Checkbox label={ts('library.state.language.rememberMe')} checked />
        <Switch label={ts('library.state.language.alerts')} checked />
      </StateRow>
      <StateRow name={ts('library.state.language.disabled')} signals={['disabled', '--opacity-disabled']}>
        <Button size="sm" variant="secondary" disabled>
          {ts('library.state.language.save')}
        </Button>
        <Chip disabled>{ts('library.state.language.design')}</Chip>
        <Checkbox label={ts('library.state.language.rememberMe')} disabled />
        <Switch label={ts('library.state.language.alerts')} checked disabled />
        <div class={styles.field}>
          <Input size="sm" aria-label={ts('library.state.language.workspace')} defaultValue="Velvet" disabled />
        </div>
      </StateRow>
      <StateRow
        name={ts('library.state.language.loading')}
        signals={['aria-busy', 'Spinner', ts('library.state.language.disabledWhileBusy')]}
      >
        <Button size="sm" loading>
          {ts('library.state.language.saving')}
        </Button>
        <Button size="sm" variant="secondary" loading>
          {ts('library.state.language.saving')}
        </Button>
      </StateRow>
      <StateRow
        name={ts('library.state.language.invalid')}
        signals={['aria-invalid', '--control-border-invalid', '--focus-ring-danger']}
      >
        <div class={styles.field}>
          <Input
            size="sm"
            label={ts('library.state.language.email')}
            defaultValue="name@"
            error={ts('library.state.language.invalidEmail')}
          />
        </div>
      </StateRow>
    </ul>
  );
};
