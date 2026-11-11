import { useI18n } from '@jankrajewskiit/i18n';
import type { ColorLabel } from '@jankrajewskiit/ui';
import { Button, ColorLabelManager, ColorLabelSelectionDialog } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { createSimulatedDelay } from './createSimulatedDelay';

type Ts = ReturnType<typeof useI18n>['ts'];

const SAVE_DELAY_MS = 600;

const createInitialLabels = (ts: Ts): ColorLabel[] => [
  { id: 'urgent', name: ts('library.patterns.colorLabels.labels.urgent'), color: 'var(--dv-1)', count: 4 },
  { id: 'follow-up', name: ts('library.patterns.colorLabels.labels.followUp'), color: 'var(--dv-2)', count: 2 },
  { id: 'remote', name: ts('library.patterns.colorLabels.labels.remote'), color: 'var(--dv-3)', count: 0 },
];

export const ColorLabelsDemo = () => {
  const { ts } = useI18n();
  const delay = createSimulatedDelay(SAVE_DELAY_MS);
  const [labels, setLabels] = createSignal<ColorLabel[]>(createInitialLabels(ts));
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
        {ts('library.patterns.colorLabels.assign', { count: assigned().length })}
      </Button>
      <Button variant="secondary" onClick={() => setManaging(true)}>
        {ts('library.patterns.colorLabels.manage')}
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
        description={ts('library.patterns.colorLabels.description')}
      />
      <ColorLabelManager open={managing()} onClose={() => setManaging(false)} labels={labels()} onChange={save} />
    </>
  );
};
