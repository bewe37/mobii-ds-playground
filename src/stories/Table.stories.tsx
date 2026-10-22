import type { Meta, StoryObj } from '@storybook/react-vite';
import type { TableColumnsType } from 'antd';
import { Flex, Table, Tag } from 'antd';

type Row = { key: string; name: string; role: string; status: 'Active' | 'Invited' | 'Suspended' };

const statusColor = { Active: 'success', Invited: 'processing', Suspended: 'error' } as const;

const columns: TableColumnsType<Row> = [
  { title: 'Name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Role', dataIndex: 'role', filters: [{ text: 'Designer', value: 'Designer' }, { text: 'Engineer', value: 'Engineer' }], onFilter: (value, row) => row.role === value },
  { title: 'Status', dataIndex: 'status', render: (status: Row['status']) => <Tag color={statusColor[status]}>{status}</Tag> },
  { title: 'Action', key: 'action', render: () => <a href="#">Edit</a> },
];

const dataSource: Row[] = [
  { key: '1', name: 'Alex Chen', role: 'Designer', status: 'Active' },
  { key: '2', name: 'Sam Rivera', role: 'Engineer', status: 'Invited' },
  { key: '3', name: 'Jordan Lee', role: 'Engineer', status: 'Suspended' },
  { key: '4', name: 'Taylor Kim', role: 'Designer', status: 'Active' },
];

const meta: Meta<typeof Table<Row>> = {
  title: 'Data Display/Table',
  component: Table,
  args: { columns, dataSource },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap={48}>
      <Table<Row> columns={columns} dataSource={dataSource} />
      <Table<Row> columns={columns} dataSource={dataSource} bordered title={() => 'Bordered with title'} footer={() => 'Footer'} />
      <Table<Row> columns={columns} dataSource={dataSource} size="middle" pagination={false} />
      <Table<Row> columns={columns} dataSource={dataSource} size="small" pagination={false} />
      <Table<Row> columns={columns} dataSource={dataSource} rowSelection={{ defaultSelectedRowKeys: ['2'] }} pagination={false} />
      <Table<Row> columns={columns} dataSource={dataSource} loading pagination={false} />
      <Table<Row> columns={columns} dataSource={[]} />
    </Flex>
  ),
};
