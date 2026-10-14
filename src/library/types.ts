import type { JSX } from 'solid-js';

const _SPECIMEN_SPANS = [4, 6, 8, 12] as const;

export type SpecimenSpan = (typeof _SPECIMEN_SPANS)[number];

export interface Specimen<Id extends string = string> {
  /** Key of the specimen's `name` and `subtitle` in its group dictionary. */
  id: Id;
  /** Columns of the 12-column grid. */
  span: SpecimenSpan;
  render: () => JSX.Element;
}

export type SpecimenIdOf<Messages extends { specimens: object }> = keyof Messages['specimens'] & string;

const _GROUP_KINDS = ['foundation', 'component'] as const;

export type GroupKind = (typeof _GROUP_KINDS)[number];

export interface LibraryGroup<Slug extends string = string> {
  /** Two-digit ordinal, e.g. `'11'`. */
  number: string;
  /** Key of the group's messages under `library` in the dictionary. */
  slug: Slug;
  kind: GroupKind;
  /** Loads the group's specimens; their ids are the keys of the group's `specimens` messages. */
  load: () => Promise<readonly Specimen[]>;
}
