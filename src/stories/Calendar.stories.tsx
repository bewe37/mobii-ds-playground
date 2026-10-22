import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar, Flex } from 'antd';

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
  args: { fullscreen: false, style: { width: 320 } },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Flex gap="large" align="flex-start">
        <Calendar fullscreen={false} style={{ width: 320 }} />
        <Calendar fullscreen={false} mode="year" style={{ width: 320 }} />
      </Flex>
      <Calendar />
    </Flex>
  ),
};
