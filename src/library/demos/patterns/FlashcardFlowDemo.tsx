import type { Flashcard, FlashDeck, FlashResult } from '@jankrajewskiit/ui';
import { FlashcardSession, FlashcardSetup, FlashcardSummary } from '@jankrajewskiit/ui';
import { createSignal, Match, Switch } from 'solid-js';

type Stage = 'setup' | 'session' | 'summary';

const DECKS: FlashDeck[] = [
  { id: 'es4', name: 'Spanish, unit 4', total: 48, due: 5 },
  { id: 'es3', name: 'Spanish, unit 3', total: 62 },
  { id: 'de1', name: 'German basics', total: 120, due: 18 },
];

const CARDS: Flashcard[] = [
  { id: 1, front: 'la estantería', back: 'the bookshelf', example: 'Los libros están en la estantería.' },
  { id: 2, front: 'el cajón', back: 'the drawer' },
  { id: 3, front: 'la almohada', back: 'the pillow' },
  { id: 4, front: 'el grifo', back: 'the tap' },
  { id: 5, front: 'la bombilla', back: 'the light bulb' },
];

export const FlashcardFlowDemo = () => {
  const [stage, setStage] = createSignal<Stage>('setup');
  const [results, setResults] = createSignal<FlashResult[]>([]);

  const finish = (finished: FlashResult[]) => {
    setResults(finished);
    setStage('summary');
  };

  return (
    <Switch>
      <Match when={stage() === 'setup'}>
        <FlashcardSetup decks={DECKS} onStart={() => setStage('session')} />
      </Match>
      <Match when={stage() === 'session'}>
        <FlashcardSession cards={CARDS} onExit={() => setStage('setup')} onFinish={finish} />
      </Match>
      <Match when={stage() === 'summary'}>
        <FlashcardSummary
          results={results()}
          onRestart={() => setStage('session')}
          onReviewMissed={() => setStage('session')}
          onDone={() => setStage('setup')}
        />
      </Match>
    </Switch>
  );
};
