import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Flex, notification } from 'antd';

type IconType = 'info' | 'success' | 'error' | 'warning';
type Args = { type: IconType; title: string; description: string };

// antd's internal panel renders a notification inline, so all variants fit on one screen.
const NotificationPanel = notification._InternalPanelDoNotUseOrYouWillBeFired;

function NotificationDemo({ type, title, description }: Args) {
  const [api, contextHolder] = notification.useNotification();
  return (
    <>
      {contextHolder}
      <Button type="primary" onClick={() => api[type]({ title, description })}>Show notification</Button>
    </>
  );
}

const meta: Meta<Args> = {
  title: 'Feedback/Notification',
  args: { type: 'info', title: 'Notification title', description: 'Notification description' },
  argTypes: { type: { control: 'select', options: ['info', 'success', 'error', 'warning'] } },
  render: (args) => <NotificationDemo {...args} />,
};
export default meta;

type Story = StoryObj<Args>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" align="flex-start">
      <NotificationPanel title="Default" description="No icon" />
      <NotificationPanel type="info" title="Info" description="Something you should know." />
      <NotificationPanel type="success" title="Success" description="It worked." />
      <NotificationPanel type="warning" title="Warning" description="Be careful." />
      <NotificationPanel type="error" title="Error" description="Something went wrong." />
      <NotificationPanel
        type="info"
        title="With actions"
        description="Notifications can carry buttons."
        actions={<Button type="primary" size="small">Undo</Button>}
      />
    </Flex>
  ),
};
