import { AiResultPanel, QueryBuilder, TypingIndicator } from '@jankrajewskiit/ui';

import type { patternsEn } from '../../i18n/library/patterns';
import { AnalysisFlowDemo } from '../demos/patterns/AnalysisFlowDemo';
import { AuthGuardDemo } from '../demos/patterns/AuthGuardDemo';
import { CalendarOrganizerDemo } from '../demos/patterns/CalendarOrganizerDemo';
import { ChatThreadDemo } from '../demos/patterns/ChatThreadDemo';
import { ColorLabelsDemo } from '../demos/patterns/ColorLabelsDemo';
import { CommentThreadDemo } from '../demos/patterns/CommentThreadDemo';
import { DualFilterBarDemo } from '../demos/patterns/DualFilterBarDemo';
import { FileUrlImportDemo } from '../demos/patterns/FileUrlImportDemo';
import { FilterBarDemo } from '../demos/patterns/FilterBarDemo';
import { FlashcardFlowDemo } from '../demos/patterns/FlashcardFlowDemo';
import { ImportSourcesDemo } from '../demos/patterns/ImportSourcesDemo';
import { AI_SECTIONS, AI_SOURCES, QUERY, QUERY_FIELDS } from '../demos/patterns/patternSamples';
import { PricingDemo } from '../demos/patterns/PricingDemo';
import { PromptInputDemo } from '../demos/patterns/PromptInputDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './patterns.module.css';

export const patternSpecimens: readonly Specimen<SpecimenIdOf<typeof patternsEn>>[] = [
  {
    id: 'patterns-auth-guard',
    span: 12,
    render: () => <AuthGuardDemo />,
  },
  {
    id: 'patterns-filters',
    span: 12,
    render: () => (
      <div class={styles.stack}>
        <FilterBarDemo />
        <DualFilterBarDemo />
        <QueryBuilder fields={QUERY_FIELDS} defaultValue={QUERY} showSummary />
      </div>
    ),
  },
  {
    id: 'patterns-dialogs',
    span: 6,
    render: () => (
      <div class={styles.actions}>
        <ColorLabelsDemo />
        <ImportSourcesDemo />
      </div>
    ),
  },
  {
    id: 'patterns-file-url-import',
    span: 6,
    render: () => <FileUrlImportDemo />,
  },
  {
    id: 'patterns-typing-indicator',
    span: 6,
    render: () => (
      <div class={styles.actions}>
        <TypingIndicator />
        <TypingIndicator label="Velvet Assistant is preparing a reply" />
        <span class={styles.caption}>Preparing a reply</span>
      </div>
    ),
  },
  {
    id: 'patterns-flashcards',
    span: 6,
    render: () => <FlashcardFlowDemo />,
  },
  {
    id: 'patterns-calendar-organizer',
    span: 12,
    render: () => <CalendarOrganizerDemo />,
  },
  {
    id: 'patterns-comment-thread',
    span: 6,
    render: () => <CommentThreadDemo />,
  },
  {
    id: 'patterns-ai-result',
    span: 6,
    render: () => (
      <AiResultPanel
        model="claude-haiku-4.5"
        elapsed="1.2s"
        score={92}
        headline="Match: very high"
        subline="Ada Kowalska for Senior Frontend"
        summary="A well-rounded frontend profile with strong React depth."
        sections={AI_SECTIONS}
        sources={AI_SOURCES}
        tokens={1284}
        cost="$0.0021"
        onFeedback={() => undefined}
      />
    ),
  },
  {
    id: 'patterns-analysis-flow',
    span: 12,
    render: () => <AnalysisFlowDemo />,
  },
  {
    id: 'patterns-pricing',
    span: 12,
    render: () => <PricingDemo />,
  },
  {
    id: 'patterns-chat',
    span: 8,
    render: () => <ChatThreadDemo />,
  },
  {
    id: 'patterns-prompt-input',
    span: 4,
    render: () => <PromptInputDemo />,
  },
];
