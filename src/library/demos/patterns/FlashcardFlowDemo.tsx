import type { Flashcard, FlashcardConfig, FlashDeck, FlashResult } from '@jankrajewskiit/ui';
import { FlashcardSession, FlashcardSetup, FlashcardSummary } from '@jankrajewskiit/ui';
import { createSignal, Match, Switch } from 'solid-js';

type Stage = 'setup' | 'session' | 'summary';

interface StudyDeck {
  id: string;
  name: string;
  due: number;
  cards: Flashcard[];
}

const STUDY_DECKS: readonly StudyDeck[] = [
  {
    id: 'es4',
    name: 'Spanish, around the home',
    due: 3,
    cards: [
      { id: 'es4-1', front: 'la estantería', back: 'the bookshelf', example: 'Los libros están en la estantería.' },
      { id: 'es4-2', front: 'el cajón', back: 'the drawer' },
      { id: 'es4-3', front: 'la almohada', back: 'the pillow' },
      { id: 'es4-4', front: 'el grifo', back: 'the tap' },
      { id: 'es4-5', front: 'la bombilla', back: 'the light bulb' },
    ],
  },
  {
    id: 'es3',
    name: 'Spanish, in the city',
    due: 2,
    cards: [
      { id: 'es3-1', front: 'la plaza', back: 'the square' },
      { id: 'es3-2', front: 'la calle', back: 'the street' },
      { id: 'es3-3', front: 'el puente', back: 'the bridge' },
      { id: 'es3-4', front: 'la estación', back: 'the station' },
      { id: 'es3-5', front: 'el parque', back: 'the park' },
    ],
  },
  {
    id: 'de1',
    name: 'German basics',
    due: 4,
    cards: [
      { id: 'de1-1', front: 'das Haus', back: 'the house' },
      { id: 'de1-2', front: 'die Tür', back: 'the door' },
      { id: 'de1-3', front: 'das Fenster', back: 'the window' },
      { id: 'de1-4', front: 'der Tisch', back: 'the table' },
      { id: 'de1-5', front: 'der Stuhl', back: 'the chair' },
    ],
  },
];

const DECKS: FlashDeck[] = STUDY_DECKS.map((deck) => ({
  id: deck.id,
  name: deck.name,
  total: deck.cards.length,
  due: deck.due,
}));
const MAX_CARDS = Math.max(...DECKS.map((deck) => deck.total));

const sessionCards = (config: FlashcardConfig): Flashcard[] => {
  const deck = STUDY_DECKS.find((candidate) => candidate.id === config.deck);
  if (!deck) return [];
  let cards = [...deck.cards];
  if (config.order === 'due') cards = cards.slice(0, deck.due);
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

export const FlashcardFlowDemo = () => {
  const [stage, setStage] = createSignal<Stage>('setup');
  const [results, setResults] = createSignal<FlashResult[]>([]);
  const [cards, setCards] = createSignal<Flashcard[]>([]);
  const [initialCards, setInitialCards] = createSignal<Flashcard[]>([]);
  const [reverse, setReverse] = createSignal(false);

  const start = (config: FlashcardConfig) => {
    const next = sessionCards(config);
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

  const finish = (finished: FlashResult[]) => {
    setResults(finished);
    setStage('summary');
  };

  return (
    <Switch>
      <Match when={stage() === 'setup'}>
        <FlashcardSetup decks={DECKS} onStart={start} maxCards={MAX_CARDS} />
      </Match>
      <Match when={stage() === 'session'}>
        <FlashcardSession cards={cards()} reverse={reverse()} onExit={() => setStage('setup')} onFinish={finish} />
      </Match>
      <Match when={stage() === 'summary'}>
        <FlashcardSummary
          results={results()}
          onRestart={restart}
          onReviewMissed={reviewMissed}
          onDone={() => setStage('setup')}
        />
      </Match>
    </Switch>
  );
};
