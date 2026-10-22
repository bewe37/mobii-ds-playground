import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Pagination } from 'antd';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  args: { total: 50, defaultCurrent: 1 },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Pagination total={50} defaultCurrent={1} />
      <Pagination total={500} defaultCurrent={6} />
      <Pagination total={500} defaultCurrent={3} showSizeChanger showQuickJumper />
      <Pagination total={85} showTotal={(total) => `Total ${total} items`} />
      <Pagination total={50} size="small" />
      <Pagination total={50} simple />
      <Pagination total={50} disabled />
      <Pagination total={50} align="center" />
    </Flex>
  ),
};
