import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Space } from 'antd';

const meta: Meta<typeof Button> = {
  title: 'General/Button',
  component: Button,
  args: { children: 'Button' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = { args: { type: 'primary' } };

export const AllVariants: Story = {
  render: () => (
    <Space wrap>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" disabled>Disabled</Button>
      <Button type="primary" danger>Danger</Button>
    </Space>
  ),
};
