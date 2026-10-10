import { Button, useToast } from '@jankrajewskiit/ui';

import styles from './ToastLiveDemo.module.css';

const timeLabel = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export const ToastLiveDemo = () => {
  const toast = useToast();

  const save = () => toast.show({ tone: 'success', title: 'Changes saved', description: `Synced at ${timeLabel()}.` });
  const fail = () =>
    toast.show({
      tone: 'danger',
      title: 'Upload failed',
      description: 'report-q3.pdf is larger than the 25 MB limit.',
    });
  const remove = () => {
    const id = toast.show({
      title: 'Invoice moved to trash',
      description: 'INV-1042 will be deleted in 30 days.',
      duration: 6000,
      onUndo: () => {
        toast.dismiss(id);
        toast.show({ tone: 'success', title: 'Invoice restored' });
      },
    });
  };

  return (
    <div class={styles.actions}>
      <Button size="sm" variant="secondary" iconLeft="check" onClick={save}>
        Save changes
      </Button>
      <Button size="sm" variant="secondary" iconLeft="trash" onClick={remove}>
        Delete with undo
      </Button>
      <Button size="sm" variant="secondary" iconLeft="triangle-alert" onClick={fail}>
        Trigger error
      </Button>
      <Button size="sm" variant="ghost" onClick={() => toast.clear()}>
        Clear all
      </Button>
    </div>
  );
};
