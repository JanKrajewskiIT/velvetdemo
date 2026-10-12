import { useI18n } from '@jankrajewskiit/i18n';
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
      <span class={styles.mono}>{label}</span>
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
            <span class={styles.overline}>{ts('showcase.ecosystem.yourApp')}</span>
            <b>{ts('showcase.ecosystem.solidApp')}</b>
            <span class={styles.mono}>mountVelvetApp · AuthProvider · configureReactive</span>
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
              <span class={styles.mono}>access token → getAccessToken</span>
              <small>{ts('showcase.ecosystem.wiredInApp')}</small>
            </div>
          </div>
          <div class={styles.row}>
            <PackageCard id="i18n" active={active()} onActivate={setActive} />
            <div class={cx(styles.external, dim('oidc') && styles.dim)}>
              <span class={styles.mono}>oidc-client-ts</span>
              <small>{ts('showcase.ecosystem.external')}</small>
            </div>
            <PackageCard id="data" active={active()} onActivate={setActive} />
          </div>
          <div class={cx(styles.solid, dim('solid') && styles.dim)}>
            <span class={styles.mono}>solid-js ≥ 1.9</span>
            <small>{ts('showcase.ecosystem.sharedPeer')}</small>
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
              <span class={styles.overline}>{ts('showcase.ecosystem.buildTime')}</span>
              <header class={styles.buildHeader}>
                <h3>{configs.name}</h3>
                <span class={styles.mono}>v{configs.version}</span>
              </header>
              <span class={styles.packageName}>{configs.packageName}</span>
            </div>
            <p>{ts('showcase.ecosystem.packages.configs.description')}</p>
          </article>
        </div>
      </div>
    </section>
  );
};
