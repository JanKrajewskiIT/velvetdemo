import { Button, Card, CodeText, Heading, Text, useI18n } from '@jankrajewskiit/ui';
import { createMemo, For } from 'solid-js';

import { PreviewGroup, PreviewPanel, ShowcaseMeta, ShowcaseSection } from '../components/ShowcaseSection';
import type { DemoOverviewFeaturedSection, DemoOverviewTrack } from '../demoTypes';
import type { SectionId } from '../nav/demoNavConfig';
interface OverviewSectionProps {
  tracks: DemoOverviewTrack[];
  featuredSections: DemoOverviewFeaturedSection[];
  onNavigate: (id: SectionId) => void;
}

const OverviewSection = (props: OverviewSectionProps) => {
  const { ts, tx } = useI18n();
  const stats = createMemo(() => [
    { label: ts('demo.text.overview.stats.components'), value: '58+' },
    { label: ts('demo.text.overview.stats.categories'), value: '9' },
    { label: ts('demo.text.overview.stats.themeModes'), value: '3' },
    { label: ts('demo.text.overview.stats.hooks'), value: '3' },
    { label: ts('demo.text.overview.stats.toolingPresets'), value: '7' },
  ]);

  return (
    <>
      <ShowcaseSection
        title={ts('demo.showcase.overview.whatIs.title')}
        subtitle={ts('demo.showcase.overview.whatIs.subtitle')}
      >
        <PreviewPanel class="overviewHeroPanel">
          <PreviewGroup title={ts('demo.text.overview.coreIdea.title')}>
            <div class="overviewLead">
              <Text as="p" variant="bodySm" tone="muted" class="mutedText">
                {tx('demo.text.overview.coreIdea.message', {
                  packageName: () => (
                    <CodeText as="span" class="codeInline">
                      @jankrajewskiit/ui
                    </CodeText>
                  ),
                })}
              </Text>
              <ul class="overviewList">
                <li>{ts('demo.text.overview.highlights.itemPeers')}</li>
                <li>{ts('demo.text.overview.highlights.itemThemes')}</li>
                <li>{ts('demo.text.overview.highlights.itemStyles')}</li>
                <li>{ts('demo.text.overview.highlights.itemCategories')}</li>
              </ul>
            </div>
          </PreviewGroup>

          <PreviewGroup
            title={ts('demo.showcase.overview.paths.title')}
            subtitle={ts('demo.showcase.overview.paths.subtitle')}
          >
            <div class="overviewTrackGrid">
              <For each={props.tracks}>
                {(track) => (
                  <Card class="overviewTrackCard">
                    <Text as="p" variant="overline" tone="primary" class="overviewCardEyebrow">
                      {track.count}
                    </Text>
                    <Heading level={3} variant="titleMd" class="overviewCardTitle">
                      {track.label}
                    </Heading>
                    <Text as="p" variant="bodySm" tone="muted" class="overviewCardBody">
                      {track.description}
                    </Text>
                    <Button type="button" variant="ghost" size="sm" onClick={() => props.onNavigate(track.id)}>
                      {ts('demo.showcase.overview.paths.action')}
                    </Button>
                  </Card>
                )}
              </For>
            </div>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.overview.featured.title')}
        subtitle={ts('demo.showcase.overview.featured.subtitle')}
      >
        <PreviewPanel>
          <div class="overviewFeatureGrid">
            <For each={props.featuredSections}>
              {(section) => (
                <Card class="overviewFeatureCard">
                  <Text as="p" variant="overline" tone="primary" class="overviewCardEyebrow">
                    {section.eyebrow}
                  </Text>
                  <Heading level={3} variant="titleMd" class="overviewCardTitle">
                    {section.label}
                  </Heading>
                  <Text as="p" variant="bodySm" tone="muted" class="overviewCardBody">
                    {section.description}
                  </Text>
                  <div class="overviewCardActions">
                    <Button type="button" variant="ghost" size="sm" onClick={() => props.onNavigate(section.id)}>
                      {ts('demo.showcase.overview.featured.action')}
                    </Button>
                  </div>
                </Card>
              )}
            </For>
          </div>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.overview.installation.title')}
        subtitle={ts('demo.showcase.overview.installation.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.overview.install.title')}>
            <CodeText as="pre" variant="block" size="md" class="installBlock">
              npm install @jankrajewskiit/ui solid-js @solidjs/router
            </CodeText>
          </PreviewGroup>

          <PreviewGroup title={ts('demo.text.overview.importStyles.title')}>
            <CodeText as="pre" variant="block" size="md" class="installBlock">
              import '@jankrajewskiit/ui/styles';
            </CodeText>
          </PreviewGroup>
        </PreviewPanel>
        <ShowcaseMeta>{ts('demo.text.overview.importStyles.meta')}</ShowcaseMeta>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.overview.libraryStats.title')}
        subtitle={ts('demo.showcase.overview.libraryStats.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.overview.packageShape.title')}>
            <div class="pageStats">
              <For each={stats()}>
                {(stat) => (
                  <div class="statPill">
                    <Text as="span" variant="overline" tone="tertiary" class="stat-label">
                      {stat.label}
                    </Text>
                    <Heading as="span" level={4} variant="titleLg" class="stat-value">
                      {stat.value}
                    </Heading>
                  </div>
                )}
              </For>
            </div>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>
    </>
  );
};

export default OverviewSection;
