import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Mentions } from 'antd';

const options = ['alex', 'sam', 'jordan'].map((value) => ({ value, label: value }));

const meta: Meta<typeof Mentions> = {
  title: 'Data Entry/Mentions',
  component: Mentions,
  args: { options, placeholder: 'Type @ to mention someone', style: { width: 320 } },
};
export default meta;

type Story = StoryObj<typeof Mentions>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: 320 }}>
      <Mentions options={options} placeholder="Default" />
      <Mentions options={options} defaultValue="Hello @alex " />
      <Mentions options={options} placeholder="Filled" variant="filled" />
      <Mentions options={options} placeholder="Borderless" variant="borderless" />
      <Mentions options={options} placeholder="Auto size" autoSize={{ minRows: 2, maxRows: 4 }} />
      <Mentions options={options} placeholder="Allow clear" allowClear />
      <Mentions options={options} placeholder="Error" status="error" />
      <Mentions options={options} placeholder="Disabled" disabled />
    </Flex>
  ),
};
