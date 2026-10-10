import type { typeEn } from '../../i18n/library/type';
import { FamiliesDemo } from '../demos/type/FamiliesDemo';
import { PolishDemo } from '../demos/type/PolishDemo';
import { TabularFiguresDemo } from '../demos/type/TabularFiguresDemo';
import { TextComponentDemo } from '../demos/type/TextComponentDemo';
import { TypeRoleList } from '../demos/type/TypeRoleList';
import { DISPLAY_ROLES, UI_ROLES } from '../demos/type/typeRoles';
import { TypographicCharactersDemo } from '../demos/type/TypographicCharactersDemo';
import type { Specimen, SpecimenIdOf } from '../types';
import styles from './type.module.css';

export const typeSpecimens: readonly Specimen<SpecimenIdOf<typeof typeEn>>[] = [
  {
    id: 'type-families',
    span: 12,
    render: () => <FamiliesDemo />,
  },
  {
    id: 'type-display-roles',
    span: 12,
    render: () => <TypeRoleList roles={DISPLAY_ROLES} />,
  },
  {
    id: 'type-ui-roles',
    span: 12,
    render: () => <TypeRoleList roles={UI_ROLES} />,
  },
  {
    id: 'type-text-component',
    span: 12,
    render: () => <TextComponentDemo />,
  },
  {
    id: 'type-figures-characters',
    span: 12,
    render: () => (
      <div class={styles.pair}>
        <TabularFiguresDemo />
        <TypographicCharactersDemo />
      </div>
    ),
  },
  {
    id: 'type-polish',
    span: 12,
    render: () => <PolishDemo />,
  },
];
