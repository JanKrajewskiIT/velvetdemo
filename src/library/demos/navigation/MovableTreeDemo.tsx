import { useI18n } from '@jankrajewskiit/i18n';
import { Button, Stack, Text, TreeView } from '@jankrajewskiit/ui';
import { createSignal } from 'solid-js';

import { moveTreeNode } from './moveTreeNode';
import { FILE_TREE } from './navigationData';

const INITIAL_TREE = FILE_TREE.filter((node) => !node.lazy);

export const MovableTreeDemo = () => {
  const { ts } = useI18n();
  const [data, setData] = createSignal(INITIAL_TREE);

  return (
    <Stack gap={3}>
      <Text variant="body-sm" tone="secondary">
        {ts('library.navigation.move.instructions')}
      </Text>
      <TreeView
        label={ts('library.navigation.move.label')}
        data={data()}
        defaultExpanded={['src', 'docs', 'components']}
        draggable
        onMove={(sourceId, targetId) => setData((nodes) => moveTreeNode(nodes, sourceId, targetId))}
      />
      <Button size="sm" variant="ghost" onClick={() => setData(INITIAL_TREE)}>
        {ts('library.navigation.move.reset')}
      </Button>
    </Stack>
  );
};
