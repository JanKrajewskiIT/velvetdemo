# @jankrajewskiit/demo

VelvetUi + VelvetData component showcase application.

Consumes published packages from GitHub Packages:
- `@jankrajewskiit/ui`
- `@jankrajewskiit/data`
- `@jankrajewskiit/configs` (dev)

## Local development

```bash
# Set GHCR_TOKEN with read:packages scope
$env:GHCR_TOKEN = "ghp_xxx"
npm install
npm run dev
```

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
