import type { SectionId } from './nav/demoNavConfig';

export interface DemoOverviewTrack {
  id: SectionId;
  label: string;
  description: string;
  count: number;
}

export interface DemoOverviewFeaturedSection {
  id: SectionId;
  label: string;
  description: string;
  eyebrow: string;
}
