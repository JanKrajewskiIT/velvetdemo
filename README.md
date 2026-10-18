# VelvetDemo

Showcase application for the VelvetUi and VelvetData component libraries.

Documentation: [Recron project docs](https://docs.bluebraces.online/projects/velvet-demo/).

The static demo is served through Traefik directly to the unprivileged Nginx
container on port 3000. It does not deploy a WAF. CI still requires the SPA image
scan and SBOM, ZAP baseline, signed image verification and the HTTPS smoke test.

The demo selects `waf-enabled: false` in the shared image verification workflow.
The workflow must support the `spa` security profile (Configs 3.7.12 or later).
The locked `@jankrajewskiit/configs` package must be at least 3.12.2 so the generated
SPA artifact includes the scanner installer's `security-tool-directory.mjs`
dependency. Workflow references are pinned to immutable commits. After updating
the lockfile, run a fresh application build to recreate the SPA artifact;
rerunning image verification on an older artifact retains its missing files.
