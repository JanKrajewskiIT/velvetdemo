import type { SpaArtifactConfig } from '@jankrajewskiit/configs/nginx';
import { createSpaNginxConfig } from '@jankrajewskiit/configs/nginx';

export default {
  nginx: createSpaNginxConfig({ allowInlineStyles: true, allowBlobMedia: true, frameAncestors: ["'self'"] }),
  publicAsset: '/favicon.svg',
} satisfies SpaArtifactConfig;
