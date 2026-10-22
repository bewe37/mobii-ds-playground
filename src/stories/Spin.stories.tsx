import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, Flex, Spin } from 'antd';

const meta: Meta<typeof Spin> = {
  title: 'Feedback/Spin',
  component: Spin,
  args: { spinning: true },
};
export default meta;

type Story = StoryObj<typeof Spin>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large" style={{ maxWidth: 480 }}>
      <Flex gap="large" align="center">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
        <Spin percent={40} />
      </Flex>
      <Spin description="Loading…">
        <Alert type="info" title="Content behind the spinner" description="Spin can wrap content and dim it while loading." />
      </Spin>
    </Flex>
  ),
};
