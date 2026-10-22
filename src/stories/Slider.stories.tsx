import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Slider } from 'antd';

const meta: Meta<typeof Slider> = {
  title: 'Data Entry/Slider',
  component: Slider,
  args: { defaultValue: 30, style: { width: 320 } },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap={48}>
      <Flex vertical gap="large" style={{ width: 320 }}>
        <Slider defaultValue={30} />
        <Slider range defaultValue={[20, 60]} />
        <Slider defaultValue={40} step={10} dots />
        <Slider defaultValue={37} marks={{ 0: '0°C', 37: '37°C', 100: '100°C' }} />
        <Slider defaultValue={30} tooltip={{ open: true }} />
        <Slider defaultValue={30} disabled />
      </Flex>
      <Flex gap="large" style={{ height: 240 }}>
        <Slider orientation="vertical" defaultValue={30} />
        <Slider orientation="vertical" range defaultValue={[20, 60]} />
      </Flex>
    </Flex>
  ),
};
