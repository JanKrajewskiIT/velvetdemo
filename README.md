# @jankrajewskiit/demo

VelvetUi and VelvetData component showcase application.

See [showcase coverage](docs/showcase-coverage.md) for the public component inventory, live examples and the API changes covered by the demo.

Consumes published packages from GitHub Packages:

- `@jankrajewskiit/ui`
- `@jankrajewskiit/data` 3.4.2 (advanced data components and TradingView charts)
- `lightweight-charts` 5.x (the optional VelvetData chart adapter)
- `@jankrajewskiit/auth` (offline showcase sessions)
- `@jankrajewskiit/i18n`
- `@jankrajewskiit/configs` (dev)

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
