import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Table, TableAddRowAction, type TableColumn } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

interface Invite {
  id: number;
  name: string;
  status: InviteStatus;
}

const INVITE_STATUS_LABEL_KEY = {
  Accepted: 'library.data.invites.accepted',
  Pending: 'library.data.invites.pending',
} as const;

type InviteStatus = keyof typeof INVITE_STATUS_LABEL_KEY;

const INITIAL_INVITES: Invite[] = [
  { id: 1, name: 'Anna Kowalska', status: 'Accepted' },
  { id: 2, name: 'Marek Nowak', status: 'Pending' },
];

const MAX_INVITES = 8;

export const TableAddRowDemo = () => {
  const { ts } = useI18n();
  const COLUMNS: TableColumn<Invite>[] = [
    { key: 'name', label: ts('library.data.columns.member'), width: '65%' },
    {
      key: 'status',
      label: ts('library.data.columns.invitation'),
      width: '35%',
      render: (row) => ts(INVITE_STATUS_LABEL_KEY[row.status]),
    },
  ];
  const [invites, setInvites] = createSignal(INITIAL_INVITES);
  const addInvite = () => {
    const id = invites().length + 1;
    setInvites((current) => [...current, { id, name: ts('library.data.invites.guest', { id }), status: 'Pending' }]);
  };

  return (
    <Table
      layout="fixed"
      columns={COLUMNS}
      rows={invites()}
      maxHeight={280}
      toolbar={
        <Button size="sm" variant="secondary" onClick={() => setInvites(INITIAL_INVITES)}>
          {ts('library.data.actions.resetInvitations')}
        </Button>
      }
      addRow={
        <TableAddRowAction colSpan={COLUMNS.length} disabled={invites().length >= MAX_INVITES} onClick={addInvite}>
          {ts('library.data.actions.inviteMember')}
        </TableAddRowAction>
      }
    />
  );
};
