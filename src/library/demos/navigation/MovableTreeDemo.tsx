import { useI18n } from '@jankrajewskiit/i18n';
import { Button, moveTreeNode, Stack, Text, TreeView } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { LegacyTreeMoveDemo } from './LegacyTreeMoveDemo';
import { MOVABLE_FILE_TREE } from './navigationData';

export const MovableTreeDemo = () => {
  const { ts } = useI18n();
  const [data, setData] = createSignal(MOVABLE_FILE_TREE);

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.navigation.move.instructions')}
      </Text>
      <TreeView
        label={ts('library.navigation.move.label')}
        data={data()}
        defaultExpanded={['src', 'docs', 'components']}
        canDrop={(node) => node.id !== 'readme'}
        onMovePosition={(move) => setData((nodes) => moveTreeNode(nodes, move))}
      />
      <Button size="sm" variant="ghost" onClick={() => setData(MOVABLE_FILE_TREE)}>
        {ts('library.navigation.move.reset')}
      </Button>
      <LegacyTreeMoveDemo />
    </Stack>
  );
};
