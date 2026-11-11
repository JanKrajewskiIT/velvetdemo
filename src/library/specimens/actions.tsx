import { useI18n } from '@jankrajewskiit/i18n';
import {
  Button,
  ButtonGroup,
  type ButtonSize,
  type ButtonVariant,
  CopyButton,
  Fab,
  IconButton,
  type IconButtonVariant,
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

export const actionSpecimens: readonly Specimen<SpecimenIdOf<typeof actionsEn>>[] = [
  {
    id: 'actions-button',
    span: 8,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-button.variants')}</p>
            <div class={styles.row}>
              <For each={BUTTON_VARIANTS}>{(variant) => <Button variant={variant}>{variant}</Button>}</For>
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-button.sizes')}</p>
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
            <p class={styles.caption}>{ts('library.actions.specimens.actions-button.iconsAndStates')}</p>
            <div class={styles.row}>
              <Button iconLeft="plus">{ts('library.actions.specimens.actions-button.newProject')}</Button>
              <Button iconRight="arrow-right" variant="secondary">
                {ts('library.actions.specimens.actions-button.continueLabel')}
              </Button>
              <Button loading>{ts('library.actions.specimens.actions-button.saving')}</Button>
              <Button disabled>{ts('library.actions.specimens.actions-button.disabled')}</Button>
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-button.block')}</p>
            <Button block variant="dashed" iconLeft="plus">
              {ts('library.actions.specimens.actions-button.addRow')}
            </Button>
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions-copy',
    span: 4,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-copy.button')}</p>
            <div class={styles.row}>
              <CopyButton value="npm install @jankrajewskiit/ui" />
              <CopyButton value="npm install @jankrajewskiit/ui" variant="primary" size="md" />
              <CopyButton value="npm install @jankrajewskiit/ui" variant="soft" size="lg" />
              <CopyButton value="npm install @jankrajewskiit/ui" iconOnly variant="ghost" />
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions-icon-buttons',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      const iconButtons: readonly { variant: IconButtonVariant; icon: string; label: string }[] = [
        { variant: 'primary', icon: 'plus', label: ts('library.actions.specimens.actions-icon-buttons.add') },
        { variant: 'secondary', icon: 'pencil', label: ts('library.actions.specimens.actions-icon-buttons.edit') },
        { variant: 'soft', icon: 'bookmark', label: ts('library.actions.specimens.actions-icon-buttons.save') },
        { variant: 'ghost', icon: 'settings', label: ts('library.actions.specimens.actions-icon-buttons.settings') },
        { variant: 'danger', icon: 'trash-2', label: ts('library.actions.specimens.actions-icon-buttons.delete') },
      ];
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-icon-buttons.variants')}</p>
            <div class={styles.row}>
              <For each={iconButtons}>
                {(item) => <IconButton variant={item.variant} icon={item.icon} label={item.label} />}
              </For>
              <IconButton
                icon="chevron-right"
                label={ts('library.actions.specimens.actions-icon-buttons.next')}
                variant="raised"
                shape="circle"
              />
              <div class={styles.onMedia}>
                <IconButton
                  icon="play"
                  label={ts('library.actions.specimens.actions-icon-buttons.playPreview')}
                  variant="overlay"
                  shape="circle"
                />
              </div>
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-icon-buttons.sizes')}</p>
            <div class={styles.row}>
              <For each={BUTTON_SIZES}>
                {(size) => (
                  <IconButton
                    size={size}
                    variant="secondary"
                    icon="x"
                    label={ts('library.actions.specimens.actions-icon-buttons.closeSize', { size })}
                  />
                )}
              </For>
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-icon-buttons.groups')}</p>
            <div class={styles.row}>
              <ButtonGroup label={ts('library.actions.specimens.actions-icon-buttons.textAlignment')} size="sm">
                <IconButton
                  icon="align-left"
                  label={ts('library.actions.specimens.actions-icon-buttons.alignLeft')}
                  variant="secondary"
                />
                <IconButton
                  icon="align-center"
                  label={ts('library.actions.specimens.actions-icon-buttons.alignCenter')}
                  variant="secondary"
                />
                <IconButton
                  icon="align-right"
                  label={ts('library.actions.specimens.actions-icon-buttons.alignRight')}
                  variant="secondary"
                />
              </ButtonGroup>
              <ButtonGroup label={ts('library.actions.specimens.actions-icon-buttons.range')} size="sm">
                <Button variant="secondary">{ts('library.actions.specimens.actions-icon-buttons.day')}</Button>
                <Button variant="secondary">{ts('library.actions.specimens.actions-icon-buttons.week')}</Button>
                <Button variant="secondary">{ts('library.actions.specimens.actions-icon-buttons.month')}</Button>
              </ButtonGroup>
              <ButtonGroup attached={false} label={ts('library.actions.specimens.actions-icon-buttons.dialogActions')}>
                <Button variant="ghost">{ts('library.actions.specimens.actions-icon-buttons.cancel')}</Button>
                <Button>{ts('library.actions.specimens.actions-icon-buttons.saveChanges')}</Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions-toggles',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-toggles.toggleButton')}</p>
            <div class={styles.row}>
              <ToggleButton icon="star" label={ts('library.actions.specimens.actions-toggles.favourite')} />
              <ToggleButton icon="bell" defaultPressed>
                {ts('library.actions.specimens.actions-toggles.following')}
              </ToggleButton>
              <ToggleButton icon="heart" size="lg" label={ts('library.actions.specimens.actions-toggles.like')} />
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-toggles.multiple')}</p>
            <ToggleGroup label={ts('library.actions.specimens.actions-toggles.textStyle')} defaultValue={['bold']}>
              <ToggleButton
                value="bold"
                icon="bold"
                label={ts('library.actions.specimens.actions-toggles.bold')}
                tone="neutral"
              />
              <ToggleButton
                value="italic"
                icon="italic"
                label={ts('library.actions.specimens.actions-toggles.italic')}
                tone="neutral"
              />
              <ToggleButton
                value="underline"
                icon="underline"
                label={ts('library.actions.specimens.actions-toggles.underline')}
                tone="neutral"
              />
            </ToggleGroup>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-toggles.single')}</p>
            <div class={styles.row}>
              <ToggleGroup
                type="single"
                defaultValue="grid"
                label={ts('library.actions.specimens.actions-toggles.layout')}
              >
                <ToggleButton
                  value="grid"
                  icon="layout-grid"
                  label={ts('library.actions.specimens.actions-toggles.grid')}
                />
                <ToggleButton value="list" icon="list" label={ts('library.actions.specimens.actions-toggles.list')} />
              </ToggleGroup>
              <ToggleGroup
                type="single"
                defaultValue="week"
                label={ts('library.actions.specimens.actions-toggles.range')}
                size="sm"
              >
                <ToggleButton value="day">{ts('library.actions.specimens.actions-toggles.day')}</ToggleButton>
                <ToggleButton value="week">{ts('library.actions.specimens.actions-toggles.week')}</ToggleButton>
                <ToggleButton value="month">{ts('library.actions.specimens.actions-toggles.month')}</ToggleButton>
              </ToggleGroup>
              <ToggleGroup
                attached={false}
                defaultValue={['email']}
                label={ts('library.actions.specimens.actions-toggles.notificationChannels')}
                size="lg"
              >
                <ToggleButton value="email" icon="mail">
                  {ts('library.actions.specimens.actions-toggles.email')}
                </ToggleButton>
                <ToggleButton value="in-app" icon="bell">
                  {ts('library.actions.specimens.actions-toggles.inApp')}
                </ToggleButton>
              </ToggleGroup>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions-fab',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stage}>
          <Fab label={ts('library.actions.specimens.actions-fab.newItem')} position="static" />
          <Fab label={ts('library.actions.specimens.actions-fab.compose')} extended position="static" icon="pencil" />
          <Fab
            label={ts('library.actions.specimens.actions-fab.create')}
            position="static"
            actions={[
              { label: ts('library.actions.specimens.actions-fab.document'), icon: 'file-text' },
              { label: ts('library.actions.specimens.actions-fab.folder'), icon: 'folder' },
            ]}
          />
        </div>
      );
    },
  },
  {
    id: 'actions-session',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-session.sessionCaption')}</p>
            <AuthButtonDemo />
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-session.addToCalendar')}</p>
            <CalendarEventsDemo />
          </div>
        </div>
      );
    },
  },
  {
    id: 'actions-preferences',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.actions.specimens.actions-preferences.themeCaption')}</p>
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
        </div>
      );
    },
  },
];
