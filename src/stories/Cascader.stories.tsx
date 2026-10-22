import type { Meta, StoryObj } from '@storybook/react-vite';
import { Cascader, Flex } from 'antd';

const options = [
  {
    value: 'nl',
    label: 'Netherlands',
    children: [
      { value: 'ams', label: 'Amsterdam' },
      { value: 'rtm', label: 'Rotterdam' },
    ],
  },
  {
    value: 'sg',
    label: 'Singapore',
    children: [{ value: 'cbd', label: 'Central' }],
  },
  { value: 'xx', label: 'Disabled', disabled: true },
];

const meta: Meta<typeof Cascader> = {
  title: 'Data Entry/Cascader',
  component: Cascader,
  args: { options, placeholder: 'Select a location', style: { width: 240 } },
};
export default meta;

type Story = StoryObj<typeof Cascader>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: 280 }}>
      <Cascader options={options} placeholder="Default" />
      <Cascader options={options} defaultValue={['nl', 'ams']} />
      <Cascader options={options} placeholder="Filled" variant="filled" />
      <Cascader options={options} placeholder="Multiple" multiple />
      <Cascader options={options} placeholder="Searchable" showSearch />
      <Cascader options={options} placeholder="Small" size="small" />
      <Cascader options={options} placeholder="Large" size="large" />
      <Cascader options={options} placeholder="Error" status="error" />
      <Cascader options={options} placeholder="Disabled" disabled />
    </Flex>
  ),
};
