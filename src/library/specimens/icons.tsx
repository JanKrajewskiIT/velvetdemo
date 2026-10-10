import type { iconsEn } from '../../i18n/library/icons';
import { FilledTwinsDemo } from '../demos/icons/FilledTwinsDemo';
import { IconColourDemo } from '../demos/icons/IconColourDemo';
import { IconScaleDemo } from '../demos/icons/IconScaleDemo';
import { IconSetDemo } from '../demos/icons/IconSetDemo';
import { IconsInControlsDemo } from '../demos/icons/IconsInControlsDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const iconSpecimens: readonly Specimen<SpecimenIdOf<typeof iconsEn>>[] = [
  {
    id: 'icons-glyph-set',
    span: 12,
    render: () => <IconSetDemo />,
  },
  {
    id: 'icons-scale',
    span: 6,
    render: () => <IconScaleDemo />,
  },
  {
    id: 'icons-filled-twins',
    span: 6,
    render: () => <FilledTwinsDemo />,
  },
  {
    id: 'icons-colour',
    span: 6,
    render: () => <IconColourDemo />,
  },
  {
    id: 'icons-in-controls',
    span: 6,
    render: () => <IconsInControlsDemo />,
  },
];
