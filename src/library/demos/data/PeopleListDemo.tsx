import { Avatar, Glyph, List, type ListItemData } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import styles from './PeopleListDemo.module.css';

const trailing = (text: string) => <span class={styles.trailing}>{text}</span>;

const PEOPLE: ListItemData[] = [
  {
    id: 'anna',
    title: 'Anna Kowalska',
    description: 'Senior designer',
    leading: <Avatar name="Anna Kowalska" color="auto" status="online" />,
    trailing: trailing('2 h ago'),
  },
  {
    id: 'marek',
    title: 'Marek Nowak',
    description: 'Engineering manager',
    leading: <Avatar name="Marek Nowak" color="auto" status="busy" />,
    trailing: trailing('Yesterday'),
  },
  {
    id: 'ewa',
    title: 'Ewa Zielińska',
    description: 'On leave until Monday',
    leading: <Avatar name="Ewa Zielińska" color="auto" status="away" />,
    disabled: true,
  },
  {
    id: 'piotr',
    title: 'Piotr Wiśniewski',
    description: 'Staff engineer',
    leading: <Avatar name="Piotr Wiśniewski" color="auto" status="offline" />,
    trailing: trailing('3 days ago'),
  },
];

const FILES: ListItemData[] = [
  { id: 'roadmap', title: 'Roadmap.pdf', leading: <Glyph name="file-text" />, trailing: trailing('1.2 MB') },
  { id: 'brand', title: 'Brand guidelines', leading: <Glyph name="folder" />, trailing: trailing('14 files') },
  { id: 'cover', title: 'Cover.png', leading: <Glyph name="image" />, trailing: trailing('480 KB') },
  { id: 'export', title: 'Export.csv', leading: <Glyph name="file" />, trailing: trailing('86 KB') },
];

export const PeopleListDemo = () => {
  const [selected, setSelected] = createSignal<string | number>('anna');
  return (
    <div class={styles.root}>
      <List items={PEOPLE} value={selected()} onValueChange={setSelected} label="Team" />
      <List items={FILES} size="sm" label="Files" />
    </div>
  );
};
