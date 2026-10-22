import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Flex, Result } from 'antd';

const meta: Meta<typeof Result> = {
  title: 'Feedback/Result',
  component: Result,
  args: {
    status: 'success',
    title: 'Purchase complete',
    subTitle: 'Order number 2026102201. It will arrive in 3–5 days.',
    extra: <Button type="primary">Go to orders</Button>,
  },
};
export default meta;

type Story = StoryObj<typeof Result>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap align="flex-start">
      {(['success', 'info', 'warning', 'error', '403', '404', '500'] as const).map((status) => (
        <Result
          key={status}
          status={status}
          title={status}
          subTitle="Subtitle text"
          extra={<Button type="primary">Action</Button>}
          style={{ width: 360 }}
        />
      ))}
    </Flex>
  ),
};
