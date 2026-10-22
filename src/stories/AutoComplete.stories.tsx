import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoComplete, Flex } from 'antd';

const options = ['Amsterdam', 'Auckland', 'Austin', 'Athens'].map((value) => ({ value }));

const meta: Meta<typeof AutoComplete> = {
  title: 'Data Entry/AutoComplete',
  component: AutoComplete,
  args: { options, placeholder: 'Type a city', style: { width: 240 } },
};
export default meta;

type Story = StoryObj<typeof AutoComplete>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: 280 }}>
      <AutoComplete options={options} placeholder="Default" />
      <AutoComplete options={options} placeholder="Filled" variant="filled" />
      <AutoComplete options={options} placeholder="Borderless" variant="borderless" />
      <AutoComplete options={options} placeholder="Allow clear" allowClear defaultValue="Austin" />
      <AutoComplete options={options} placeholder="Small" size="small" />
      <AutoComplete options={options} placeholder="Large" size="large" />
      <AutoComplete options={options} placeholder="Error" status="error" />
      <AutoComplete options={options} placeholder="Disabled" disabled />
    </Flex>
  ),
};
