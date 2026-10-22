import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert, Flex } from 'antd';

const meta: Meta<typeof Alert> = {
  title: 'Feedback/Alert',
  component: Alert,
  args: { title: 'Alert message', type: 'info' },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ maxWidth: 480 }}>
      <Alert type="success" title="Success" />
      <Alert type="info" title="Info" />
      <Alert type="warning" title="Warning" />
      <Alert type="error" title="Error" />
      <Alert type="info" title="With icon" showIcon />
      <Alert type="info" title="With description" description="Additional detail about this alert." showIcon />
      <Alert type="warning" title="Closable" closable />
      <Alert type="warning" title="Banner" banner />
    </Flex>
  ),
};
