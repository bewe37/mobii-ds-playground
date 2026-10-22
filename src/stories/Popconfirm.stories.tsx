import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Flex, Popconfirm } from 'antd';

// antd's internal panel renders a popconfirm inline, so all variants fit on one screen.
const PopconfirmPanel = Popconfirm._InternalPanelDoNotUseOrYouWillBeFired;

const meta: Meta<typeof Popconfirm> = {
  title: 'Feedback/Popconfirm',
  component: Popconfirm,
  args: { title: 'Delete this item?', description: 'This cannot be undone.', okText: 'Delete', cancelText: 'Cancel' },
  render: (args) => (
    <Popconfirm {...args}>
      <Button danger>Delete</Button>
    </Popconfirm>
  ),
};
export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap align="flex-start">
      <PopconfirmPanel title="Title only" />
      <PopconfirmPanel title="With description" description="This cannot be undone." />
      <PopconfirmPanel title="Custom text" okText="Yes" cancelText="No" />
      <PopconfirmPanel title="Danger" description="Deletes everything." okButtonProps={{ danger: true }} okText="Delete" />
      <PopconfirmPanel title="No cancel" showCancel={false} />
    </Flex>
  ),
};
