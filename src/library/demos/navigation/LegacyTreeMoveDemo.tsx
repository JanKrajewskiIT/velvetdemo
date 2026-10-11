import { useI18n } from '@jankrajewskiit/i18n';
import { Button, moveTreeNode, Stack, Text, TreeView } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { MOVABLE_FILE_TREE } from './navigationData';

export const LegacyTreeMoveDemo = () => {
  const { ts } = useI18n();
  const [data, setData] = createSignal(MOVABLE_FILE_TREE);

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.navigation.move.legacyInstructions')}
      </Text>
      <TreeView
        label={ts('library.navigation.move.legacyLabel')}
        data={data()}
        defaultExpanded={['src', 'docs', 'components']}
        draggable
        canDrop={(_node, target) => Array.isArray(target.children)}
        onMove={(id, targetId) => setData((nodes) => moveTreeNode(nodes, { id, targetId, position: 'inside' }))}
      />
      <Button size="sm" variant="ghost" onClick={() => setData(MOVABLE_FILE_TREE)}>
        {ts('library.navigation.move.reset')}
      </Button>
    </Stack>
  );
};
