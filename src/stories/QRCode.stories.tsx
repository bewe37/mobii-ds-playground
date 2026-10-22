import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, QRCode } from 'antd';

const value = 'https://ant.design';

const meta: Meta<typeof QRCode> = {
  title: 'Data Display/QRCode',
  component: QRCode,
  args: { value },
};
export default meta;

type Story = StoryObj<typeof QRCode>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap align="flex-start">
      <QRCode value={value} />
      <QRCode value={value} type="svg" />
      <QRCode value={value} size={120} />
      <QRCode value={value} color="#1F6FEB" />
      <QRCode value={value} bordered={false} />
      <QRCode value={value} errorLevel="H" />
      <QRCode value={value} status="loading" />
      <QRCode value={value} status="expired" onRefresh={() => {}} />
      <QRCode value={value} status="scanned" />
    </Flex>
  ),
};
