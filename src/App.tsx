import { useI18n } from '@jankrajewskiit/i18n';
import { SkipLink } from '@jankrajewskiit/ui';
import { createEffect } from 'solid-js';

import { BrandBand } from './components/BrandBand';
import { EcosystemSection } from './components/ecosystem/EcosystemSection';
import { FoundationsSection } from './components/foundations/FoundationsSection';
import { Hero } from './components/Hero';
import { LibrarySection } from './components/library/LibrarySection';
import { ShowcaseNav } from './components/ShowcaseNav';
import { SiteFooter } from './components/SiteFooter';
import { countSpecimens } from './library/countSpecimens';
import { OfflineAuthShowcaseProvider } from './library/demos/actions/OfflineAuthShowcaseProvider';
import { LIBRARY_GROUPS } from './library/groups';

const SPECIMEN_COUNT = countSpecimens(LIBRARY_GROUPS);

export const App = () => {
  const { ts } = useI18n();

  createEffect(() => {
    document.title = ts('showcase.meta.title');
  });

  return (
    <>
      <SkipLink href="#main" />
      <ShowcaseNav />
      <main id="main">
        <Hero groupCount={LIBRARY_GROUPS.length} specimenCount={SPECIMEN_COUNT} />
        <BrandBand />
        <FoundationsSection />
        <EcosystemSection />
        <OfflineAuthShowcaseProvider>
          <LibrarySection groups={LIBRARY_GROUPS} />
        </OfflineAuthShowcaseProvider>
      </main>
      <SiteFooter />
    </>
  );
};
