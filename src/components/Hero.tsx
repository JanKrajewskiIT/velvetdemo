import { useI18n } from '@jankrajewskiit/i18n';
import { Button } from '@jankrajewskiit/ui';
import { For } from 'solid-js';

import styles from './Hero.module.css';
import { HeroStage } from './HeroStage';

export interface HeroProps {
  groupCount: number;
  specimenCount: number;
}

const goTo = (id: string) => {
  location.hash = id;
};

export const Hero = (props: HeroProps) => {
  const { ts, tx } = useI18n();
  const facts = () => [
    { value: props.groupCount, label: ts('showcase.hero.facts.groups') },
    { value: props.specimenCount, label: ts('showcase.hero.facts.specimens') },
    { value: 3, label: ts('showcase.hero.facts.typefaces') },
    { value: 2, label: ts('showcase.hero.facts.themes') },
  ];

  return (
    <section class={styles.hero} id="top">
      <div class={styles.layout}>
        <div>
          <div class={styles.eyebrow}>{ts('showcase.hero.eyebrow')}</div>
          <h1 class={styles.title}>{tx('showcase.hero.title', { em: (children) => <em>{children}</em> })}</h1>
          <p class={styles.lead}>{ts('showcase.hero.lead')}</p>
          <div class={styles.actions}>
            <Button size="lg" iconRight="arrow-right" onClick={() => goTo('library')}>
              {ts('showcase.hero.browse')}
            </Button>
            <Button size="lg" variant="secondary" onClick={() => goTo('foundations')}>
              {ts('showcase.hero.seeFoundations')}
            </Button>
          </div>
          <dl class={styles.facts}>
            <For each={facts()}>
              {(fact) => (
                <div>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              )}
            </For>
          </dl>
        </div>
        <HeroStage />
      </div>
    </section>
  );
};
