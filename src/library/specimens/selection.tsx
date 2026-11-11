import { useI18n } from '@jankrajewskiit/i18n';
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
import {
  billingCycles,
  COUNTRIES,
  departments,
  members,
  regions,
  roleOptions,
  searchReviewers,
  skillItems,
  skillLevels,
  skillOptions,
  teams,
  viewOptions,
} from '../demos/selection/selectionData';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './selection.module.css';

const percent = (value: number) => `${value}%`;
const euros = (value: number) => `€${value}`;

export const selectionSpecimens: readonly Specimen<SpecimenIdOf<typeof selectionEn>>[] = [
  {
    id: 'selection-select',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.room)}>
          <Select
            label={ts('library.selection.specimens.selection-select.roleLabel')}
            options={roleOptions(ts)}
            defaultValue="editor"
            hint={ts('library.selection.specimens.selection-select.roleHint')}
          />
          <Select
            label={ts('library.selection.specimens.selection-select.countryLabel')}
            options={COUNTRIES}
            placeholder={ts('library.selection.specimens.selection-select.countryPlaceholder')}
          />
          <Select
            label={ts('library.selection.specimens.selection-select.billingLabel')}
            options={billingCycles(ts)}
            error={ts('library.selection.specimens.selection-select.billingError')}
          />
        </div>
      );
    },
  },
  {
    id: 'selection-autocomplete',
    span: 6,
    render: () => <AutocompleteDemo />,
  },
  {
    id: 'selection-hierarchy',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      const skills = skillOptions(ts);
      const teamTree = teams(ts);
      return (
        <div class={cx(styles.grid, styles.roomTall)}>
          <MultiSelect
            label={ts('library.selection.specimens.selection-hierarchy.countriesLabel')}
            options={COUNTRIES}
            defaultValue={['Poland', 'Germany']}
            max={4}
            hint={ts('library.selection.specimens.selection-hierarchy.countriesHint')}
          />
          <MultiSelect
            label={ts('library.selection.specimens.selection-hierarchy.reviewersLabel')}
            loadOptions={searchReviewers}
            max={3}
            placeholder={ts('library.selection.specimens.selection-hierarchy.reviewersPlaceholder')}
          />
          <MultiSelect
            label={ts('library.selection.specimens.selection-hierarchy.skillsLabel')}
            options={skills}
            defaultValue={skills.slice(0, 2).map((skill) => skill.value)}
          />
          <Cascader
            label={ts('library.selection.specimens.selection-hierarchy.locationLabel')}
            data={regions(ts)}
            searchable
            placeholder={ts('library.selection.specimens.selection-hierarchy.locationPlaceholder')}
          />
          <TreeSelect
            label={ts('library.selection.specimens.selection-hierarchy.teamLabel')}
            data={teamTree}
            defaultExpanded={['design']}
          />
          <TreeSelect
            label={ts('library.selection.specimens.selection-hierarchy.teamsLabel')}
            data={teamTree}
            multiple
            defaultExpanded={['eng']}
          />
        </div>
      );
    },
  },
  {
    id: 'selection-chips-switcher',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      const departmentList = departments(ts);
      const views = viewOptions(ts);
      return (
        <div class={styles.grid}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.selection.specimens.selection-chips-switcher.multipleCaption')}</p>
            <ChipGroup
              label={ts('library.selection.specimens.selection-chips-switcher.departmentsLabel')}
              options={departmentList}
              defaultValue={departmentList.slice(0, 1).map((department) => department.value)}
            />
            <p class={styles.caption}>{ts('library.selection.specimens.selection-chips-switcher.singleCaption')}</p>
            <ChipGroup
              label={ts('library.selection.specimens.selection-chips-switcher.oneDepartmentLabel')}
              options={departmentList}
              multiple={false}
              defaultValue="product"
            />
            <p class={styles.caption}>{ts('library.selection.specimens.selection-chips-switcher.standaloneCaption')}</p>
            <div class={styles.row}>
              <Chip>{ts('library.selection.specimens.selection-chips-switcher.plain')}</Chip>
              <Chip selected count={3}>
                {ts('library.selection.specimens.selection-chips-switcher.selected')}
              </Chip>
              <Chip dashed icon="plus">
                {ts('library.selection.specimens.selection-chips-switcher.newLabel')}
              </Chip>
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.selection.specimens.selection-chips-switcher.trackCaption')}</p>
            <OptionSwitcher
              label={ts('library.selection.specimens.selection-chips-switcher.viewLabel')}
              options={views}
            />
            <OptionSwitcher
              label={ts('library.selection.specimens.selection-chips-switcher.viewIconsLabel')}
              options={views}
              iconOnly
              defaultValue="grid"
            />
            <p class={styles.caption}>{ts('library.selection.specimens.selection-chips-switcher.chipsCaption')}</p>
            <OptionSwitcher
              label={ts('library.selection.specimens.selection-chips-switcher.planLabel')}
              variant="chips"
              options={[
                ts('library.selection.specimens.selection-chips-switcher.monthly'),
                ts('library.selection.specimens.selection-chips-switcher.yearly'),
                ts('library.selection.specimens.selection-chips-switcher.lifetime'),
              ]}
            />
            <OptionSwitcher
              label={ts('library.selection.specimens.selection-chips-switcher.layoutLabel')}
              variant="tiles"
              options={views}
              defaultValue="board"
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'selection-toggles',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.grid}>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.selection.specimens.selection-toggles.checkboxCaption')}</p>
            <IndeterminateGroupDemo />
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.selection.specimens.selection-toggles.radioCaption')}</p>
            <div
              class={styles.group}
              role="radiogroup"
              aria-label={ts('library.selection.specimens.selection-toggles.planGroupLabel')}
            >
              <Radio name="selection-plan" label={ts('library.selection.specimens.selection-toggles.free')} checked />
              <Radio
                name="selection-plan"
                label={ts('library.selection.specimens.selection-toggles.pro')}
                description={ts('library.selection.specimens.selection-toggles.proDescription')}
              />
              <Radio
                name="selection-plan"
                label={ts('library.selection.specimens.selection-toggles.enterprise')}
                disabled
              />
            </div>
          </div>
          <div class={styles.group}>
            <p class={styles.caption}>{ts('library.selection.specimens.selection-toggles.switchCaption')}</p>
            <div
              class={styles.group}
              role="group"
              aria-label={ts('library.selection.specimens.selection-toggles.preferencesGroupLabel')}
            >
              <Switch label={ts('library.selection.specimens.selection-toggles.notifications')} checked />
              <Switch
                label={ts('library.selection.specimens.selection-toggles.weeklyDigest')}
                description={ts('library.selection.specimens.selection-toggles.weeklyDigestDescription')}
              />
              <Switch label={ts('library.selection.specimens.selection-toggles.betaFeatures')} disabled />
            </div>
          </div>
        </div>
      );
    },
  },
  {
    id: 'selection-editable',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <EditableCollection
          title={ts('library.selection.specimens.selection-editable.skillsTitle')}
          label={ts('library.selection.specimens.selection-editable.skillsLabel')}
          placeholder={ts('library.selection.specimens.selection-editable.placeholder')}
          addLabel={ts('library.selection.specimens.selection-editable.addLabel')}
          levels={skillLevels(ts)}
          weighted
          defaultItems={skillItems(ts)}
          maxItems={6}
        />
      );
    },
  },
  {
    id: 'selection-slider-rating',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={styles.grid}>
          <div class={styles.group}>
            <Slider
              label={ts('library.selection.specimens.selection-slider-rating.volumeLabel')}
              min={0}
              max={100}
              defaultValue={40}
              showValue
              format={percent}
            />
            <Slider
              label={ts('library.selection.specimens.selection-slider-rating.priceRangeLabel')}
              min={0}
              max={500}
              step={10}
              defaultValue={[120, 340]}
              showValue
              showBounds
              format={euros}
              thumbLabels={[
                ts('library.selection.specimens.selection-slider-rating.minimumPrice'),
                ts('library.selection.specimens.selection-slider-rating.maximumPrice'),
              ]}
            />
            <Slider
              label={ts('library.selection.specimens.selection-slider-rating.snapToMarksLabel')}
              min={0}
              max={100}
              marks={[0, 25, 50, 75, 100]}
              snapToMarks
              defaultValue={50}
              format={percent}
            />
          </div>
          <div class={styles.group}>
            <Rating
              label={ts('library.selection.specimens.selection-slider-rating.yourRating')}
              defaultValue={3}
              showValue
            />
            <Rating
              label={ts('library.selection.specimens.selection-slider-rating.averageRating')}
              defaultValue={4}
              readOnly
              size="sm"
            />
          </div>
        </div>
      );
    },
  },
  {
    id: 'selection-transfer',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      return (
        <TransferList
          label={ts('library.selection.specimens.selection-transfer.projectMembersLabel')}
          items={members(ts)}
          defaultValue={['anna']}
          titles={[
            ts('library.selection.specimens.selection-transfer.availableTitle'),
            ts('library.selection.specimens.selection-transfer.assignedTitle'),
          ]}
          height={240}
          searchable
          orderable
          groupBy
        />
      );
    },
  },
];
