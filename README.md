# VelvetDemo

Showcase application for the VelvetUi and VelvetData component libraries.

Documentation: [Recron project docs](https://docs.bluebraces.online/projects/velvet-demo/).

The static demo is served through Traefik directly to the unprivileged Nginx
container on port 3000. It does not deploy a WAF. CI still requires the SPA image
scan and SBOM, ZAP baseline, signed image verification and the HTTPS smoke test.

The demo selects `waf-enabled: false` in the shared image verification workflow.
Both the workflow and the locked `@jankrajewskiit/configs` package must use version
3.7.12 or later, so the generated SPA artifact contains the security script with
the matching `spa` profile. Workflow references are pinned to immutable commits.
