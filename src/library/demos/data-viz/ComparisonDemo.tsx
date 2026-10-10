import { Button, ComparisonBar, ComparisonDialog } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { CANDIDATES, CRITERIA } from './candidates';
import styles from './ComparisonDemo.module.css';
import { SKILL_AXES } from './datasets';

export const ComparisonDemo = () => {
  const [selected, setSelected] = createSignal<string[]>(['anna', 'marek']);
  const [open, setOpen] = createSignal(false);
  const items = () => CANDIDATES.filter((candidate) => selected().includes(candidate.id));
  const toggle = (id: string) =>
    setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));
  return (
    <div class={styles.root}>
      <div class={styles.picker} role="group" aria-label="Candidates to compare">
        <For each={CANDIDATES}>
          {(candidate) => (
            <Button
              size="sm"
              variant={selected().includes(candidate.id) ? 'soft' : 'secondary'}
              aria-pressed={selected().includes(candidate.id)}
              onClick={() => toggle(candidate.id)}
            >
              {candidate.label}
            </Button>
          )}
        </For>
      </div>
      <ComparisonBar
        floating={false}
        items={items()}
        noun={['candidate', 'candidates']}
        onRemove={toggle}
        onClear={() => setSelected([])}
        onCompare={() => setOpen(true)}
      />
      <ComparisonDialog
        open={open()}
        onClose={() => setOpen(false)}
        title="Candidate comparison"
        items={items()}
        axes={SKILL_AXES}
        rows={CRITERIA}
      />
    </div>
  );
};
