import { useI18n } from '@jankrajewskiit/i18n';
import { Alert, Button, FormGrid, Input, Select, Switch, Wizard, type WizardStep } from '@jankrajewskiit/ui';
import { createSignal, onCleanup, Show } from 'solid-js';

import { makeProblems } from './validators';
import styles from './WizardDemo.module.css';

const CREATE_DELAY_MS = 1000;
const REGIONS = ['Frankfurt', 'Warsaw', 'Dublin'];
const PLANS = ['Free', 'Team', 'Business'];

export const WizardDemo = () => {
  const { ts } = useI18n();
  const problems = makeProblems(ts);
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
      label: ts('library.forms.demos.wizard.workspaceStep'),
      description: ts('library.forms.demos.wizard.workspaceStepDescription'),
      validate: () => problems.workspaceName(workspace()),
      content: (
        <FormGrid columns={2}>
          <Input
            label={ts('library.forms.demos.wizard.workspaceName')}
            value={workspace()}
            onInput={(event) => setWorkspace(event.currentTarget.value)}
            validate={problems.workspaceName}
          />
          <Select
            label={ts('library.forms.demos.wizard.dataRegion')}
            options={REGIONS}
            value={region()}
            onValueChange={(value) => setRegion(value)}
          />
        </FormGrid>
      ),
    },
    {
      label: ts('library.forms.demos.wizard.ownerStep'),
      description: ts('library.forms.demos.wizard.ownerStepDescription'),
      validate: () => problems.email(ownerEmail()),
      content: (
        <FormGrid columns={2}>
          <Input
            label={ts('library.forms.demos.wizard.ownerEmail')}
            type="email"
            value={ownerEmail()}
            onInput={(event) => setOwnerEmail(event.currentTarget.value)}
            validate={problems.email}
          />
          <Select
            label={ts('library.forms.demos.wizard.plan')}
            options={PLANS}
            value={plan()}
            onValueChange={(value) => setPlan(value)}
          />
          <Switch
            label={ts('library.forms.demos.wizard.inviteLater')}
            checked={inviteLater()}
            onChange={(event) => setInviteLater(event.currentTarget.checked)}
          />
        </FormGrid>
      ),
    },
    {
      label: ts('library.forms.demos.wizard.reviewStep'),
      description: ts('library.forms.demos.wizard.reviewStepDescription'),
      content: (
        <dl class={styles.summary}>
          <dt>{ts('library.forms.demos.wizard.reviewWorkspace')}</dt>
          <dd>{workspace()}</dd>
          <dt>{ts('library.forms.demos.wizard.reviewDataRegion')}</dt>
          <dd>{region()}</dd>
          <dt>{ts('library.forms.demos.wizard.reviewOwner')}</dt>
          <dd>{ownerEmail()}</dd>
          <dt>{ts('library.forms.demos.wizard.reviewPlan')}</dt>
          <dd>{plan()}</dd>
          <dt>{ts('library.forms.demos.wizard.reviewInvitations')}</dt>
          <dd>
            {inviteLater()
              ? ts('library.forms.demos.wizard.invitesLater')
              : ts('library.forms.demos.wizard.invitesOnCreation')}
          </dd>
        </dl>
      ),
    },
  ];

  return (
    <Show
      when={created()}
      fallback={
        <Wizard steps={buildSteps()} finishLabel={ts('library.forms.demos.wizard.create')} onFinish={createWorkspace} />
      }
    >
      <Alert
        tone="success"
        title={ts('library.forms.demos.wizard.ready', { workspace: workspace() })}
        action={
          <Button variant="secondary" size="sm" onClick={restart}>
            {ts('library.forms.demos.wizard.startOver')}
          </Button>
        }
      >
        {ts('library.forms.demos.wizard.createdBody', { region: region(), plan: plan() })}
      </Alert>
    </Show>
  );
};
