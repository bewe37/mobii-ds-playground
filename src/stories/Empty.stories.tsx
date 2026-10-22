import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Empty, Flex } from 'antd';

const meta: Meta<typeof Empty> = {
  title: 'Data Display/Empty',
  component: Empty,
};
export default meta;

type Story = StoryObj<typeof Empty>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap={48} wrap align="flex-start">
      <Empty />
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      <Empty description="No projects yet" />
      <Empty description="No results">
        <Button type="primary">Create one</Button>
      </Empty>
      <Empty description={false} />
    </Flex>
  ),
};
