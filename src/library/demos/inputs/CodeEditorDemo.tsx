import { useI18n } from '@jankrajewskiit/i18n';
import { Button, CodeEditor } from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

import styles from './CodeEditorDemo.module.css';

const CONFIGURATION =
  '{\n  "project": "Velvet Demo",\n  "theme": "system",\n  "features": ["search", "i18n"],\n  "offline": true\n}';
const INVALID_CONFIGURATION = '{\n  "project": "Velvet Demo",\n}';

export const CodeEditorDemo = () => {
  const { ts } = useI18n();
  const [value, setValue] = createSignal(CONFIGURATION);
  const invalid = createMemo(() => {
    try {
      JSON.parse(value());
      return false;
    } catch {
      return true;
    }
  });

  return (
    <div class={styles.root}>
      <div class={styles.group}>
        <CodeEditor
          label={ts('library.inputs.codeEditor.configuration')}
          hint={ts('library.inputs.codeEditor.hint')}
          error={invalid() ? ts('library.inputs.codeEditor.invalid') : undefined}
          language="json"
          rows={7}
          maxHeight={240}
          value={value()}
          onValueChange={setValue}
        />
        <div class={styles.actions}>
          <Button variant="secondary" size="sm" onClick={() => setValue(CONFIGURATION)}>
            {ts('library.inputs.codeEditor.reset')}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => setValue(INVALID_CONFIGURATION)}>
            {ts('library.inputs.codeEditor.loadInvalid')}
          </Button>
        </div>
      </div>
      <div class={styles.group}>
        <CodeEditor
          label={ts('library.inputs.codeEditor.preview')}
          hint={ts('library.inputs.codeEditor.previewHint')}
          language="json"
          rows={7}
          readOnly
          value={value()}
        />
        <CodeEditor
          label={ts('library.inputs.codeEditor.plain')}
          hint={ts('library.inputs.codeEditor.plainHint')}
          rows={3}
          highlight={false}
          lineNumbers={false}
          defaultValue={ts('library.inputs.codeEditor.plainValue')}
        />
      </div>
    </div>
  );
};
