import type { TranslateStaticFn } from '@jankrajewskiit/ui';

export const createDataDisplayMarkdown = (ts: TranslateStaticFn, buttonLabel: string) => `
## VelvetUI

${ts('demo.text.dataDisplay.markdown.description')}

- ${ts('demo.text.dataDisplay.markdown.bulletTheming')}
- ${ts('demo.text.dataDisplay.markdown.bulletStrictMode')}
- ${ts('demo.text.dataDisplay.markdown.bulletThemeSupport')}

\`\`\`tsx
import { Button } from '@jankrajewskiit/ui';
<Button variant="primary">${buttonLabel}</Button>
\`\`\`
`;
