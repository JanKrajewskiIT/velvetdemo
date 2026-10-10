import {
  Button,
  ButtonGroup,
  type ButtonSize,
  type ButtonVariant,
  CopyButton,
  CopyField,
  Fab,
  IconButton,
  type IconButtonVariant,
  LocaleSwitcher,
  ThemeToggle,
  ToggleButton,
  ToggleGroup,
} from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import type { actionsEn } from '../../i18n/library/actions';
import { AuthButtonDemo } from '../demos/actions/AuthButtonDemo';
import { CalendarEventsDemo } from '../demos/actions/CalendarEventsDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './actions.module.css';

const BUTTON_VARIANTS: readonly ButtonVariant[] = ['primary', 'secondary', 'soft', 'ghost', 'danger', 'link', 'dashed'];
const BUTTON_SIZES: readonly ButtonSize[] = ['xs', 'sm', 'md', 'lg'];

const ICON_BUTTONS: readonly { variant: IconButtonVariant; icon: string; label: string }[] = [
  { variant: 'primary', icon: 'plus', label: 'Add' },
  { variant: 'secondary', icon: 'pencil', label: 'Edit' },
  { variant: 'soft', icon: 'bookmark', label: 'Save' },
  { variant: 'ghost', icon: 'settings', label: 'Settings' },
  { variant: 'danger', icon: 'trash-2', label: 'Delete' },
];

export const actionSpecimens: readonly Specimen<SpecimenIdOf<typeof actionsEn>>[] = [
  {
    id: 'actions-button',
    span: 8,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Variants</p>
          <div class={styles.row}>
            <For each={BUTTON_VARIANTS}>{(variant) => <Button variant={variant}>{variant}</Button>}</For>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Sizes</p>
          <div class={styles.row}>
            <For each={BUTTON_SIZES}>
              {(size) => (
                <Button size={size} variant="secondary">
                  {size}
                </Button>
              )}
            </For>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Icons and states</p>
          <div class={styles.row}>
            <Button iconLeft="plus">New project</Button>
            <Button iconRight="arrow-right" variant="secondary">
              Continue
            </Button>
            <Button loading>Saving</Button>
            <Button disabled>Disabled</Button>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Block</p>
          <Button block variant="dashed" iconLeft="plus">
            Add row
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: 'actions-copy',
    span: 4,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Button</p>
          <div class={styles.row}>
            <CopyButton value="npm install @jankrajewskiit/ui" />
            <CopyButton value="npm install @jankrajewskiit/ui" iconOnly variant="ghost" />
          </div>
        </div>
        <CopyField label="Invite link" value="https://velvet.example/invite/8f3k2q" />
      </div>
    ),
  },
  {
    id: 'actions-icon-buttons',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Variants</p>
          <div class={styles.row}>
            <For each={ICON_BUTTONS}>
              {(item) => <IconButton variant={item.variant} icon={item.icon} label={item.label} />}
            </For>
            <IconButton icon="chevron-right" label="Next" variant="raised" shape="circle" />
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Sizes</p>
          <div class={styles.row}>
            <For each={BUTTON_SIZES}>
              {(size) => <IconButton size={size} variant="secondary" icon="x" label={`Close ${size}`} />}
            </For>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Attached and spaced groups</p>
          <div class={styles.row}>
            <ButtonGroup label="Text alignment" size="sm">
              <IconButton icon="align-left" label="Align left" variant="secondary" />
              <IconButton icon="align-center" label="Align center" variant="secondary" />
              <IconButton icon="align-right" label="Align right" variant="secondary" />
            </ButtonGroup>
            <ButtonGroup label="Range" size="sm">
              <Button variant="secondary">Day</Button>
              <Button variant="secondary">Week</Button>
              <Button variant="secondary">Month</Button>
            </ButtonGroup>
            <ButtonGroup attached={false} label="Dialog actions">
              <Button variant="ghost">Cancel</Button>
              <Button>Save changes</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'actions-toggles',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Toggle button</p>
          <div class={styles.row}>
            <ToggleButton icon="star" label="Favourite" />
            <ToggleButton icon="bell" defaultPressed>
              Following
            </ToggleButton>
            <ToggleButton icon="heart" size="lg" label="Like" />
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Multiple</p>
          <ToggleGroup label="Text style" defaultValue={['bold']}>
            <ToggleButton value="bold" icon="bold" label="Bold" tone="neutral" />
            <ToggleButton value="italic" icon="italic" label="Italic" tone="neutral" />
            <ToggleButton value="underline" icon="underline" label="Underline" tone="neutral" />
          </ToggleGroup>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Single</p>
          <div class={styles.row}>
            <ToggleGroup type="single" defaultValue="grid" label="Layout">
              <ToggleButton value="grid" icon="layout-grid" label="Grid" />
              <ToggleButton value="list" icon="list" label="List" />
            </ToggleGroup>
            <ToggleGroup type="single" defaultValue="week" label="Range" size="sm">
              <ToggleButton value="day">Day</ToggleButton>
              <ToggleButton value="week">Week</ToggleButton>
              <ToggleButton value="month">Month</ToggleButton>
            </ToggleGroup>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'actions-fab',
    span: 6,
    render: () => (
      <div class={styles.stage}>
        <Fab label="New item" position="static" />
        <Fab label="Compose" extended position="static" icon="pencil" />
        <Fab
          label="Create"
          position="static"
          actions={[
            { label: 'Document', icon: 'file-text' },
            { label: 'Folder', icon: 'folder' },
          ]}
        />
      </div>
    ),
  },
  {
    id: 'actions-session',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Sign in with a simulated delay</p>
          <AuthButtonDemo />
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Add to calendar</p>
          <CalendarEventsDemo />
        </div>
      </div>
    ),
  },
  {
    id: 'actions-preferences',
    span: 12,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.group}>
          <p class={styles.caption}>Theme toggles change the theme of this whole page</p>
          <div class={styles.row}>
            <ThemeToggle />
            <ThemeToggle size="sm" />
            <ThemeToggle appearance="segmented" />
            <ThemeToggle appearance="segmented" size="sm" showSystem={false} />
            <div class={styles.onBrand}>
              <ThemeToggle variant="navbar" />
            </div>
            <div class={styles.onMedia}>
              <ThemeToggle variant="dark" />
            </div>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Locale switcher keeps its own selection</p>
          <div class={styles.row}>
            <LocaleSwitcher defaultValue="en" />
            <LocaleSwitcher defaultValue="pl" size="md" />
            <LocaleSwitcher
              defaultValue="de"
              locales={[
                { value: 'pl', label: 'PL', name: 'Polski' },
                { value: 'en', label: 'EN', name: 'English' },
                { value: 'de', label: 'DE', name: 'Deutsch' },
              ]}
            />
          </div>
        </div>
      </div>
    ),
  },
];
