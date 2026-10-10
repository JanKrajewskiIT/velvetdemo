import { Button, Checkbox, Chip, Input, Switch, ToggleButton } from '@jankrajewskiit/ui';
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
      <h4 class={styles.name}>{props.name}</h4>
      <p class={styles.signals}>
        <For each={props.signals}>{(signal) => <code>{signal}</code>}</For>
      </p>
    </div>
    <div class={styles.samples}>{props.children}</div>
  </li>
);

export const StateLanguageDemo = () => (
  <ul class={styles.list}>
    <StateRow name="Default" signals={['Rest tokens', 'No wash']}>
      <Button size="sm" variant="secondary">
        Save
      </Button>
      <Chip>Design</Chip>
      <Checkbox label="Remember me" />
      <Switch label="Alerts" />
    </StateRow>
    <StateRow name="Hover" signals={[':hover', '--bg-hover']}>
      <Button size="sm" variant="ghost">
        Hover me
      </Button>
      <Chip>Hover me</Chip>
      <ToggleButton>Hover me</ToggleButton>
    </StateRow>
    <StateRow name="Focus visible" signals={[':focus-visible', '--focus-ring']}>
      <Button size="sm">Tab to me</Button>
      <Checkbox label="Tab to me" />
      <div class={styles.field}>
        <Input size="sm" aria-label="Search" placeholder="Tab into the field" />
      </div>
    </StateRow>
    <StateRow name="Pressed" signals={[':active', '--bg-pressed', '--motion-nudge']}>
      <Button size="sm" variant="secondary">
        Press and hold
      </Button>
      <Button size="sm">Press and hold</Button>
    </StateRow>
    <StateRow name="Selected" signals={['aria-pressed', 'checked', '--bg-selected']}>
      <ToggleButton defaultPressed>Bold</ToggleButton>
      <Chip selected>Design</Chip>
      <Checkbox label="Remember me" checked />
      <Switch label="Alerts" checked />
    </StateRow>
    <StateRow name="Disabled" signals={['disabled', '--opacity-disabled']}>
      <Button size="sm" variant="secondary" disabled>
        Save
      </Button>
      <Chip disabled>Design</Chip>
      <Checkbox label="Remember me" disabled />
      <Switch label="Alerts" checked disabled />
      <div class={styles.field}>
        <Input size="sm" aria-label="Workspace" defaultValue="Velvet" disabled />
      </div>
    </StateRow>
    <StateRow name="Loading" signals={['aria-busy', 'Spinner', 'Disabled while busy']}>
      <Button size="sm" loading>
        Saving
      </Button>
      <Button size="sm" variant="secondary" loading>
        Saving
      </Button>
    </StateRow>
    <StateRow name="Invalid" signals={['aria-invalid', '--control-border-invalid', '--focus-ring-danger']}>
      <div class={styles.field}>
        <Input size="sm" label="Email" defaultValue="name@" error="Enter a full address, like name@example.com." />
      </div>
    </StateRow>
  </ul>
);
