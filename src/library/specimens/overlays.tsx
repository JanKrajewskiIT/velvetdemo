import { useI18n } from '@jankrajewskiit/i18n';
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
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.stack}>
          <div class={styles.row}>
            <Popover
              title={t('library.overlays.specimens.overlays-popover.display')}
              trigger={(trigger) => (
                <Button variant="secondary" size="sm" {...trigger}>
                  {t('library.overlays.specimens.overlays-popover.display')}
                </Button>
              )}
            >
              <div class={styles.panel}>
                <Switch label={t('library.overlays.specimens.overlays-popover.compactRows')} size="sm" />
                <Switch label={t('library.overlays.specimens.overlays-popover.showBadges')} size="sm" checked />
              </div>
            </Popover>
            <Popover
              title={t('library.overlays.specimens.overlays-popover.alignedToEnd')}
              side="top"
              align="end"
              trigger={(trigger) => (
                <Button variant="secondary" size="sm" {...trigger}>
                  {t('library.overlays.specimens.overlays-popover.aboveEnd')}
                </Button>
              )}
            >
              <p class={styles.detail}>{t('library.overlays.specimens.overlays-popover.aboveEndDescription')}</p>
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
              <p class={styles.detail}>{t('library.overlays.specimens.overlays-popover.productDesignerWarsaw')}</p>
            </Popover>
          </div>
          <Text variant="caption" tone="secondary">
            {t('library.overlays.specimens.overlays-popover.hoverHint')}
          </Text>
        </div>
      );
    },
  },
  {
    id: 'overlays-tooltip',
    span: 6,
    render: () => {
      const { t } = useI18n();
      const sides = [
        { side: 'top', label: t('library.overlays.specimens.overlays-tooltip.top') },
        { side: 'bottom', label: t('library.overlays.specimens.overlays-tooltip.bottom') },
        { side: 'left', label: t('library.overlays.specimens.overlays-tooltip.left') },
        { side: 'right', label: t('library.overlays.specimens.overlays-tooltip.right') },
      ] as const;
      return (
        <div class={styles.stack}>
          <div class={styles.row}>
            <For each={sides}>
              {(item) => (
                <Tooltip
                  content={t('library.overlays.specimens.overlays-tooltip.sideTooltip', { side: item.label })}
                  side={item.side}
                >
                  <Button variant="secondary" size="sm">
                    {item.label}
                  </Button>
                </Tooltip>
              )}
            </For>
          </div>
          <div class={styles.row}>
            <Tooltip content={t('library.overlays.specimens.overlays-tooltip.openSearch')} shortcut="Ctrl K">
              <Button variant="secondary" size="sm" iconLeft="search">
                {t('library.overlays.specimens.overlays-tooltip.search')}
              </Button>
            </Tooltip>
            <Text variant="caption" tone="secondary">
              {t('library.overlays.specimens.overlays-tooltip.platformKeys')} <Kbd keys="mod+k" />
            </Text>
          </div>
          <Text variant="caption" tone="secondary">
            {t('library.overlays.specimens.overlays-tooltip.hoverHint')}
          </Text>
        </div>
      );
    },
  },

  {
    id: 'overlays-tour',
    span: 6,
    render: () => <TourDemo />,
  },
];
