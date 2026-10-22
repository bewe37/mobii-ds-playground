import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Tree } from 'antd';

const treeData = [
  {
    key: 'design',
    title: 'Design',
    children: [
      { key: 'tokens', title: 'Tokens' },
      { key: 'components', title: 'Components', children: [{ key: 'button', title: 'Button' }, { key: 'input', title: 'Input' }] },
    ],
  },
  {
    key: 'engineering',
    title: 'Engineering',
    children: [
      { key: 'web', title: 'Web' },
      { key: 'mobile', title: 'Mobile', disabled: true },
    ],
  },
];

const meta: Meta<typeof Tree> = {
  title: 'Data Display/Tree',
  component: Tree,
  args: { treeData, defaultExpandAll: true },
};
export default meta;

type Story = StoryObj<typeof Tree>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap={48} wrap align="flex-start">
      <Tree treeData={treeData} defaultExpandAll defaultSelectedKeys={['tokens']} />
      <Tree treeData={treeData} defaultExpandAll checkable defaultCheckedKeys={['components']} />
      <Tree treeData={treeData} defaultExpandAll showLine />
      <Tree treeData={treeData} defaultExpandAll blockNode draggable style={{ width: 200 }} />
      <Tree.DirectoryTree treeData={treeData} defaultExpandAll />
    </Flex>
  ),
};
