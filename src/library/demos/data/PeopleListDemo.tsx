import { useI18n } from '@jankrajewskiit/i18n';
import { Avatar, Glyph, List, type ListItemData } from '@jankrajewskiit/ui';
import { createMemo, createSignal } from 'solid-js';

import styles from './PeopleListDemo.module.css';

type Ts = ReturnType<typeof useI18n>['ts'];

const trailing = (text: string) => <span class={styles.trailing}>{text}</span>;

const makePeople = (ts: Ts): ListItemData[] => [
  {
    id: 'anna',
    title: 'Anna Kowalska',
    description: ts('library.data.people.seniorDesigner'),
    leading: <Avatar name="Anna Kowalska" color="auto" status="online" />,
    trailing: trailing(ts('library.data.list.hoursAgo', { count: 2 })),
  },
  {
    id: 'marek',
    title: 'Marek Nowak',
    description: ts('library.data.people.engineeringManager'),
    leading: <Avatar name="Marek Nowak" color="auto" status="busy" />,
    trailing: trailing(ts('library.data.relative.yesterday')),
  },
  {
    id: 'ewa',
    title: 'Ewa Zielińska',
    description: ts('library.data.people.onLeave'),
    leading: <Avatar name="Ewa Zielińska" color="auto" status="away" />,
    disabled: true,
  },
  {
    id: 'piotr',
    title: 'Piotr Wiśniewski',
    description: ts('library.data.people.staffEngineer'),
    leading: <Avatar name="Piotr Wiśniewski" color="auto" status="offline" />,
    trailing: trailing(ts('library.data.relative.daysAgo', { count: 3 })),
  },
];

const makeFiles = (ts: Ts): ListItemData[] => [
  { id: 'roadmap', title: 'Roadmap.pdf', leading: <Glyph name="file-text" />, trailing: trailing('1.2 MB') },
  {
    id: 'brand',
    title: ts('library.data.files.brandGuidelines'),
    leading: <Glyph name="folder" />,
    trailing: trailing(ts('library.data.files.count', { count: 14 })),
  },
  { id: 'cover', title: 'Cover.png', leading: <Glyph name="image" />, trailing: trailing('480 KB') },
  { id: 'export', title: 'Export.csv', leading: <Glyph name="file" />, trailing: trailing('86 KB') },
];

export const PeopleListDemo = () => {
  const { ts } = useI18n();
  const people = createMemo(() => makePeople(ts));
  const files = createMemo(() => makeFiles(ts));
  const [selected, setSelected] = createSignal<string | number>('anna');
  return (
    <div class={styles.root}>
      <List items={people()} value={selected()} onValueChange={setSelected} label={ts('library.data.list.team')} />
      <List items={files()} size="sm" label={ts('library.data.list.files')} />
    </div>
  );
};
