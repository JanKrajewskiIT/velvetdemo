export interface DocSnippet {
  title: string;
  file: string;
  code: string;
}

export const TOOLING_SNIPPETS: DocSnippet[] = [
  {
    title: 'ESLint preset',
    file: 'eslint.config.mjs',
    code: `import { createEslintConfig } from '@jankrajewskiit/configs/eslint';

export default createEslintConfig({
  tsconfigRootDir: import.meta.dirname,
});`,
  },
  {
    title: 'Prettier preset',
    file: '.prettierrc',
    code: `"@jankrajewskiit/configs/prettier"`,
  },
  {
    title: 'Prettier (JSON)',
    file: '.prettierrc.json',
    code: `{
  "extends": "@jankrajewskiit/configs/prettier"
}`,
  },
  {
    title: 'Stylelint preset',
    file: '.stylelintrc.json',
    code: `{
  "extends": "@jankrajewskiit/configs/stylelint"
}`,
  },
  {
    title: 'TypeScript app config',
    file: 'tsconfig.app.json',
    code: `{
  "extends": "@jankrajewskiit/configs/tsconfig/app-vite",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "~/*": ["src/*"] }
  },
  "include": ["src"]
}`,
  },
  {
    title: 'TypeScript node config',
    file: 'tsconfig.node.json',
    code: `{
  "extends": "@jankrajewskiit/configs/tsconfig/node-vite",
  "include": ["vite.config.ts"]
}`,
  },
  {
    title: 'Vite config preset',
    file: 'vite.config.ts',
    code: `import { defineConfig } from 'vite';
import { createSolidAppViteConfig } from '@jankrajewskiit/configs/vite';

export default defineConfig(
  createSolidAppViteConfig({
    server: { port: 5173 },
    preview: { port: 5173 },
  })
);`,
  },
  {
    title: 'lint-staged preset',
    file: '.lintstagedrc.mjs',
    code: `import { createLintStagedConfig } from '@jankrajewskiit/configs/lint-staged';

export default createLintStagedConfig();`,
  },
  {
    title: 'Husky pre-commit',
    file: '.husky/pre-commit',
    code: `. "$(dirname -- "$0")/../node_modules/@jankrajewskiit/configs/husky/pre-commit.sh"`,
  },
  {
    title: 'package.json scripts',
    file: 'package.json',
    code: `"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "lint:css": "stylelint \\"src/**/*.css\\"",
  "lint:css:fix": "stylelint \\"src/**/*.css\\" --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "typecheck": "tsc -b",
  "prepare": "husky"
}`,
  },
];

export const createUsageSnippets = (): DocSnippet[] => [
  {
    title: 'useClickOutside',
    file: 'hooks/useClickOutside.ts',
    code: `import { useClickOutside } from '@jankrajewskiit/ui';

const [ref, setRef] = createSignal<HTMLElement | null>(null);
useClickOutside(ref, () => closeMenu());`,
  },
  {
    title: 'useEscapeKey',
    file: 'hooks/useEscapeKey.ts',
    code: `import { useEscapeKey } from '@jankrajewskiit/ui';

useEscapeKey(() => closeModal());`,
  },
  {
    title: 'useFocusTrap',
    file: 'hooks/useFocusTrap.ts',
    code: `import { useFocusTrap } from '@jankrajewskiit/ui';

const [container, setContainer] = createSignal<HTMLElement | null>(null);
useFocusTrap(container, { enabled: () => dialogOpen() });`,
  },
  {
    title: 'ConfirmAction',
    file: 'features/DeleteAction.tsx',
    code: `import { ConfirmAction, Button } from '@jankrajewskiit/ui';

<ConfirmAction
  title="\${ts('demo.text.overlays.confirmDialog.deleteItem')}"
  message="\${ts('demo.text.overlays.confirmDialog.deleteItemMessage')}"
  confirmLabel="\${ts('demo.text.overlays.confirmDialog.delete')}"
  variant="danger"
  onConfirm={removeItem}
>
  {({ openConfirm }) => (
    <Button variant="danger" onClick={openConfirm}>
      \${ts('demo.text.overlays.confirmDialog.delete')}
    </Button>
  )}
</ConfirmAction>;`,
  },
  {
    title: 'EditableCollection',
    file: 'features/TeamMembersForm.tsx',
    code: `import { EditableCollection, Input, IconButton } from '@jankrajewskiit/ui';

<EditableCollection
  items={members()}
  getId={(item) => item.id}
  onAdd={addMember}
  onRemove={removeMember}
  renderItem={(item, { requestRemove }) => (
    <>
      <Input value={item.name} onInput={(e) => rename(item.id, e.currentTarget.value)} />
      <IconButton label="\${ts('demo.text.composites.editableCollection.remove')}" icon={<TrashIcon />} onClick={requestRemove} />
    </>
  )}
/>;`,
  },
  {
    title: 'AuthGuard',
    file: 'routing/ProtectedRoute.tsx',
    code: `import { AuthGuard } from '@jankrajewskiit/ui';

<AuthGuard roles={['admin', 'editor']}>
  <AdminPage />
</AuthGuard>;`,
  },
];
