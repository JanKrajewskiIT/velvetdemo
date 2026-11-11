import { useI18n } from '@jankrajewskiit/i18n';
import type { PracticeCard, PracticeCollection, PracticeConfig, PracticeResult } from '@jankrajewskiit/ui';
import { PracticeSession, PracticeSetup, PracticeSummary } from '@jankrajewskiit/ui';
import { createSignal, Match, Switch } from 'solid-js';

type Stage = 'setup' | 'session' | 'summary';
type Ts = ReturnType<typeof useI18n>['ts'];

interface StudyCollection {
  id: string;
  name: string;
  due: number;
  cards: PracticeCard[];
}

const createStudyCollections = (ts: Ts): readonly StudyCollection[] => [
  {
    id: 'es4',
    name: ts('library.patterns.practice.collections.home'),
    due: 3,
    cards: [
      {
        id: 'es4-1',
        front: 'la estantería',
        back: ts('library.patterns.practice.back.shelf'),
        example: 'Los libros están en la estantería.',
      },
      { id: 'es4-2', front: 'el cajón', back: ts('library.patterns.practice.back.drawer') },
      { id: 'es4-3', front: 'la almohada', back: ts('library.patterns.practice.back.pillow') },
      { id: 'es4-4', front: 'el grifo', back: ts('library.patterns.practice.back.tap') },
      { id: 'es4-5', front: 'la bombilla', back: ts('library.patterns.practice.back.bulb') },
    ],
  },
  {
    id: 'es3',
    name: ts('library.patterns.practice.collections.city'),
    due: 2,
    cards: [
      { id: 'es3-1', front: 'la plaza', back: ts('library.patterns.practice.back.square') },
      { id: 'es3-2', front: 'la calle', back: ts('library.patterns.practice.back.street') },
      { id: 'es3-3', front: 'el puente', back: ts('library.patterns.practice.back.bridge') },
      { id: 'es3-4', front: 'la estación', back: ts('library.patterns.practice.back.station') },
      { id: 'es3-5', front: 'el parque', back: ts('library.patterns.practice.back.park') },
    ],
  },
  {
    id: 'de1',
    name: ts('library.patterns.practice.collections.german'),
    due: 4,
    cards: [
      { id: 'de1-1', front: 'das Haus', back: ts('library.patterns.practice.back.house') },
      { id: 'de1-2', front: 'die Tür', back: ts('library.patterns.practice.back.door') },
      { id: 'de1-3', front: 'das Fenster', back: ts('library.patterns.practice.back.window') },
      { id: 'de1-4', front: 'der Tisch', back: ts('library.patterns.practice.back.table') },
      { id: 'de1-5', front: 'der Stuhl', back: ts('library.patterns.practice.back.chair') },
    ],
  },
];

const toPracticeCollections = (studyCollections: readonly StudyCollection[]): PracticeCollection[] =>
  studyCollections.map((collection) => ({
    id: collection.id,
    name: collection.name,
    total: collection.cards.length,
    due: collection.due,
  }));

const sessionCards = (studyCollections: readonly StudyCollection[], config: PracticeConfig): PracticeCard[] => {
  const collection = studyCollections.find((candidate) => candidate.id === config.collection);
  if (!collection) throw new Error(`Unknown practice collection "${config.collection}".`);
  let cards = [...collection.cards];
  if (config.order === 'due') cards = cards.slice(0, collection.due);
  else if (config.order === 'new') cards.reverse();
  else {
    for (let index = cards.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      const current = cards[index];
      const other = cards[target];
      if (current && other) {
        cards[index] = other;
        cards[target] = current;
      }
    }
  }
  return cards.slice(0, config.count);
};

export const PracticeFlowDemo = () => {
  const { ts } = useI18n();
  const studyCollections = createStudyCollections(ts);
  const collections = toPracticeCollections(studyCollections);
  const maxCards = Math.max(...collections.map((collection) => collection.total));
  const [stage, setStage] = createSignal<Stage>('setup');
  const [results, setResults] = createSignal<PracticeResult[]>([]);
  const [cards, setCards] = createSignal<PracticeCard[]>([]);
  const [initialCards, setInitialCards] = createSignal<PracticeCard[]>([]);
  const [reverse, setReverse] = createSignal(false);

  const start = (config: PracticeConfig) => {
    const next = sessionCards(studyCollections, config);
    if (next.length === 0) return;
    setCards(next);
    setInitialCards(next);
    setReverse(config.direction === 'back');
    setStage('session');
  };
  const restart = () => {
    setCards(initialCards());
    setStage('session');
  };
  const reviewMissed = () => {
    const missed = new Set(
      results()
        .filter((result) => !result.known)
        .map((result) => result.id),
    );
    setCards(cards().filter((card) => card.id !== undefined && missed.has(card.id)));
    setStage('session');
  };

  const finish = (finished: PracticeResult[]) => {
    setResults(finished);
    setStage('summary');
  };

  return (
    <Switch>
      <Match when={stage() === 'setup'}>
        <PracticeSetup collections={collections} onStart={start} maxCards={maxCards} />
      </Match>
      <Match when={stage() === 'session'}>
        <PracticeSession cards={cards()} reverse={reverse()} onExit={() => setStage('setup')} onFinish={finish} />
      </Match>
      <Match when={stage() === 'summary'}>
        <PracticeSummary
          results={results()}
          onRestart={restart}
          onReviewMissed={reviewMissed}
          onDone={() => setStage('setup')}
        />
      </Match>
    </Switch>
  );
};
