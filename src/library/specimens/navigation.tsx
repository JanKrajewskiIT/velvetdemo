import { BottomNav, Breadcrumb, HierarchyNavigator, Link, LoadMore, Pagination, TreeView } from '@jankrajewskiit/ui';

import type { navigationEn } from '../../i18n/library/navigation';
import { cx } from '../../styles/cx';
import { AnchorScrollDemo } from '../demos/navigation/AnchorScrollDemo';
import { LazyTreeDemo } from '../demos/navigation/LazyTreeDemo';
import { LoadMoreDemo } from '../demos/navigation/LoadMoreDemo';
import { MovableTreeDemo } from '../demos/navigation/MovableTreeDemo';
import { NavbarDemo } from '../demos/navigation/NavbarDemo';
import { BOTTOM_ITEMS, PERMISSIONS, TAXONOMY } from '../demos/navigation/navigationData';
import { PaginationDemo } from '../demos/navigation/PaginationDemo';
import { StepperDemo } from '../demos/navigation/StepperDemo';
import { TabsDemo } from '../demos/navigation/TabsDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './navigation.module.css';

const DEMO_HREF = '#library-navigation-demo';

export const navigationSpecimens: readonly Specimen<SpecimenIdOf<typeof navigationEn>>[] = [
  {
    id: 'navigation-tabs',
    span: 12,
    render: () => <TabsDemo />,
  },
  {
    id: 'navigation-breadcrumb-link',
    span: 6,
    render: () => (
      <div class={styles.group}>
        <p class={styles.caption}>Short trail</p>
        <Breadcrumb
          items={[
            { label: 'Home', href: DEMO_HREF, icon: 'home' },
            { label: 'Offers', href: DEMO_HREF },
            { label: 'Warsaw' },
          ]}
        />
        <p class={styles.caption}>Collapsed when the trail exceeds four items</p>
        <Breadcrumb
          items={[
            { label: 'Home', href: DEMO_HREF },
            { label: 'Offers', href: DEMO_HREF },
            { label: 'Engineering', href: DEMO_HREF },
            { label: 'Frontend', href: DEMO_HREF },
            { label: 'Senior developer' },
          ]}
        />
        <p class={styles.caption}>Links</p>
        <p class={styles.prose}>
          Read the <Link href={DEMO_HREF}>release notes</Link>, browse the{' '}
          <Link href={DEMO_HREF} variant="plain">
            changelog
          </Link>{' '}
          or check the{' '}
          <Link href={DEMO_HREF} variant="quiet">
            status history
          </Link>
          .
        </p>
        <div class={styles.row}>
          <Link href={DEMO_HREF} standalone>
            View all
          </Link>
          <Link href="https://example.com" external>
            External
          </Link>
          <Link href={DEMO_HREF} disabled>
            Disabled
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: 'navigation-stepper',
    span: 6,
    render: () => <StepperDemo />,
  },
  {
    id: 'navigation-paging',
    span: 12,
    render: () => (
      <div class={styles.grid}>
        <div class={styles.group}>
          <p class={styles.caption}>Full, with range and rows per page</p>
          <PaginationDemo />
          <p class={styles.caption}>Compact</p>
          <Pagination variant="compact" pageCount={12} defaultPage={3} />
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Incremental loading</p>
          <LoadMoreDemo />
          <p class={styles.caption}>Everything shown</p>
          <LoadMore shown={120} total={120} />
        </div>
      </div>
    ),
  },
  {
    id: 'navigation-trees',
    span: 12,
    render: () => (
      <div class={styles.grid}>
        <div class={styles.group}>
          <p class={styles.caption}>Selectable, one node loads on expand</p>
          <LazyTreeDemo />
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Checkable with tri-state parents</p>
          <TreeView checkable data={PERMISSIONS} defaultExpanded={['reports']} label="Permissions" />
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Drill-down, one level at a time</p>
          <HierarchyNavigator data={TAXONOMY} />
        </div>
      </div>
    ),
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
    id: 'navigation-bottom-nav',
    span: 6,
    render: () => (
      <div class={styles.phones}>
        <div class={styles.phone}>
          <BottomNav fixed={false} items={BOTTOM_ITEMS} label="Primary, badges" />
        </div>
        <div class={cx(styles.phone, styles.phoneWithAction)}>
          <BottomNav fixed={false} items={BOTTOM_ITEMS} action={{ label: 'Create' }} label="Primary, centre action" />
        </div>
      </div>
    ),
  },
  {
    id: 'navigation-anchor',
    span: 6,
    render: () => <AnchorScrollDemo />,
  },
];
