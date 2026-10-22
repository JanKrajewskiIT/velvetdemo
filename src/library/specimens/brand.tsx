import { BrandLogo } from '@jankrajewskiit/ui';

import type { brandEn } from '../../i18n/library/brand';
import { BrandFillsDemo } from '../demos/brand/BrandFillsDemo';
import { LogoFigure } from '../demos/brand/LogoFigure';
import { VelvetRampDemo } from '../demos/brand/VelvetRampDemo';
import { WordmarkDemo } from '../demos/brand/WordmarkDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './brand.module.css';

export const brandSpecimens: readonly Specimen<SpecimenIdOf<typeof brandEn>>[] = [
  {
    id: 'brand-velvet',
    span: 6,
    render: () => (
      <div class={styles.figures}>
        <LogoFigure caption="lockup · md">
          <BrandLogo />
        </LogoFigure>
        <LogoFigure caption="mark">
          <BrandLogo variant="mark" size="lg" />
        </LogoFigure>
        <LogoFigure caption="wordmark">
          <BrandLogo variant="wordmark" />
        </LogoFigure>
        <LogoFigure caption="lockup · sm">
          <BrandLogo size="sm" />
        </LogoFigure>
        <LogoFigure caption="lockup · lg">
          <BrandLogo size="lg" />
        </LogoFigure>
        <LogoFigure caption="lockup · xl">
          <BrandLogo size="xl" />
        </LogoFigure>
        <LogoFigure caption="28px · glow off">
          <BrandLogo size={28} glow={false} />
        </LogoFigure>
      </div>
    ),
  },
  {
    id: 'brand-recron',
    span: 6,
    render: () => (
      <div class={styles.figures}>
        <LogoFigure caption="lockup · sm (24)">
          <BrandLogo brand="recron" size="sm" />
        </LogoFigure>
        <LogoFigure caption="lockup · md (32)">
          <BrandLogo brand="recron" />
        </LogoFigure>
        <LogoFigure caption="lockup · lg (48)">
          <BrandLogo brand="recron" size="lg" />
        </LogoFigure>
        <LogoFigure caption="mark · md">
          <BrandLogo brand="recron" variant="mark" />
        </LogoFigure>
        <LogoFigure caption="mark · xl (64)">
          <BrandLogo brand="recron" variant="mark" size="xl" />
        </LogoFigure>
      </div>
    ),
  },
  {
    id: 'brand-quantcore',
    span: 6,
    render: () => (
      <div class={styles.figures}>
        <LogoFigure caption="lockup · sm (24)">
          <BrandLogo brand="quantcore" size="sm" />
        </LogoFigure>
        <LogoFigure caption="lockup · md (32)">
          <BrandLogo brand="quantcore" />
        </LogoFigure>
        <LogoFigure caption="lockup · lg (48)">
          <BrandLogo brand="quantcore" size="lg" />
        </LogoFigure>
        <LogoFigure caption="mark · md">
          <BrandLogo brand="quantcore" variant="mark" />
        </LogoFigure>
        <LogoFigure caption="mark · xl (64)">
          <BrandLogo brand="quantcore" variant="mark" size="xl" />
        </LogoFigure>
        <LogoFigure caption="mark · 40px">
          <BrandLogo brand="quantcore" variant="mark" size={40} />
        </LogoFigure>
      </div>
    ),
  },
  {
    id: 'brand-on-fills',
    span: 8,
    render: () => <BrandFillsDemo />,
  },
  {
    id: 'brand-wordmark',
    span: 4,
    render: () => <WordmarkDemo />,
  },
  {
    id: 'brand-velvet-ramp',
    span: 12,
    render: () => <VelvetRampDemo />,
  },
];
