import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Rate } from 'antd';

const meta: Meta<typeof Rate> = {
  title: 'Data Entry/Rate',
  component: Rate,
  args: { defaultValue: 3 },
};
export default meta;

type Story = StoryObj<typeof Rate>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="middle">
      <Rate defaultValue={3} />
      <Rate defaultValue={2.5} allowHalf />
      <Rate defaultValue={4} count={10} />
      <Rate defaultValue={3} character="A" />
      <Rate defaultValue={3} tooltips={['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful']} />
      <Rate defaultValue={3} size="small" />
      <Rate defaultValue={3} size="large" />
      <Rate defaultValue={3} disabled />
    </Flex>
  ),
};
