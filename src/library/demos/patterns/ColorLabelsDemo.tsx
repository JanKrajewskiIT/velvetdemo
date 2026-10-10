import type { ColorLabel } from '@jankrajewskiit/ui';
import { Button, ColorLabelManager, ColorLabelSelectionDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createSimulatedDelay } from './createSimulatedDelay';

const SAVE_DELAY_MS = 600;

const INITIAL_LABELS: ColorLabel[] = [
  { id: 'urgent', name: 'Urgent', color: 'var(--dv-1)', count: 4 },
  { id: 'follow-up', name: 'Follow up', color: 'var(--dv-2)', count: 2 },
  { id: 'remote', name: 'Remote', color: 'var(--dv-3)', count: 0 },
];

export const ColorLabelsDemo = () => {
  const delay = createSimulatedDelay(SAVE_DELAY_MS);
  const [labels, setLabels] = createSignal<ColorLabel[]>(INITIAL_LABELS);
  const [assigned, setAssigned] = createSignal<string[]>(['urgent']);
  const [managing, setManaging] = createSignal(false);
  const [selecting, setSelecting] = createSignal(false);

  const save = async (next: ColorLabel[]) => {
    await delay();
    setLabels(next);
  };

  const create = async (draft: { name: string; color: string }): Promise<ColorLabel> => {
    await delay();
    const label = { id: `label-${labels().length + 1}`, ...draft };
    setLabels([...labels(), label]);
    return label;
  };

  const submit = async (ids: string[]) => {
    await delay();
    setAssigned(ids);
  };

  return (
    <>
      <Button variant="secondary" onClick={() => setSelecting(true)}>
        {`Assign labels (${assigned().length})`}
      </Button>
      <Button variant="secondary" onClick={() => setManaging(true)}>
        Manage labels
      </Button>
      <ColorLabelSelectionDialog
        open={selecting()}
        onClose={() => setSelecting(false)}
        labels={labels()}
        value={assigned()}
        onSubmit={submit}
        onCreate={create}
        onManage={() => {
          setSelecting(false);
          setManaging(true);
        }}
        description="Choose the labels that apply to this candidate."
      />
      <ColorLabelManager open={managing()} onClose={() => setManaging(false)} labels={labels()} onChange={save} />
    </>
  );
};
