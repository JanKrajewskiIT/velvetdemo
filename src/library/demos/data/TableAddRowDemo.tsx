import { Button, Table, TableAddRowAction, type TableColumn } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

interface Invite {
  id: number;
  name: string;
  status: string;
}

const INITIAL_INVITES: Invite[] = [
  { id: 1, name: 'Anna Kowalska', status: 'Accepted' },
  { id: 2, name: 'Marek Nowak', status: 'Pending' },
];

const COLUMNS: TableColumn<Invite>[] = [
  { key: 'name', label: 'Member', width: '65%' },
  { key: 'status', label: 'Invitation', width: '35%' },
];

const MAX_INVITES = 8;

export const TableAddRowDemo = () => {
  const [invites, setInvites] = createSignal(INITIAL_INVITES);
  const addInvite = () => {
    const id = invites().length + 1;
    setInvites((current) => [...current, { id, name: `Guest ${id}`, status: 'Pending' }]);
  };

  return (
    <Table
      layout="fixed"
      columns={COLUMNS}
      rows={invites()}
      maxHeight={280}
      toolbar={
        <Button size="sm" variant="secondary" onClick={() => setInvites(INITIAL_INVITES)}>
          Reset invitations
        </Button>
      }
      addRow={
        <TableAddRowAction colSpan={COLUMNS.length} disabled={invites().length >= MAX_INVITES} onClick={addInvite}>
          Invite member
        </TableAddRowAction>
      }
    />
  );
};
