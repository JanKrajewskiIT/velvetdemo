import type { depthEn } from '../../i18n/library/depth';
import { ElevationIntentsDemo } from '../demos/depth/ElevationIntentsDemo';
import { HeroSurfaceDemo } from '../demos/depth/HeroSurfaceDemo';
import { LayerStackDemo } from '../demos/depth/LayerStackDemo';
import { ScrimsDemo } from '../demos/depth/ScrimsDemo';
import { ShadowLadderDemo } from '../demos/depth/ShadowLadderDemo';
import type { Specimen, SpecimenIdOf } from '../types';

export const depthSpecimens: readonly Specimen<SpecimenIdOf<typeof depthEn>>[] = [
  {
    id: 'depth-elevation-intents',
    span: 12,
    render: () => <ElevationIntentsDemo />,
  },
  {
    id: 'depth-layering',
    span: 6,
    render: () => <LayerStackDemo />,
  },
  {
    id: 'depth-shadow-ladder',
    span: 6,
    render: () => <ShadowLadderDemo />,
  },
  {
    id: 'depth-scrims',
    span: 8,
    render: () => <ScrimsDemo />,
  },
  {
    id: 'depth-hero-surface',
    span: 4,
    render: () => <HeroSurfaceDemo />,
  },
];
