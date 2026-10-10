import { Markdown, SectionLabel } from '@jankrajewskiit/ui';

import styles from './MarkdownDemo.module.css';

const SOURCE = `## Release notes

Velvet renders **bold**, _italic_ and \`inline code\`, plus [links](https://example.com).

- [x] Ship the editor
- [ ] Write the docs

> Raw HTML in the source is escaped.

| Token | Role |
| :-- | --: |
| \`--fg-primary\` | text |
| \`--action-primary\` | brand |

<script>alert('escaped')</script>`;

export const MarkdownDemo = () => (
  <div class={styles.panes}>
    <section class={styles.pane}>
      <SectionLabel>Source</SectionLabel>
      <pre class={styles.source}>
        <code>{SOURCE}</code>
      </pre>
    </section>
    <section class={styles.pane}>
      <SectionLabel>Rendered</SectionLabel>
      <div class={styles.rendered}>
        <Markdown source={SOURCE} size="sm" />
      </div>
    </section>
  </div>
);
