import type { KanbanCard } from '@jankrajewskiit/ui';
import { Avatar, Kanban } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './KanbanBoardDemo.module.css';
import { createKanbanCards, KANBAN_COLUMNS } from './planningSamples';

const withAssignee = (card: KanbanCard): KanbanCard =>
  typeof card.owner === 'string' ? { ...card, assignee: <Avatar name={card.owner} size="xs" color="auto" /> } : card;

export const KanbanBoardDemo = () => {
  const [cards, setCards] = createSignal<KanbanCard[]>(createKanbanCards().map(withAssignee));

  return (
    <div class={styles.root}>
      <p class={styles.hint}>Drag a card between columns, or focus it and press Ctrl with an arrow key to move it.</p>
      <div class={styles.board}>
        <Kanban columns={KANBAN_COLUMNS} cards={cards()} onCardsChange={setCards} onAddCard={() => undefined} />
      </div>
    </div>
  );
};
