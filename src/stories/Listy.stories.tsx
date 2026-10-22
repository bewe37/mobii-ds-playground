import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Listy } from 'antd';

type Row = { id: number; name: string; team: string };

const teams = ['Design', 'Engineering', 'Product'];
const items: Row[] = Array.from({ length: 200 }, (_, i) => ({
  id: i,
  name: `Member ${i + 1}`,
  team: teams[i % teams.length],
}));

const itemRender = (item: Row) => <div style={{ padding: '8px 12px' }}>{item.name}</div>;

const meta: Meta<typeof Listy<Row>> = {
  title: 'Data Display/Listy',
  component: Listy,
  args: { items, rowKey: 'id', height: 240, itemRender, style: { maxWidth: 360 } },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" align="flex-start">
      <Listy<Row> items={items} rowKey="id" height={240} itemRender={itemRender} style={{ width: 280 }} />
      <Listy<Row>
        items={items}
        rowKey="id"
        height={240}
        sticky
        group={{ key: (item: Row) => item.team, title: (team) => <strong>{team}</strong> }}
        itemRender={itemRender}
        style={{ width: 280 }}
      />
    </Flex>
  ),
};
