import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Watermark } from 'antd';

const box = <div style={{ height: 240 }} />;

const meta: Meta<typeof Watermark> = {
  title: 'Feedback/Watermark',
  component: Watermark,
  args: { content: 'Confidential', children: box },
};
export default meta;

type Story = StoryObj<typeof Watermark>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large" style={{ maxWidth: 560 }}>
      <Watermark content="Confidential">{box}</Watermark>
      <Watermark content={['Design System', 'Draft']}>{box}</Watermark>
      <Watermark content="Rotated" rotate={-45} gap={[60, 60]} font={{ color: 'rgba(31, 111, 235, 0.25)', fontSize: 20 }}>
        {box}
      </Watermark>
    </Flex>
  ),
};
