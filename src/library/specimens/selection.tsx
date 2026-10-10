import {
  Cascader,
  Chip,
  ChipGroup,
  EditableCollection,
  MultiSelect,
  OptionSwitcher,
  Radio,
  Rating,
  Select,
  Slider,
  Switch,
  TransferList,
  TreeSelect,
} from '@jankrajewskiit/ui';

import type { selectionEn } from '../../i18n/library/selection';
import { cx } from '../../styles/cx';
import { AutocompleteDemo } from '../demos/selection/AutocompleteDemo';
import { IndeterminateGroupDemo } from '../demos/selection/IndeterminateGroupDemo';
import { RatingReviewsDemo } from '../demos/selection/RatingReviewsDemo';
import {
  BILLING_CYCLES,
  COUNTRIES,
  DEPARTMENTS,
  MEMBERS,
  REGIONS,
  ROLE_OPTIONS,
  SKILL_LEVELS,
  SKILLS,
  TEAMS,
  VIEW_OPTIONS,
} from '../demos/selection/selectionData';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './selection.module.css';

const percent = (value: number) => `${value}%`;
const euros = (value: number) => `€${value}`;

export const selectionSpecimens: readonly Specimen<SpecimenIdOf<typeof selectionEn>>[] = [
  {
    id: 'selection-select',
    span: 6,
    render: () => (
      <div class={cx(styles.grid, styles.room)}>
        <Select label="Role" options={ROLE_OPTIONS} defaultValue="editor" hint="Viewer is unavailable" />
        <Select label="Country" options={COUNTRIES} placeholder="Pick a country" />
        <Select label="Billing cycle" options={BILLING_CYCLES} error="Choose a billing cycle" />
      </div>
    ),
  },
  {
    id: 'selection-autocomplete',
    span: 6,
    render: () => <AutocompleteDemo />,
  },
  {
    id: 'selection-hierarchy',
    span: 12,
    render: () => (
      <div class={cx(styles.grid, styles.roomTall)}>
        <MultiSelect
          label="Countries"
          options={COUNTRIES}
          defaultValue={['Poland', 'Germany']}
          max={4}
          hint="Up to four"
        />
        <Cascader label="Location" data={REGIONS} searchable placeholder="Region, country, city" />
        <TreeSelect label="Team" data={TEAMS} defaultExpanded={['design']} />
        <TreeSelect label="Teams" data={TEAMS} multiple defaultExpanded={['eng']} />
      </div>
    ),
  },
  {
    id: 'selection-chips-switcher',
    span: 12,
    render: () => (
      <div class={styles.grid}>
        <div class={styles.group}>
          <p class={styles.caption}>Multiple</p>
          <ChipGroup label="Departments" options={DEPARTMENTS} defaultValue={['Design']} />
          <p class={styles.caption}>Single, deselectable</p>
          <ChipGroup label="One department" options={DEPARTMENTS} multiple={false} defaultValue="Product" />
          <p class={styles.caption}>Standalone chips</p>
          <div class={styles.row}>
            <Chip>Plain</Chip>
            <Chip selected count={3}>
              Selected
            </Chip>
            <Chip dashed icon="plus">
              New label
            </Chip>
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Track and icon-only</p>
          <OptionSwitcher label="View" options={VIEW_OPTIONS} />
          <OptionSwitcher label="View icons" options={VIEW_OPTIONS} iconOnly defaultValue="grid" />
          <p class={styles.caption}>Chips and tiles</p>
          <OptionSwitcher label="Plan" variant="chips" options={['Monthly', 'Yearly', 'Lifetime']} />
          <OptionSwitcher label="Layout" variant="tiles" options={VIEW_OPTIONS} defaultValue="board" />
        </div>
      </div>
    ),
  },
  {
    id: 'selection-toggles',
    span: 6,
    render: () => (
      <div class={styles.grid}>
        <div class={styles.group}>
          <p class={styles.caption}>Checkbox</p>
          <IndeterminateGroupDemo />
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Radio</p>
          <div class={styles.group} role="radiogroup" aria-label="Plan">
            <Radio name="selection-plan" label="Free" checked />
            <Radio name="selection-plan" label="Pro" description="Billed monthly" />
            <Radio name="selection-plan" label="Enterprise" disabled />
          </div>
        </div>
        <div class={styles.group}>
          <p class={styles.caption}>Switch</p>
          <div class={styles.group} role="group" aria-label="Preferences">
            <Switch label="Notifications" checked />
            <Switch label="Weekly digest" description="Sent on Monday morning" />
            <Switch label="Beta features" disabled />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'selection-editable',
    span: 6,
    render: () => (
      <EditableCollection
        title="Skills"
        label="Skills"
        placeholder="Skill"
        addLabel="Add skill"
        levels={SKILL_LEVELS}
        weighted
        defaultItems={SKILLS}
        maxItems={6}
      />
    ),
  },
  {
    id: 'selection-slider-rating',
    span: 12,
    render: () => (
      <div class={styles.grid}>
        <div class={styles.group}>
          <Slider label="Volume" min={0} max={100} defaultValue={40} showValue format={percent} />
          <Slider
            label="Price range"
            min={0}
            max={500}
            step={10}
            defaultValue={[120, 340]}
            showValue
            showBounds
            format={euros}
            thumbLabels={['Minimum price', 'Maximum price']}
          />
          <Slider
            label="Snap to marks"
            min={0}
            max={100}
            marks={[0, 25, 50, 75, 100]}
            snapToMarks
            defaultValue={50}
            format={percent}
          />
        </div>
        <div class={styles.group}>
          <Rating label="Your rating" defaultValue={3} showValue />
          <Rating label="Average rating" defaultValue={4} readOnly size="sm" />
          <RatingReviewsDemo />
        </div>
      </div>
    ),
  },
  {
    id: 'selection-transfer',
    span: 12,
    render: () => (
      <TransferList
        label="Project members"
        items={MEMBERS}
        defaultValue={['anna']}
        titles={['Available', 'Assigned']}
        height={240}
        searchable
        orderable
        groupBy
      />
    ),
  },
];
