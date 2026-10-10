import type { ChecklistStep } from '@jankrajewskiit/ui';
import { Button, SetupChecklist } from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

const STEPS = [
  { id: 'profile', label: 'Complete your profile', description: 'Add your role and skills.', icon: 'settings' },
  { id: 'cv', label: 'Build your CV', description: 'Import it or start from a template.', icon: 'file-text' },
  { id: 'offer', label: 'Add your first offer', description: 'Publish it to the team board.', icon: 'briefcase' },
] as const;

export const SetupChecklistDemo = () => {
  const [done, setDone] = createSignal<ReadonlySet<string>>(new Set(['profile']));

  const complete = (id: string) => setDone((current) => new Set([...current, id]));
  const steps = (): readonly ChecklistStep[] =>
    STEPS.map((step) => ({
      ...step,
      done: done().has(step.id),
      onClick: () => complete(step.id),
    }));

  return (
    <>
      <SetupChecklist
        title="Set up your workspace"
        description="Steps can be completed in any order."
        steps={steps()}
        hideWhenComplete={false}
      />
      <Show when={done().size === STEPS.length}>
        <Button size="sm" variant="ghost" onClick={() => setDone(new Set(['profile']))}>
          Start over
        </Button>
      </Show>
    </>
  );
};
