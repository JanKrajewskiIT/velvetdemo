import { useI18n } from '@jankrajewskiit/i18n';
import { Heading, Text } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { cx } from '../../styles/cx';
import { SectionHead } from '../SectionHead';
import { type EcosystemNodeId, isLit, PACKAGE_IDS, PACKAGES } from './ecosystemData';
import styles from './EcosystemSection.module.css';
import { PackageCard } from './PackageCard';

export const EcosystemSection = () => {
  const { ts } = useI18n();
  const [active, setActive] = createSignal<EcosystemNodeId | null>(null);
  const dim = (node: EcosystemNodeId) => !isLit(active(), node);
  const configs = PACKAGES.configs;

  const connector = (node: EcosystemNodeId, label: string) => (
    <div class={cx(styles.link, dim(node) && styles.dim)}>
      <i />
      <Text as="span" variant="code" tone="tertiary" class={styles.linkLabel}>
        {label}
      </Text>
    </div>
  );

  return (
    <section class={styles.section} id="ecosystem">
      <div class={styles.container}>
        <SectionHead
          overline={ts('showcase.ecosystem.overline')}
          title={ts('showcase.ecosystem.title', { count: PACKAGE_IDS.length })}
        >
          {ts('showcase.ecosystem.lead')}
        </SectionHead>
        <div class={styles.ecosystem}>
          <div
            class={cx(styles.app, dim('app') && styles.dim)}
            onMouseEnter={() => setActive('app')}
            onMouseLeave={() => setActive(null)}
          >
            <Text variant="overline" class={styles.appOverline}>
              {ts('showcase.ecosystem.yourApp')}
            </Text>
            <Text as="b" variant="title">
              {ts('showcase.ecosystem.solidApp')}
            </Text>
            <Text variant="code" class={styles.appCode}>
              mountVelvetApp · AuthProvider · configureReactive
            </Text>
          </div>
          <div class={styles.row}>
            {connector('ui', ts('showcase.ecosystem.imports'))}
            {connector('auth', ts('showcase.ecosystem.imports'))}
            {connector('reactive', ts('showcase.ecosystem.imports'))}
          </div>
          <div class={styles.row}>
            <PackageCard id="ui" active={active()} onActivate={setActive} />
            <PackageCard id="auth" active={active()} onActivate={setActive} />
            <PackageCard id="reactive" active={active()} onActivate={setActive} />
          </div>
          <div class={styles.row}>
            {connector('i18n', ts('showcase.ecosystem.peerDependency'))}
            {connector('oidc', ts('showcase.ecosystem.peerDependency'))}
            <div class={cx(styles.wire, (dim('auth') || dim('reactive')) && styles.dim)}>
              <Text as="span" variant="code" class={styles.wireLabel}>
                access token → getAccessToken
              </Text>
              <Text as="small" variant="caption" tone="tertiary">
                {ts('showcase.ecosystem.wiredInApp')}
              </Text>
            </div>
          </div>
          <div class={styles.row}>
            <PackageCard id="i18n" active={active()} onActivate={setActive} />
            <div class={cx(styles.external, dim('oidc') && styles.dim)}>
              <Text as="span" variant="code" class={styles.externalName}>
                oidc-client-ts
              </Text>
              <Text as="small" variant="caption" tone="tertiary">
                {ts('showcase.ecosystem.external')}
              </Text>
            </div>
            <PackageCard id="data" active={active()} onActivate={setActive} />
          </div>
          <div class={cx(styles.solid, dim('solid') && styles.dim)}>
            <Text as="span" variant="code" class={styles.solidName}>
              solid-js ≥ 1.9
            </Text>
            <Text as="small" variant="caption" tone="tertiary">
              {ts('showcase.ecosystem.sharedPeer')}
            </Text>
          </div>
          <article
            class={cx(styles.build, dim('configs') && styles.dim, active() === 'configs' && styles.on)}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex -- keyboard users trace connections through focus
            tabindex="0"
            onMouseEnter={() => setActive('configs')}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive('configs')}
            onBlur={() => setActive(null)}
          >
            <div>
              <Text variant="overline" tone="tertiary">
                {ts('showcase.ecosystem.buildTime')}
              </Text>
              <header class={styles.buildHeader}>
                <Heading level={3} variant="title" class={styles.buildTitle}>
                  {configs.name}
                </Heading>
                <Text as="span" variant="code" tone="tertiary" class={styles.buildVersion}>
                  v{configs.version}
                </Text>
              </header>
              <Text variant="code" tone="brand" class={styles.packageName}>
                {configs.packageName}
              </Text>
            </div>
            <Text as="p" variant="body" tone="secondary" class={styles.buildDescription}>
              {ts('showcase.ecosystem.packages.configs.description')}
            </Text>
          </article>
        </div>
      </div>
    </section>
  );
};
