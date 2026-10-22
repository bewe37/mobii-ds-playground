import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Tabs } from 'antd';

const items = [
  { key: '1', label: 'Overview', children: 'Overview content' },
  { key: '2', label: 'Details', children: 'Details content' },
  { key: '3', label: 'Disabled', children: 'Disabled content', disabled: true },
];

const meta: Meta<typeof Tabs> = {
  title: 'Navigation/Tabs',
  component: Tabs,
  args: { items },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Tabs items={items} />
      <Tabs items={items} type="card" />
      <Tabs items={items} size="small" />
      <Tabs items={items} size="large" />
      <Tabs items={items} centered />
    </Flex>
  ),
};
