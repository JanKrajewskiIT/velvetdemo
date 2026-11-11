import { useI18n } from '@jankrajewskiit/i18n';
import { BottomNav, Breadcrumb, HierarchyNavigator, Link, LoadMore, Pagination, TreeView } from '@jankrajewskiit/ui';

import type { navigationEn } from '../../i18n/library/navigation';
import { cx } from '../../styles/cx';
import { AnchorScrollDemo } from '../demos/navigation/AnchorScrollDemo';
import { LazyTreeDemo } from '../demos/navigation/LazyTreeDemo';
import { LoadMoreDemo } from '../demos/navigation/LoadMoreDemo';
import { MovableTreeDemo } from '../demos/navigation/MovableTreeDemo';
import { NavbarChipDemo } from '../demos/navigation/NavbarChipDemo';
import { NavbarDemo } from '../demos/navigation/NavbarDemo';
import { bottomItems, PERMISSIONS, TAXONOMY } from '../demos/navigation/navigationData';
import { PaginationDemo } from '../demos/navigation/PaginationDemo';
import { PeriodNavDemo } from '../demos/navigation/PeriodNavDemo';
import { StepperDemo } from '../demos/navigation/StepperDemo';
import { TabsDemo } from '../demos/navigation/TabsDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './navigation.module.css';

const DEMO_HREF = '#library-navigation-demo';

export const navigationSpecimens: readonly Specimen<SpecimenIdOf<typeof navigationEn>>[] = [
  {
    id: 'navigation-period',
    span: 6,
    render: () => <PeriodNavDemo />,
  },
  {
    id: 'navigation-tabs',
    span: 12,
    render: () => <TabsDemo />,
  },
  {
    id: 'navigation-breadcrumb-link',
    span: 6,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.group}>
          <p class={styles.caption}>{t('library.navigation.specimens.navigation-breadcrumb-link.shortTrail')}</p>
          <Breadcrumb
            items={[
              {
                label: t('library.navigation.specimens.navigation-breadcrumb-link.home'),
                href: DEMO_HREF,
                icon: 'home',
              },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.offers'), href: DEMO_HREF },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.warsaw') },
            ]}
          />
          <p class={styles.caption}>{t('library.navigation.specimens.navigation-breadcrumb-link.collapsedHint')}</p>
          <Breadcrumb
            items={[
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.home'), href: DEMO_HREF },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.offers'), href: DEMO_HREF },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.engineering'), href: DEMO_HREF },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.frontend'), href: DEMO_HREF },
              { label: t('library.navigation.specimens.navigation-breadcrumb-link.seniorDeveloper') },
            ]}
          />
          <p class={styles.caption}>{t('library.navigation.specimens.navigation-breadcrumb-link.links')}</p>
          <p class={styles.prose}>
            {t('library.navigation.specimens.navigation-breadcrumb-link.proseRead')}{' '}
            <Link href={DEMO_HREF}>{t('library.navigation.specimens.navigation-breadcrumb-link.releaseNotes')}</Link>
            {t('library.navigation.specimens.navigation-breadcrumb-link.proseBrowse')}{' '}
            <Link href={DEMO_HREF} variant="plain">
              {t('library.navigation.specimens.navigation-breadcrumb-link.changelog')}
            </Link>{' '}
            {t('library.navigation.specimens.navigation-breadcrumb-link.proseOr')}{' '}
            <Link href={DEMO_HREF} variant="quiet">
              {t('library.navigation.specimens.navigation-breadcrumb-link.statusHistory')}
            </Link>
            .
          </p>
          <div class={styles.row}>
            <Link href={DEMO_HREF} standalone>
              {t('library.navigation.specimens.navigation-breadcrumb-link.viewAll')}
            </Link>
            <Link href="https://example.com" external>
              {t('library.navigation.specimens.navigation-breadcrumb-link.external')}
            </Link>
            <Link href={DEMO_HREF} disabled>
              {t('library.navigation.specimens.navigation-breadcrumb-link.disabled')}
            </Link>
          </div>
        </div>
      );
    },
  },
  {
    id: 'navigation-stepper',
    span: 6,
    render: () => <StepperDemo />,
  },
  {
    id: 'navigation-paging',
    span: 12,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.grid}>
          <div class={styles.group}>
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-paging.fullCaption')}</p>
            <PaginationDemo />
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-paging.compact')}</p>
            <Pagination variant="compact" pageCount={12} defaultPage={3} />
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-paging.incremental')}</p>
            <LoadMoreDemo />
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-paging.everythingShown')}</p>
            <LoadMore shown={120} total={120} />
          </div>
        </div>
      );
    },
  },
  {
    id: 'navigation-trees',
    span: 12,
    render: () => {
      const { t } = useI18n();
      return (
        <div class={styles.grid}>
          <div class={styles.group}>
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-trees.lazyCaption')}</p>
            <LazyTreeDemo />
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-trees.checkableCaption')}</p>
            <TreeView
              checkable
              data={PERMISSIONS}
              defaultExpanded={['reports']}
              label={t('library.navigation.specimens.navigation-trees.permissionsLabel')}
            />
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{t('library.navigation.specimens.navigation-trees.drillCaption')}</p>
            <HierarchyNavigator data={TAXONOMY} />
          </div>
        </div>
      );
    },
  },
  {
    id: 'navigation-tree-move',
    span: 12,
    render: () => <MovableTreeDemo />,
  },
  {
    id: 'navigation-navbar',
    span: 12,
    render: () => <NavbarDemo />,
  },
  {
    id: 'navigation-navbar-chip',
    span: 12,
    render: () => <NavbarChipDemo />,
  },
  {
    id: 'navigation-bottom-nav',
    span: 6,
    render: () => {
      const { t } = useI18n();
      const items = bottomItems(t);
      return (
        <div class={styles.phones}>
          <div class={styles.phone}>
            <BottomNav
              fixed={false}
              items={items}
              label={t('library.navigation.specimens.navigation-bottom-nav.primaryBadges')}
            />
          </div>
          <div class={cx(styles.phone, styles.phoneWithAction)}>
            <BottomNav
              fixed={false}
              items={items}
              action={{ label: t('library.navigation.specimens.navigation-bottom-nav.create') }}
              label={t('library.navigation.specimens.navigation-bottom-nav.primaryCentreAction')}
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'navigation-anchor',
    span: 6,
    render: () => <AnchorScrollDemo />,
  },
];
