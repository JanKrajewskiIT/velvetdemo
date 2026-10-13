# @jankrajewskiit/demo

VelvetUi and VelvetData component showcase application.

See [showcase coverage](docs/showcase-coverage.md) for the public component inventory, live examples and the API changes covered by the demo.

Consumes published packages from GitHub Packages:

- `@jankrajewskiit/ui`
- `@jankrajewskiit/data` (advanced data components and TradingView charts)
- `lightweight-charts` 5.x (the optional VelvetData chart adapter)
- `@jankrajewskiit/auth` (offline showcase sessions)
- `@jankrajewskiit/i18n`
- `@jankrajewskiit/configs` (dev)

Required versions are recorded in `package.json` and resolved versions in `package-lock.json`. Ecosystem cards derive the minimum declared versions of direct packages from the manifest; VelvetReactive retains a reference version because it is not a demo dependency. Follow the [release order](../VelvetData/docs/migration.md#release-order) for later updates, then run `npm run verify` against the refreshed installation.

## Local development

Requires Node 26.

```bash
# Set GHCR_TOKEN with read:packages scope
$env:GHCR_TOKEN = "ghp_xxx"
npm install
npm run dev
```

## Languages

The showcase is available in English (default) and Polish. The choice is stored in `localStorage` under `vui-locale`. Page copy lives in `src/i18n/showcase.ts`, group and specimen names in `src/i18n/library/<group>.ts`.

The entry loads UI styles before Data styles and composes `velvetDataMessages` into the existing i18n provider. DataGrid, ColumnManager, QueryBuilder, VirtualTable and VirtualList examples import their components and related types/helpers from `@jankrajewskiit/data`. Table and other UI primitives stay in `@jankrajewskiit/ui`.

The lazy-loaded TradingView section demonstrates the chart, toolbar, OHLC metrics and accessible price table, plus offline polling and subscription feeds. Sample prices are deterministic; the feed examples own their timers and require no market API or WebSocket server. The optional rendering engine comes from `@jankrajewskiit/data/tradingview`.

## Build & verify

```bash
npm run verify
```

## Docker

```bash
docker build --secret id=github_token,env=GHCR_TOKEN -t velvet-demo .
docker run -p 3000:3000 velvet-demo
```

Production deploy is handled by `.github/workflows/deploy.yml` (image push to GHCR + SSH deploy to VPS).

See the [Contabo deployment guide](docs/contabo-deployment.md) for SSH key generation, server access, GitHub secrets, package permissions, Hostinger DNS, HTTPS certificate recovery and Edge troubleshooting.

## Toolchain compatibility

Builds use TypeScript 7 (`@typescript/native`, providing `tsc`). TypeScript 6 stays under the `typescript` alias for tools importing its JavaScript API (`tsc6` is its separate binary). ESLint 10 is selected by a root `eslint: "$eslint"` override because the accessibility plugin still declares peers only through ESLint 9; Configs adapts legacy rule APIs. Install the Configs release required by this manifest before running the updated presets.

## Deployment configuration

Open `frontend.code-workspace` for the shared TypeScript 7, formatter and linter setup. Use Node 26 and npm 12.2.0. `verify` checks editor drift and zero lint warnings, then type-checks, builds and prepares `.deployment/spa`. `spa.config.ts` owns the application CSP; routing, gzip and cache policy are shared with Configs.

CI verifies the generated Nginx configuration and HTTP headers, saves the resulting image, and publishes that same image without rebuilding. Base images are pinned by digest and tracked by Dependabot. HTML is revalidated, only content-hashed assets are immutable, and public assets have `no-cache`.

For a local runtime-image check after building:

```sh
docker build -t velvet-spa:verified .deployment/spa
npm run verify:container
```

Refresh the installation after publishing Configs 3.5.0 and the required Velvet libraries. Actions accepts `NPM_READ_TOKEN`, falling back to the existing `GHCR_TOKEN`; Dependabot needs its own `NPM_READ_TOKEN` registry secret. Test production login, callback/renewal, styles and PDF printing after deployment.

## Security pipeline

Source verification includes Gitleaks, Semgrep, actionlint, zizmor and Trivy configuration scanning. npm audit blocks high/critical advisories under the shared expiring-exception policy. Verification produces a CycloneDX dependency SBOM. Weekly/manual security workflows re-check dependency databases and source history without building the application.

Knip is available through `npm run deps:check` (JSON report) and `npm run deps:strict` (blocking unused-code check). CI records the report while the initial findings are reviewed; security scans remain blocking. Public library entry exports are preserved.

The final SPA image is scanned with Trivy, checked through ZAP baseline and a blocking WAF regression probe, then published with a Cosign signature and CycloneDX attestation. Production verifies the expected main-branch workflow identity and commit before deploying immutable digests. Traefik routes through the shared ModSecurity/OWASP CRS preset, initially in DetectionOnly mode. Staging DAST is manually selected through the dast workflow.

Configure `CONFIGS_READ_TOKEN` for private Configs source access alongside the existing npm read token. See [shared security controls](https://github.com/JanKrajewskiIT/velvetconfigs/blob/v3.5.0/security/README.md) for required GitHub settings, reports, image signing, staging variables, WAF activation and manual acceptance checks.
