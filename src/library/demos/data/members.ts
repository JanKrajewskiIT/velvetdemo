type MemberStatus = 'Active' | 'Invited' | 'Suspended';

export interface Member {
  id: number;
  name: string;
  role: string;
  status: MemberStatus;
  seats: number;
  email: string;
  lastActiveDays: number;
}

export const ROLES: string[] = ['Admin', 'Editor', 'Viewer'];

export const STATUS_TONE = { Active: 'success', Invited: 'info', Suspended: 'danger' } as const;

const member = (
  id: number,
  name: string,
  handle: string,
  role: string,
  status: MemberStatus,
  seats: number,
  lastActiveDays: number,
): Member => ({ id, name, role, status, seats, email: `${handle}@example.com`, lastActiveDays });

export const MEMBERS: Member[] = [
  member(1, 'Anna Kowalska', 'anna.kowalska', 'Admin', 'Active', 12, 0),
  member(2, 'Marek Nowak', 'marek.nowak', 'Editor', 'Active', 8, 1),
  member(3, 'Ewa Zielińska', 'ewa.zielinska', 'Viewer', 'Invited', 1, 9),
  member(4, 'Piotr Wiśniewski', 'piotr.wisniewski', 'Editor', 'Active', 5, 2),
  member(5, 'Katarzyna Lewandowska', 'katarzyna.lewandowska', 'Admin', 'Active', 16, 0),
  member(6, 'Tomasz Dąbrowski', 'tomasz.dabrowski', 'Viewer', 'Suspended', 3, 41),
  member(7, 'Joanna Kamińska', 'joanna.kaminska', 'Editor', 'Invited', 2, 6),
  member(8, 'Michał Szymański', 'michal.szymanski', 'Viewer', 'Active', 4, 3),
];
