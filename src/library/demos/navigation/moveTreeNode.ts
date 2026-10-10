import type { TreeNode } from '@jankrajewskiit/ui';

const findNode = (nodes: readonly TreeNode[], id: string): TreeNode | undefined => {
  for (const node of nodes) {
    if (node.id === id) return node;
    const child = node.children && findNode(node.children, id);
    if (child) return child;
  }
};

const removeNode = (nodes: readonly TreeNode[], id: string): TreeNode[] =>
  nodes
    .filter((node) => node.id !== id)
    .map((node) => {
      if (!node.children) return node;
      return { ...node, children: removeNode(node.children, id) };
    });

const appendNode = (nodes: readonly TreeNode[], targetId: string, child: TreeNode): TreeNode[] =>
  nodes.map((node) => {
    if (node.id === targetId) return { ...node, children: [...(node.children ?? []), child] };
    if (!node.children) return node;
    return { ...node, children: appendNode(node.children, targetId, child) };
  });

export const moveTreeNode = (nodes: TreeNode[], sourceId: string, targetId: string): TreeNode[] => {
  const source = findNode(nodes, sourceId);
  if (!source) return nodes;
  return appendNode(removeNode(nodes, sourceId), targetId, source);
};
