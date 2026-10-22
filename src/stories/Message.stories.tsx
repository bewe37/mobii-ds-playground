import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Flex, message } from 'antd';

type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';
type Args = { type: NoticeType; content: string };

// antd's internal panel renders a message inline, so all variants fit on one screen.
const MessagePanel = message._InternalPanelDoNotUseOrYouWillBeFired;

function MessageDemo({ type, content }: Args) {
  const [api, contextHolder] = message.useMessage();
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={() => api.open({ type, content })}>Show message</Button>
    </>
  );
}

const meta: Meta<Args> = {
  title: 'Feedback/Message',
  args: { type: 'success', content: 'Changes saved' },
  argTypes: { type: { control: 'select', options: ['info', 'success', 'error', 'warning', 'loading'] } },
  render: (args) => <MessageDemo {...args} />,
};
export default meta;

type Story = StoryObj<Args>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" align="flex-start">
      <MessagePanel type="info" content="Info message" />
      <MessagePanel type="success" content="Success message" />
      <MessagePanel type="warning" content="Warning message" />
      <MessagePanel type="error" content="Error message" />
      <MessagePanel type="loading" content="Loading message" />
    </Flex>
  ),
};
