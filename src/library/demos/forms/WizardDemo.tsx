import { Alert, Button, FormGrid, Input, Select, Switch, Wizard, type WizardStep } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import { emailProblem, workspaceNameProblem } from './validators';
import styles from './WizardDemo.module.css';

const CREATE_DELAY_MS = 1000;
const REGIONS = ['Frankfurt', 'Warsaw', 'Dublin'];
const PLANS = ['Free', 'Team', 'Business'];

export const WizardDemo = () => {
  const [workspace, setWorkspace] = createSignal('');
  const [region, setRegion] = createSignal('Frankfurt');
  const [ownerEmail, setOwnerEmail] = createSignal('');
  const [plan, setPlan] = createSignal('Team');
  const [inviteLater, setInviteLater] = createSignal(true);
  const [created, setCreated] = createSignal(false);
  let timer: ReturnType<typeof setTimeout> | undefined;

  onCleanup(() => clearTimeout(timer));

  const createWorkspace = () =>
    new Promise<void>((resolve) => {
      timer = setTimeout(() => {
        setCreated(true);
        resolve();
      }, CREATE_DELAY_MS);
    });

  const restart = () => {
    setWorkspace('');
    setOwnerEmail('');
    setInviteLater(true);
    setCreated(false);
  };

  const buildSteps = (): WizardStep[] => [
    {
      label: 'Workspace',
      description: 'Name and region',
      validate: () => workspaceNameProblem(workspace()),
      content: (
        <FormGrid columns={2}>
          <Input
            label="Workspace name"
            value={workspace()}
            onInput={(event) => setWorkspace(event.currentTarget.value)}
            validate={workspaceNameProblem}
          />
          <Select label="Data region" options={REGIONS} value={region()} onValueChange={(value) => setRegion(value)} />
        </FormGrid>
      ),
    },
    {
      label: 'Owner',
      description: 'Contact and plan',
      validate: () => emailProblem(ownerEmail()),
      content: (
        <FormGrid columns={2}>
          <Input
            label="Owner email"
            type="email"
            value={ownerEmail()}
            onInput={(event) => setOwnerEmail(event.currentTarget.value)}
            validate={emailProblem}
          />
          <Select label="Plan" options={PLANS} value={plan()} onValueChange={(value) => setPlan(value)} />
          <Switch
            label="Invite teammates later"
            checked={inviteLater()}
            onChange={(event) => setInviteLater(event.currentTarget.checked)}
          />
        </FormGrid>
      ),
    },
    {
      label: 'Review',
      description: 'Confirm and create',
      content: (
        <dl class={styles.summary}>
          <dt>Workspace</dt>
          <dd>{workspace()}</dd>
          <dt>Data region</dt>
          <dd>{region()}</dd>
          <dt>Owner</dt>
          <dd>{ownerEmail()}</dd>
          <dt>Plan</dt>
          <dd>{plan()}</dd>
          <dt>Invitations</dt>
          <dd>{inviteLater() ? 'Later' : 'On creation'}</dd>
        </dl>
      ),
    },
  ];

  return (
    <Show
      when={created()}
      fallback={<Wizard steps={buildSteps()} finishLabel="Create workspace" onFinish={createWorkspace} />}
    >
      <Alert
        tone="success"
        title={`${workspace()} is ready`}
        action={
          <Button variant="secondary" size="sm" onClick={restart}>
            Start over
          </Button>
        }
      >
        The workspace was created in {region()} on the {plan()} plan.
      </Alert>
    </Show>
  );
};
