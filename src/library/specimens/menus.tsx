import { useI18n } from '@jankrajewskiit/i18n';
import { MenuChip } from '@jankrajewskiit/ui';

import type { menusEn } from '../../i18n/library/menus';
import { cx } from '../../styles/cx';
import { CommandPaletteDemo } from '../demos/menus/CommandPaletteDemo';
import { ContextMenuDemo } from '../demos/menus/ContextMenuDemo';
import { DropdownButtonDemo } from '../demos/menus/DropdownButtonDemo';
import { LocaleSwitcherDemo } from '../demos/menus/LocaleSwitcherDemo';
import { MenuDemo } from '../demos/menus/MenuDemo';
import { MenuPanelDemo } from '../demos/menus/MenuPanelDemo';
import { ToolbarDemo } from '../demos/menus/ToolbarDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './menus.module.css';

export const menuSpecimens: readonly Specimen<SpecimenIdOf<typeof menusEn>>[] = [
  {
    id: 'menus-locale',
    span: 6,
    render: () => <LocaleSwitcherDemo />,
  },
  {
    id: 'menus-menu',
    span: 6,
    render: () => <MenuDemo />,
  },
  {
    id: 'menus-panel',
    span: 6,
    render: () => <MenuPanelDemo />,
  },
  {
    id: 'menus-context-menu',
    span: 6,
    render: () => <ContextMenuDemo />,
  },
  {
    id: 'menus-dropdown-button',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={cx(styles.group, styles.room)}>
          <DropdownButtonDemo />
          <p class={styles.caption}>{t('library.menus.specimens.menus-dropdown-button.filterChips')}</p>
          <div class={styles.row}>
            <MenuChip
              label={t('library.menus.specimens.menus-dropdown-button.statusLabel')}
              defaultValue="open"
              options={[
                { value: 'open', label: t('library.menus.specimens.menus-dropdown-button.open') },
                { value: 'review', label: t('library.menus.specimens.menus-dropdown-button.inReview') },
                { value: 'closed', label: t('library.menus.specimens.menus-dropdown-button.closed') },
              ]}
            />
            <MenuChip
              label={t('library.menus.specimens.menus-dropdown-button.ownerLabel')}
              icon="user"
              options={['Anna', 'Marek', 'Julia']}
            />
            <MenuChip
              label={t('library.menus.specimens.menus-dropdown-button.dueLabel')}
              icon="calendar"
              options={[
                t('library.menus.specimens.menus-dropdown-button.today'),
                t('library.menus.specimens.menus-dropdown-button.thisWeek'),
                t('library.menus.specimens.menus-dropdown-button.overdue'),
              ]}
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'menus-command-palette',
    span: 6,
    render: () => <CommandPaletteDemo />,
  },
  {
    id: 'menus-toolbar',
    span: 12,
    render: () => <ToolbarDemo />,
  },
];
