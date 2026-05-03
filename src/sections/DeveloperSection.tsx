import { useI18n } from '@jankrajewskiit/ui';
import { createMemo, For } from 'solid-js';

import DocSnippetCard from '../components/DocSnippetCard';
import { PreviewGroup, PreviewPanel, ShowcaseSection } from '../components/ShowcaseSection';
import { createUsageSnippets, TOOLING_SNIPPETS } from '../fixtures/developerFixtures';

const DeveloperSection = () => {
  const { ts } = useI18n();
  const usageSnippets = createMemo(() => createUsageSnippets());

  return (
    <div>
      <ShowcaseSection
        title={ts('demo.showcase.developer.componentCategories.title')}
        subtitle={ts('demo.showcase.developer.componentCategories.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <ul class="overviewList">
              <li>{ts('demo.text.developer.categories.inputs')}</li>
              <li>{ts('demo.text.developer.categories.forms')}</li>
              <li>{ts('demo.text.developer.categories.dataDisplay')}</li>
              <li>{ts('demo.text.developer.categories.navigation')}</li>
              <li>{ts('demo.text.developer.categories.feedback')}</li>
              <li>{ts('demo.text.developer.categories.overlays')}</li>
              <li>{ts('demo.text.developer.categories.layout')}</li>
              <li>{ts('demo.text.developer.categories.composites')}</li>
              <li>{ts('demo.text.developer.categories.app')}</li>
            </ul>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.developer.sharedToolingPresets.title')}
        subtitle={ts('demo.showcase.developer.sharedToolingPresets.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <div class="docsGrid">
              <For each={TOOLING_SNIPPETS}>{(snippet) => <DocSnippetCard snippet={snippet} />}</For>
            </div>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.developer.usageSnippets.title')}
        subtitle={ts('demo.showcase.developer.usageSnippets.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <div class="docsGrid">
              <For each={usageSnippets()}>{(snippet) => <DocSnippetCard snippet={snippet} />}</For>
            </div>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>

      <ShowcaseSection
        title={ts('demo.showcase.developer.designPrinciples.title')}
        subtitle={ts('demo.showcase.developer.designPrinciples.subtitle')}
      >
        <PreviewPanel>
          <PreviewGroup title={ts('demo.text.common.examples')}>
            <ul class="overviewList">
              <li>{ts('demo.text.developer.principles.appAgnostic')}</li>
              <li>{ts('demo.text.developer.principles.userFacingText')}</li>
              <li>{ts('demo.text.developer.principles.layoutSlots')}</li>
              <li>{ts('demo.text.developer.principles.classProp')}</li>
              <li>{ts('demo.text.developer.principles.sharedTooling')}</li>
            </ul>
          </PreviewGroup>
        </PreviewPanel>
      </ShowcaseSection>
    </div>
  );
};

export default DeveloperSection;
