import type { shapeEn } from '../../i18n/library/shape';
import { BorderWidthsDemo } from '../demos/shape/BorderWidthsDemo';
import { NestedRadiusDemo } from '../demos/shape/NestedRadiusDemo';
import { RadiusScaleDemo } from '../demos/shape/RadiusScaleDemo';
import { ShapeInControlsDemo } from '../demos/shape/ShapeInControlsDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const shapeSpecimens: readonly Specimen<SpecimenIdOf<typeof shapeEn>>[] = [
  {
    id: 'shape-radius-scale',
    span: 12,
    render: () => <RadiusScaleDemo />,
  },
  {
    id: 'shape-border-widths',
    span: 6,
    render: () => <BorderWidthsDemo />,
  },
  {
    id: 'shape-nested-radius',
    span: 6,
    render: () => <NestedRadiusDemo />,
  },
  {
    id: 'shape-in-controls',
    span: 12,
    render: () => <ShapeInControlsDemo />,
  },
];
