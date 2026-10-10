import { ColorPicker, DatePicker, DateRangePicker, DateTimePicker, TimePicker, TimeStepper } from '@jankrajewskiit/ui';

import type { pickersEn } from '../../i18n/library/pickers';
import { cx } from '../../styles/cx';
import { CalendarRangeDemo } from '../demos/pickers/CalendarRangeDemo';
import { CalendarSelectionDemo } from '../demos/pickers/CalendarSelectionDemo';
import { daysFromToday, isWeekend, today, UPCOMING_PRESETS } from '../demos/pickers/pickerDates';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './pickers.module.css';

const HORIZON_DAYS = 90;

export const pickerSpecimens: readonly Specimen<SpecimenIdOf<typeof pickersEn>>[] = [
  {
    id: 'pickers-date',
    span: 6,
    render: () => (
      <div class={cx(styles.grid, styles.room)}>
        <DatePicker label="Due date" isDisabled={isWeekend} hint="Weekends are unavailable" />
        <DatePicker
          label="Starts"
          defaultValue={today()}
          min={today()}
          max={daysFromToday(HORIZON_DAYS)}
          hint={`Within the next ${HORIZON_DAYS} days`}
        />
      </div>
    ),
  },
  {
    id: 'pickers-date-time',
    span: 6,
    render: () => (
      <div class={cx(styles.grid, styles.room)}>
        <DateTimePicker label="Meeting" min={new Date()} />
        <DateTimePicker label="Reminder" hour12 step={15} />
      </div>
    ),
  },
  {
    id: 'pickers-date-range',
    span: 12,
    render: () => (
      <div class={cx(styles.grid, styles.roomTall)}>
        <DateRangePicker label="Reporting period" />
        <DateRangePicker label="Trip dates" presets={UPCOMING_PRESETS} min={today()} align="end" />
      </div>
    ),
  },
  {
    id: 'pickers-time',
    span: 6,
    render: () => (
      <div class={cx(styles.grid, styles.roomSmall)}>
        <TimePicker label="Start" defaultValue="09:30" step={15} />
        <TimePicker label="End" defaultValue="17:00" hour12 />
        <TimeStepper label="Alarm" defaultValue="07:45" hour12 minuteStep={5} />
      </div>
    ),
  },
  {
    id: 'pickers-color',
    span: 6,
    render: () => (
      <div class={cx(styles.grid, styles.room)}>
        <div class={styles.group}>
          <ColorPicker label="Accent" />
          <ColorPicker label="Label colour" variant="swatches" defaultValue="#2f6fdc" />
        </div>
        <ColorPicker label="Inline" inline defaultValue="#1f9254" />
      </div>
    ),
  },
  {
    id: 'pickers-calendar',
    span: 12,
    render: () => (
      <div class={styles.calendars}>
        <CalendarSelectionDemo />
        <CalendarRangeDemo />
      </div>
    ),
  },
];
