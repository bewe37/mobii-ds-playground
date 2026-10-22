import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, InputNumber } from 'antd';

const meta: Meta<typeof InputNumber> = {
  title: 'Data Entry/InputNumber',
  component: InputNumber,
  args: { min: 0, max: 100, defaultValue: 3 },
};
export default meta;

type Story = StoryObj<typeof InputNumber>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: 240 }}>
      <InputNumber defaultValue={3} />
      <InputNumber defaultValue={3} variant="filled" />
      <InputNumber defaultValue={3} variant="borderless" />
      <InputNumber defaultValue={3} size="small" />
      <InputNumber defaultValue={3} size="large" />
      <InputNumber defaultValue={1000} prefix="$" />
      <InputNumber defaultValue={20} suffix="%" />
      <InputNumber defaultValue={3} controls={false} />
      <InputNumber defaultValue={3} mode="spinner" />
      <InputNumber defaultValue={3} status="error" />
      <InputNumber defaultValue={3} status="warning" />
      <InputNumber defaultValue={3} disabled />
    </Flex>
  ),
};
