import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { TransferProps } from 'antd';
import { Flex, Transfer } from 'antd';

type Item = { key: string; title: string; disabled?: boolean };

const dataSource: Item[] = Array.from({ length: 8 }, (_, i) => ({
  key: String(i),
  title: `Item ${i + 1}`,
  disabled: i === 3,
}));

// Transfer is controlled-only, so this keeps the selected keys in state.
function TransferDemo(props: Omit<TransferProps<Item>, 'dataSource' | 'targetKeys' | 'onChange'>) {
  const [targetKeys, setTargetKeys] = useState<React.Key[]>(['1', '5']);
  return (
    <Transfer<Item>
      render={(item) => item.title}
      {...props}
      dataSource={dataSource}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
    />
  );
}

const meta: Meta<typeof TransferDemo> = {
  title: 'Data Entry/Transfer',
  component: TransferDemo,
  args: { titles: ['Available', 'Selected'] },
};
export default meta;

type Story = StoryObj<typeof TransferDemo>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <TransferDemo />
      <TransferDemo showSearch />
      <TransferDemo oneWay />
      <TransferDemo status="error" />
      <TransferDemo disabled />
    </Flex>
  ),
};
