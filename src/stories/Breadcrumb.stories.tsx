import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumb, Flex } from 'antd';

const items = [
  { title: 'Home', href: '#' },
  { title: 'Projects', href: '#' },
  { title: 'Design system' },
];

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  args: { items },
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Breadcrumb items={items} />
      <Breadcrumb separator=">" items={items} />
      <Breadcrumb
        items={[
          { title: 'Home', href: '#' },
          {
            title: 'Components',
            menu: { items: [{ key: 'general', label: 'General' }, { key: 'layout', label: 'Layout' }] },
          },
          { title: 'Button' },
        ]}
      />
      <Breadcrumb
        items={[
          { title: 'Home', href: '#' },
          { type: 'separator', separator: ':' },
          { title: 'Settings' },
        ]}
      />
    </Flex>
  ),
};
