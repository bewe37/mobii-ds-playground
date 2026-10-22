import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from 'antd';

const meta: Meta<typeof Divider> = {
  title: 'Layout/Divider',
  component: Divider,
  args: { children: 'Text' },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ maxWidth: 640 }}>
      <p>Plain divider</p>
      <Divider />
      <Divider>Center title</Divider>
      <Divider titlePlacement="start">Start title</Divider>
      <Divider titlePlacement="end">End title</Divider>
      <Divider plain>Plain title</Divider>
      <Divider variant="dashed">Dashed</Divider>
      <Divider variant="dotted">Dotted</Divider>
      <Divider size="small">Small</Divider>
      <p>
        Text
        <Divider orientation="vertical" />
        Vertical
        <Divider orientation="vertical" />
        Divider
      </p>
    </div>
  ),
};
