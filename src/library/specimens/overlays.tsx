import { Button, Kbd, Popover, Switch, Text, Tooltip } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import type { overlaysEn } from '../../i18n/library/overlays';
import { BottomSheetDemo } from '../demos/overlays/BottomSheetDemo';
import { ConfirmDemo } from '../demos/overlays/ConfirmDemo';
import { DialogDemo } from '../demos/overlays/DialogDemo';
import { DrawerDemo } from '../demos/overlays/DrawerDemo';
import { TourDemo } from '../demos/overlays/TourDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './overlays.module.css';

const TOOLTIP_SIDES = [
  { side: 'top', label: 'Top' },
  { side: 'bottom', label: 'Bottom' },
  { side: 'left', label: 'Left' },
  { side: 'right', label: 'Right' },
] as const;

export const overlaySpecimens: readonly Specimen<SpecimenIdOf<typeof overlaysEn>>[] = [
  {
    id: 'overlays-dialog',
    span: 4,
    render: () => <DialogDemo />,
  },
  {
    id: 'overlays-drawer',
    span: 4,
    render: () => <DrawerDemo />,
  },
  {
    id: 'overlays-bottom-sheet',
    span: 4,
    render: () => <BottomSheetDemo />,
  },
  {
    id: 'overlays-confirm',
    span: 6,
    render: () => <ConfirmDemo />,
  },
  {
    id: 'overlays-popover',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.row}>
          <Popover
            title="Display"
            trigger={(trigger) => (
              <Button variant="secondary" size="sm" {...trigger}>
                Display
              </Button>
            )}
          >
            <div class={styles.panel}>
              <Switch label="Compact rows" size="sm" />
              <Switch label="Show badges" size="sm" checked />
            </div>
          </Popover>
          <Popover
            title="Aligned to the end"
            side="top"
            align="end"
            trigger={(trigger) => (
              <Button variant="secondary" size="sm" {...trigger}>
                Above, end
              </Button>
            )}
          >
            <p class={styles.detail}>Opens above and aligns to the end edge of its trigger.</p>
          </Popover>
          <Popover
            openOn="hover"
            title="Anna Kowalska"
            trigger={(trigger) => (
              <Button variant="link" size="sm" {...trigger}>
                @anna
              </Button>
            )}
          >
            <p class={styles.detail}>Product designer, Warsaw</p>
          </Popover>
        </div>
        <Text variant="caption" tone="secondary">
          Outside click and Esc close a panel; the hover card also opens on focus.
        </Text>
      </div>
    ),
  },
  {
    id: 'overlays-tooltip',
    span: 6,
    render: () => (
      <div class={styles.stack}>
        <div class={styles.row}>
          <For each={TOOLTIP_SIDES}>
            {(item) => (
              <Tooltip content={`${item.label} tooltip`} side={item.side}>
                <Button variant="secondary" size="sm">
                  {item.label}
                </Button>
              </Tooltip>
            )}
          </For>
        </div>
        <div class={styles.row}>
          <Tooltip content="Open search" shortcut="Ctrl K">
            <Button variant="secondary" size="sm" iconLeft="search">
              Search
            </Button>
          </Tooltip>
          <Text variant="caption" tone="secondary">
            Platform-aware keys: <Kbd keys="mod+k" />
          </Text>
        </div>
        <Text variant="caption" tone="secondary">
          Hover or focus a button; Esc dismisses the hint.
        </Text>
      </div>
    ),
  },
  {
    id: 'overlays-tour',
    span: 6,
    render: () => <TourDemo />,
  },
];
