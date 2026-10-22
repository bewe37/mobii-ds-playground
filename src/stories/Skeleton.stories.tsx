import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Skeleton } from 'antd';

const meta: Meta<typeof Skeleton> = {
  title: 'Feedback/Skeleton',
  component: Skeleton,
  args: { active: true, avatar: true, paragraph: { rows: 3 } },
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large" style={{ maxWidth: 560 }}>
      <Skeleton />
      <Skeleton active />
      <Skeleton avatar paragraph={{ rows: 2 }} />
      <Skeleton avatar={{ shape: 'square' }} title={false} paragraph={{ rows: 2 }} />
      <Flex gap="middle" align="center" wrap>
        <Skeleton.Button />
        <Skeleton.Button shape="round" />
        <Skeleton.Button active size="large" />
        <Skeleton.Avatar />
        <Skeleton.Avatar shape="square" />
        <Skeleton.Input />
        <Skeleton.Image />
        <Skeleton.Node>Node</Skeleton.Node>
      </Flex>
    </Flex>
  ),
};
