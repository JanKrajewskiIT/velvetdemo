import { useI18n } from '@jankrajewskiit/i18n';
import { Markdown, SectionLabel } from '@jankrajewskiit/ui';

import styles from './MarkdownDemo.module.css';

const IMAGE_URL = `${import.meta.env.BASE_URL}favicon.svg`;
const SOURCE = `## Release notes

Velvet renders **bold**, _italic_ and \`inline code\`, plus [links](https://example.com).

- [x] Ship the editor
- [ ] Write the docs

> Raw HTML in the source is escaped.

| Token | Role |
| :-- | --: |
| \`--fg-primary\` | text |
| \`--action-primary\` | brand |

<script>alert('escaped')</script>

## Links and images

Visit www.example.com or contact <hello@example.com> and <mailto:team@example.com>.

![Full reference][velvet-mark]
![Collapsed reference][]
![Shortcut reference]

[velvet-mark]: ${IMAGE_URL} "Velvet mark"
[Collapsed reference]: ${IMAGE_URL}
[Shortcut reference]: ${IMAGE_URL}

## A

The first heading.

## A-1

A heading whose name includes a suffix.

## A

A repeated heading keeps a unique anchor.

## ✨

A heading with no letters still gets an anchor.`;

export const MarkdownDemo = () => {
  const { ts } = useI18n();

  return (
    <div class={styles.panes}>
      <section class={styles.pane}>
        <SectionLabel>{ts('library.display.markdown.source')}</SectionLabel>
        <pre class={styles.source} lang="en">
          <code>{SOURCE}</code>
        </pre>
      </section>
      <section class={styles.pane}>
        <SectionLabel>{ts('library.display.markdown.rendered')}</SectionLabel>
        <div class={styles.rendered} lang="en">
          <Markdown source={SOURCE} size="sm" />
        </div>
      </section>
    </div>
  );
};
