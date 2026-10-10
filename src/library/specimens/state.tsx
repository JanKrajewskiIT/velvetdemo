import type { stateEn } from '../../i18n/library/state';
import { A11yContractDemo } from '../demos/state/A11yContractDemo';
import { ActionStatesDemo } from '../demos/state/ActionStatesDemo';
import { FocusRingDemo } from '../demos/state/FocusRingDemo';
import { StateLanguageDemo } from '../demos/state/StateLanguageDemo';
import { StateWashesDemo } from '../demos/state/StateWashesDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const stateSpecimens: readonly Specimen<SpecimenIdOf<typeof stateEn>>[] = [
  {
    id: 'state-language',
    span: 12,
    render: () => <StateLanguageDemo />,
  },
  {
    id: 'state-focus',
    span: 6,
    render: () => <FocusRingDemo />,
  },
  {
    id: 'state-washes',
    span: 6,
    render: () => <StateWashesDemo />,
  },
  {
    id: 'state-actions',
    span: 12,
    render: () => <ActionStatesDemo />,
  },
  {
    id: 'state-accessibility',
    span: 12,
    render: () => <A11yContractDemo />,
  },
];
