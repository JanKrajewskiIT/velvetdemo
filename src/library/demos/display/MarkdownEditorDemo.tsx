import { Button, Markdown, MarkdownEditDialog, MarkdownEditor, SectionLabel } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './MarkdownEditorDemo.module.css';

const DRAFT = `## Sprint goals

Ship the **editor** and keep \`tokens\` in sync.

- Review the open issues
- Update the changelog
- Tag the release`;

const NOTES = `## Meeting notes

Agreed to freeze the \`v3\` API this week.

- Anna writes the migration guide
- Tomasz checks the demos`;

const EDITOR_HEIGHT_PX = 220;
const DIALOG_HEIGHT_PX = 260;

export const MarkdownEditorDemo = () => {
  const [draft, setDraft] = createSignal(DRAFT);
  const [notes, setNotes] = createSignal(NOTES);
  const [dialogOpen, setDialogOpen] = createSignal(false);

  const saveNotes = (value: string) => {
    setNotes(value);
    setDialogOpen(false);
  };

  return (
    <div class={styles.root}>
      <MarkdownEditor
        label="Sprint plan"
        hint="Write, split or preview. Enter continues a list."
        value={draft()}
        onValueChange={setDraft}
        height={EDITOR_HEIGHT_PX}
      />
      <section class={styles.dialogRow}>
        <div class={styles.notes}>
          <SectionLabel>Saved notes</SectionLabel>
          <Markdown source={notes()} size="sm" />
        </div>
        <Button variant="secondary" onClick={() => setDialogOpen(true)}>
          Edit notes in a dialog
        </Button>
      </section>
      <MarkdownEditDialog
        open={dialogOpen()}
        title="Edit meeting notes"
        description="Save stays disabled until the draft changes."
        value={notes()}
        height={DIALOG_HEIGHT_PX}
        onSave={saveNotes}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};
