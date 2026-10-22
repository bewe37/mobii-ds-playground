import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card, Masonry } from 'antd';

const heights = [120, 80, 160, 100, 140, 90, 180, 110, 70, 150];
const items = heights.map((height, i) => ({ key: i, data: height }));

const meta: Meta<typeof Masonry> = {
  title: 'Layout/Masonry',
  component: Masonry,
  args: { columns: 3, gutter: 16 },
  render: (args) => (
    <Masonry
      {...args}
      items={items}
      itemRender={({ data, key }) => (
        <Card size="small" style={{ height: data as number }}>
          Item {Number(key) + 1}
        </Card>
      )}
    />
  ),
};
export default meta;

type Story = StoryObj<typeof Masonry>;

export const Playground: Story = {};

export const AllVariants: Story = {
  args: { columns: 4, gutter: [8, 24] },
};
