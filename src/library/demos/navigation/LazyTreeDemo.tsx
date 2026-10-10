import { type TreeNode, TreeView } from '@jankrajewskiit/ui';
import { createSignal, onCleanup } from 'solid-js';

import { FILE_TREE } from './navigationData';

const LOAD_DELAY_MS = 700;

export const LazyTreeDemo = () => {
  const [data, setData] = createSignal(FILE_TREE);
  const timers = new Set<ReturnType<typeof setTimeout>>();
  onCleanup(() => timers.forEach(clearTimeout));

  const loadChildren = (node: TreeNode) =>
    new Promise<void>((resolve) => {
      const timer = setTimeout(() => {
        timers.delete(timer);
        setData((nodes) =>
          nodes.map((entry) =>
            entry.id === node.id
              ? {
                  ...entry,
                  children: [
                    { id: 'release-2', label: 'v2.0.0.json', meta: '6 KB' },
                    { id: 'release-1', label: 'v1.4.2.json', meta: '5 KB' },
                  ],
                }
              : entry,
          ),
        );
        resolve();
      }, LOAD_DELAY_MS);
      timers.add(timer);
    });

  return <TreeView data={data()} label="Project files" defaultExpanded={['src']} onLoadChildren={loadChildren} />;
};
