import { useI18n } from '@jankrajewskiit/i18n';
import {
  addDays,
  Avatar,
  AvatarGroup,
  Button,
  Calendar,
  ChipGroup,
  Progress,
  Slider,
  Sparkline,
  startOfDay,
  Stat,
  Switch,
  Toast,
} from '@jankrajewskiit/ui';
import { createSignal, Show } from 'solid-js';

import { cx } from '../styles/cx';
import styles from './HeroStage.module.css';

const REVENUE_TREND = [12, 14, 11, 18, 16, 22, 20, 27, 25, 31, 29, 36];

const CATEGORY_COUNTS = [
  { value: 'design', count: 24 },
  { value: 'engineering', count: 41 },
  { value: 'research', count: 8 },
] as const;

const formatBudget = (value: number) => `$${value}k`;

export const HeroStage = () => {
  const { ts } = useI18n();
  const [inviteOpen, setInviteOpen] = createSignal(true);
  const today = startOfDay(new Date());
  const categories = () =>
    CATEGORY_COUNTS.map(({ value, count }) => ({
      value,
      count,
      label: ts(`showcase.hero.stage.categories.${value}`),
    }));
  const formatSteps = (done: number, total: number) => ts('showcase.hero.stage.steps', { done, total });

  return (
    <div class={styles.stage}>
      <div class={styles.bento}>
        <div class={styles.column}>
          <div class={styles.panel}>
            <Stat
              label={ts('showcase.hero.stage.revenue')}
              value="€48,290"
              delta="+12.4%"
              hint={ts('showcase.hero.stage.revenueHint')}
              variant="flat"
            />
            <Sparkline data={REVENUE_TREND} area height={56} label={ts('showcase.hero.stage.revenue')} />
          </div>
          <div class={styles.panel}>
            <h4 class={styles.panelTitle}>
              {ts('showcase.hero.stage.workspace')} <small>{ts('showcase.hero.stage.autosaved')}</small>
            </h4>
            <Switch label={ts('showcase.hero.stage.emailNotifications')} checked />
            <Switch label={ts('showcase.hero.stage.compactDensity')} />
            <Slider
              label={ts('showcase.hero.stage.monthlyBudget')}
              defaultValue={[20, 70]}
              step={5}
              format={formatBudget}
            />
          </div>
          <Show
            when={inviteOpen()}
            fallback={
              <Button variant="secondary" iconLeft="mail" onClick={() => setInviteOpen(true)}>
                {ts('showcase.hero.stage.sendAnotherInvite')}
              </Button>
            }
          >
            <Toast
              tone="success"
              title={ts('showcase.hero.stage.inviteSent')}
              description={ts('showcase.hero.stage.inviteDescription')}
              onClose={() => setInviteOpen(false)}
            />
          </Show>
        </div>
        <div class={styles.column}>
          <div class={cx(styles.panel, styles.centered)}>
            <Calendar
              mode="range"
              defaultValue={{ start: addDays(today, -1), end: addDays(today, 4) }}
              marks={[addDays(today, 7), addDays(today, 9)]}
            />
          </div>
          <div class={styles.panel}>
            <ChipGroup
              size="sm"
              label={ts('showcase.hero.stage.category')}
              defaultValue={['design']}
              options={categories()}
            />
          </div>
          <div class={styles.panel}>
            <h4 class={styles.panelTitle}>
              {ts('showcase.hero.stage.launch')}
              <AvatarGroup>
                <Avatar name="Anna Kowalska" size="sm" />
                <Avatar name="Marek Nowak" size="sm" tone="neutral" />
                <Avatar name="Ola Lis" size="sm" />
                <Avatar initials="+5" size="sm" tone="neutral" />
              </AvatarGroup>
            </h4>
            <Progress
              label={ts('showcase.hero.stage.onboarding')}
              value={3}
              max={5}
              showValue
              tone="success"
              format={formatSteps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
