import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Tag } from 'antd';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
  component: Tag,
  args: { children: 'Tag' },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle">
      <Flex gap="small" wrap>
        <Tag>Default</Tag>
        <Tag closable>Closable</Tag>
        <Tag color="processing">Processing</Tag>
        <Tag color="success">Success</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="error">Error</Tag>
      </Flex>
      <Flex gap="small" wrap>
        <Tag color="blue">Blue</Tag>
        <Tag color="green">Green</Tag>
        <Tag color="orange">Orange</Tag>
        <Tag color="red">Red</Tag>
        <Tag color="purple">Purple</Tag>
        <Tag color="#1F6FEB">Custom hex</Tag>
      </Flex>
      <Flex gap="small" wrap>
        <Tag.CheckableTag checked>Checkable on</Tag.CheckableTag>
        <Tag.CheckableTag checked={false}>Checkable off</Tag.CheckableTag>
      </Flex>
    </Flex>
  ),
};
