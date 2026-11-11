import { useI18n } from '@jankrajewskiit/i18n';
import type { KanbanCard } from '@jankrajewskiit/ui';
import { Avatar, Kanban } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './KanbanBoardDemo.module.css';
import { createKanbanCards, createKanbanColumns } from './planningSamples';

const withAssignee = (card: KanbanCard): KanbanCard =>
  typeof card.owner === 'string' ? { ...card, assignee: <Avatar name={card.owner} size="xs" color="auto" /> } : card;

export const KanbanBoardDemo = () => {
  const { ts } = useI18n();
  const [cards, setCards] = createSignal<KanbanCard[]>(createKanbanCards(ts).map(withAssignee));

  return (
    <div class={styles.root}>
      <p class={styles.hint}>{ts('library.planning.kanban.hint')}</p>
      <div class={styles.board}>
        <Kanban
          columns={createKanbanColumns(ts)}
          cards={cards()}
          onCardsChange={setCards}
          onAddCard={() => undefined}
        />
      </div>
    </div>
  );
};
