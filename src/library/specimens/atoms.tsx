import type { atomsEn } from '../../i18n/library/atoms';
import { DisclosureDismissDemo } from '../demos/atoms/DisclosureDismissDemo';
import { FieldShellDemo } from '../demos/atoms/FieldShellDemo';
import { RowsDemo } from '../demos/atoms/RowsDemo';
import { StatusMarksDemo } from '../demos/atoms/StatusMarksDemo';
import { StepsDemo } from '../demos/atoms/StepsDemo';
import { SurfaceVariantsDemo } from '../demos/atoms/SurfaceVariantsDemo';
import { TextEmphasisDemo } from '../demos/atoms/TextEmphasisDemo';
import { TextRolesDemo } from '../demos/atoms/TextRolesDemo';
import { TracksDemo } from '../demos/atoms/TracksDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './atoms.module.css';

export const atomSpecimens: readonly Specimen<SpecimenIdOf<typeof atomsEn>>[] = [
  {
    id: 'atoms-surface',
    span: 8,
    render: () => <SurfaceVariantsDemo />,
  },
  {
    id: 'atoms-text',
    span: 4,
    render: () => <TextRolesDemo />,
  },
  {
    id: 'atoms-status-marks',
    span: 6,
    render: () => <StatusMarksDemo />,
  },
  {
    id: 'atoms-rows',
    span: 6,
    render: () => <RowsDemo />,
  },
  {
    id: 'atoms-field-shell',
    span: 4,
    render: () => <FieldShellDemo />,
  },
  {
    id: 'atoms-disclosure-dismiss',
    span: 4,
    render: () => <DisclosureDismissDemo />,
  },
  {
    id: 'atoms-text-emphasis',
    span: 4,
    render: () => <TextEmphasisDemo />,
  },
  {
    id: 'atoms-steps-tracks',
    span: 12,
    render: () => (
      <div class={styles.pair}>
        <StepsDemo />
        <TracksDemo />
      </div>
    ),
  },
];
