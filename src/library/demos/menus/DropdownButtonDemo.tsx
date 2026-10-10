import { DropdownButton } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './DropdownButtonDemo.module.css';

export const DropdownButtonDemo = () => {
  const [status, setStatus] = createSignal<string>();

  return (
    <div class={styles.root}>
      <div class={styles.row}>
        <DropdownButton
          icon="check"
          onClick={() => setStatus('Saved')}
          items={[
            { label: 'Save as draft', icon: 'file', onSelect: () => setStatus('Saved as draft') },
            { label: 'Save and publish', icon: 'globe', onSelect: () => setStatus('Published') },
          ]}
        >
          Save
        </DropdownButton>
        <DropdownButton
          variant="secondary"
          icon="download"
          onClick={() => setStatus('Exported as CSV')}
          items={[
            { label: 'Export as CSV', onSelect: () => setStatus('Exported as CSV') },
            { label: 'Export as PDF', onSelect: () => setStatus('Exported as PDF') },
          ]}
        >
          Export
        </DropdownButton>
        <DropdownButton
          variant="ghost"
          items={[
            { label: 'Newest first', checked: true },
            { label: 'Oldest first', checked: false },
          ]}
        >
          Sort
        </DropdownButton>
        <DropdownButton variant="soft" disabled items={[{ label: 'Unavailable' }]}>
          Disabled
        </DropdownButton>
      </div>
      <p class={styles.status} role="status">
        {status() ?? 'The main segment runs the default action; the chevron lists alternatives.'}
      </p>
    </div>
  );
};
