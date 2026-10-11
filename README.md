# @jankrajewskiit/demo

VelvetUi component showcase application.

See [showcase coverage](docs/showcase-coverage.md) for the public component inventory, live examples and the API changes covered by the demo.

Consumes published packages from GitHub Packages:

- `@jankrajewskiit/ui`
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
