import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox, Flex } from 'antd';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  args: { children: 'Checkbox' },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle">
      <Flex gap="large" wrap>
        <Checkbox>Unchecked</Checkbox>
        <Checkbox defaultChecked>Checked</Checkbox>
        <Checkbox indeterminate>Indeterminate</Checkbox>
        <Checkbox disabled>Disabled</Checkbox>
        <Checkbox disabled defaultChecked>Disabled checked</Checkbox>
      </Flex>
      <Checkbox.Group
        options={['Apple', 'Banana', 'Cherry']}
        defaultValue={['Apple']}
      />
    </Flex>
  ),
};
