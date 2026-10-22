import type { Meta, StoryObj } from '@storybook/react-vite';
import { Space, Switch } from 'antd';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  args: { defaultChecked: true },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Space wrap size="large">
      <Switch />
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
      <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
      <Switch loading defaultChecked />
      <Switch disabled />
      <Switch disabled defaultChecked />
    </Space>
  ),
};
