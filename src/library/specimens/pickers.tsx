import { useI18n } from '@jankrajewskiit/i18n';
import { ColorPicker, DatePicker, DateRangePicker, DateTimePicker, TimePicker, TimeStepper } from '@jankrajewskiit/ui';

import type { pickersEn } from '../../i18n/library/pickers';
import { cx } from '../../styles/cx';
import { CalendarRangeDemo } from '../demos/pickers/CalendarRangeDemo';
import { CalendarSelectionDemo } from '../demos/pickers/CalendarSelectionDemo';
import { daysFromToday, isWeekend, today, upcomingPresets } from '../demos/pickers/pickerDates';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './pickers.module.css';

const HORIZON_DAYS = 90;

export const pickerSpecimens: readonly Specimen<SpecimenIdOf<typeof pickersEn>>[] = [
  {
    id: 'pickers-date',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.room)}>
          <DatePicker
            label={ts('library.pickers.specimens.pickers-date.dueDateLabel')}
            isDisabled={isWeekend}
            hint={ts('library.pickers.specimens.pickers-date.weekendsHint')}
          />
          <DatePicker
            label={ts('library.pickers.specimens.pickers-date.startsLabel')}
            defaultValue={today()}
            min={today()}
            max={daysFromToday(HORIZON_DAYS)}
            hint={ts('library.pickers.specimens.pickers-date.horizonHint', { days: HORIZON_DAYS })}
          />
        </div>
      );
    },
  },
  {
    id: 'pickers-date-time',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.room)}>
          <DateTimePicker label={ts('library.pickers.specimens.pickers-date-time.meetingLabel')} min={new Date()} />
          <DateTimePicker label={ts('library.pickers.specimens.pickers-date-time.reminderLabel')} hour12 step={15} />
        </div>
      );
    },
  },
  {
    id: 'pickers-date-range',
    span: 12,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.roomTall)}>
          <DateRangePicker label={ts('library.pickers.specimens.pickers-date-range.reportingPeriodLabel')} />
          <DateRangePicker
            label={ts('library.pickers.specimens.pickers-date-range.tripDatesLabel')}
            presets={upcomingPresets(ts)}
            min={today()}
            align="end"
          />
        </div>
      );
    },
  },
  {
    id: 'pickers-time',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.roomSmall)}>
          <TimePicker label={ts('library.pickers.specimens.pickers-time.startLabel')} defaultValue="09:30" step={15} />
          <TimePicker label={ts('library.pickers.specimens.pickers-time.endLabel')} defaultValue="17:00" hour12 />
          <TimeStepper
            label={ts('library.pickers.specimens.pickers-time.alarmLabel')}
            defaultValue="07:45"
            hour12
            minuteStep={5}
          />
        </div>
      );
    },
  },
  {
    id: 'pickers-color',
    span: 6,
    render: () => {
      const { ts } = useI18n();
      return (
        <div class={cx(styles.grid, styles.room)}>
          <div class={styles.group}>
            <ColorPicker label={ts('library.pickers.specimens.pickers-color.accentLabel')} />
            <ColorPicker
              label={ts('library.pickers.specimens.pickers-color.labelColourLabel')}
              variant="swatches"
              defaultValue="#2f6fdc"
            />
          </div>
          <ColorPicker
            label={ts('library.pickers.specimens.pickers-color.inlineLabel')}
            inline
            defaultValue="#1f9254"
          />
        </div>
      );
    },
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
