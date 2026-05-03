import type { DataGridProColumn } from '@jankrajewskiit/data';
import { Text } from '@jankrajewskiit/ui';

export interface PackageRow extends Record<string, unknown> {
  id: string;
  name: string;
  version: string;
  downloads: number;
  license: string;
  category: string;
}

export const PACKAGE_DATA: PackageRow[] = [
  { id: 'solid-js', name: 'solid-js', version: '1.9.7', downloads: 45000, license: 'MIT', category: 'framework' },
  { id: 'vite', name: 'vite', version: '7.3.1', downloads: 120000, license: 'MIT', category: 'tooling' },
  {
    id: 'typescript',
    name: 'typescript',
    version: '5.9.3',
    downloads: 300000,
    license: 'Apache-2.0',
    category: 'language',
  },
  { id: 'vitest', name: 'vitest', version: '3.1.0', downloads: 68000, license: 'MIT', category: 'testing' },
  { id: 'eslint', name: 'eslint', version: '9.18.0', downloads: 210000, license: 'MIT', category: 'quality' },
  { id: 'prettier', name: 'prettier', version: '4.0.0', downloads: 175000, license: 'MIT', category: 'quality' },
  { id: 'postcss', name: 'postcss', version: '8.5.1', downloads: 95000, license: 'MIT', category: 'css' },
];

const DATA_GRID_ROW_COUNT = 2500;

export const DATA_GRID_ROWS: PackageRow[] = Array.from({ length: DATA_GRID_ROW_COUNT }, (_, index) => {
  const base = PACKAGE_DATA[index % PACKAGE_DATA.length] as PackageRow;
  return {
    ...base,
    id: `${base.id}-${index + 1}`,
    name: `${base.name}-${index + 1}`,
    downloads: base.downloads + index * 11,
  };
});

export const DATA_GRID_COLUMNS: DataGridProColumn<PackageRow>[] = [
  { key: 'name', header: 'Package', pinned: 'left', width: 220, minWidth: 150, sortable: true },
  { key: 'version', header: 'Version', width: 120, minWidth: 90, sortable: true },
  {
    key: 'downloads',
    header: 'Downloads',
    width: 160,
    minWidth: 120,
    sortable: true,
    render: (value) => (
      <Text as="span" variant="bodySm">
        {Number(value).toLocaleString()}
      </Text>
    ),
  },
  { key: 'license', header: 'License', width: 140, minWidth: 100, sortable: true },
  { key: 'category', header: 'Category', width: 160, minWidth: 120, sortable: true, pinned: 'right' },
];
