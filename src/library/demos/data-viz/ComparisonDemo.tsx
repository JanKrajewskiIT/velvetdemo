import { useI18n } from '@jankrajewskiit/i18n';
import { Button, ComparisonBar, ComparisonDialog } from '@jankrajewskiit/ui';
import { createSignal, For } from 'solid-js';

import { createCandidates, createComparisonCriteria } from './candidates';
import styles from './ComparisonDemo.module.css';
import { createSkillAxes } from './datasets';

export const ComparisonDemo = () => {
  const { ts, locale } = useI18n();
  const candidates = createCandidates(ts);
  const criteria = createComparisonCriteria(ts, locale);
  const axes = createSkillAxes(ts);
  const [selected, setSelected] = createSignal<string[]>(['anna', 'marek']);
  const [open, setOpen] = createSignal(false);
  const items = () => candidates.filter((candidate) => selected().includes(candidate.id));
  const toggle = (id: string) =>
    setSelected((current) => (current.includes(id) ? current.filter((value) => value !== id) : [...current, id]));
  return (
    <div class={styles.root}>
      <div class={styles.picker} role="group" aria-label={ts('library.dataViz.demo.candidatesToCompare')}>
        <For each={candidates}>
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
        noun={[ts('library.dataViz.demo.candidateNoun'), ts('library.dataViz.demo.candidatesNoun')]}
        onRemove={toggle}
        onClear={() => setSelected([])}
        onCompare={() => setOpen(true)}
      />
      <ComparisonDialog
        open={open()}
        onClose={() => setOpen(false)}
        title={ts('library.dataViz.demo.candidateComparison')}
        items={items()}
        axes={axes}
        rows={criteria}
      />
    </div>
  );
};
