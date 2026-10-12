import { dependencies, devDependencies } from '../../../package.json';

export const PACKAGE_IDS = ['ui', 'data', 'auth', 'reactive', 'i18n', 'configs'] as const;

export type PackageId = (typeof PACKAGE_IDS)[number];

export type EcosystemNodeId = PackageId | 'app' | 'oidc' | 'solid';

export interface PackageInfo {
  name: string;
  packageName: string;
  version: string;
  dependsOn: readonly EcosystemNodeId[];
}

const packageVersion = (range: string): string => range.replace(/^[~^]/u, '');

export const PACKAGES: Readonly<Record<PackageId, PackageInfo>> = {
  ui: {
    name: 'VelvetUi',
    packageName: '@jankrajewskiit/ui',
    version: packageVersion(dependencies['@jankrajewskiit/ui']),
    dependsOn: ['auth', 'i18n', 'solid', 'configs'],
  },
  data: {
    name: 'VelvetData',
    packageName: '@jankrajewskiit/data',
    version: packageVersion(dependencies['@jankrajewskiit/data']),
    dependsOn: ['ui', 'i18n', 'solid', 'configs'],
  },
  auth: {
    name: 'VelvetAuth',
    packageName: '@jankrajewskiit/auth',
    version: packageVersion(dependencies['@jankrajewskiit/auth']),
    dependsOn: ['oidc', 'solid', 'configs'],
  },
  reactive: {
    name: 'VelvetReactive',
    packageName: '@jankrajewskiit/reactive',
    version: '3.3.5',
    dependsOn: ['solid', 'configs'],
  },
  i18n: {
    name: 'VelvetI18n',
    packageName: '@jankrajewskiit/i18n',
    version: packageVersion(dependencies['@jankrajewskiit/i18n']),
    dependsOn: ['solid', 'configs'],
  },
  configs: {
    name: 'VelvetConfigs',
    packageName: '@jankrajewskiit/configs',
    version: packageVersion(devDependencies['@jankrajewskiit/configs']),
    dependsOn: [],
  },
};

const RUNTIME_PACKAGES: readonly EcosystemNodeId[] = PACKAGE_IDS.filter((id) => id !== 'configs');

const isPackage = (node: EcosystemNodeId): node is PackageId => node in PACKAGES;

const dependsOn = (node: EcosystemNodeId, target: EcosystemNodeId) =>
  isPackage(node) && PACKAGES[node].dependsOn.includes(target);

export const isLit = (active: EcosystemNodeId | null, node: EcosystemNodeId): boolean => {
  if (active === null || active === node) return true;
  if (active === 'app') return RUNTIME_PACKAGES.includes(node);
  if (node === 'app') return RUNTIME_PACKAGES.includes(active);
  return dependsOn(active, node) || dependsOn(node, active);
};
