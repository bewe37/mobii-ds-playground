import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar, Flex } from 'antd';
import hero from '../assets/hero.png';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  args: { children: 'AB' },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Flex gap="middle" align="center">
        <Avatar size="small">S</Avatar>
        <Avatar>D</Avatar>
        <Avatar size="large">L</Avatar>
        <Avatar size={64}>64</Avatar>
      </Flex>
      <Flex gap="middle" align="center">
        <Avatar shape="square" size="small">S</Avatar>
        <Avatar shape="square">D</Avatar>
        <Avatar shape="square" size="large">L</Avatar>
        <Avatar shape="square" size={64}>64</Avatar>
      </Flex>
      <Flex gap="middle" align="center">
        <Avatar src={hero} />
        <Avatar style={{ backgroundColor: '#1F6FEB' }}>BW</Avatar>
        <Avatar style={{ backgroundColor: '#FAAD14' }}>Longer name</Avatar>
      </Flex>
      <Avatar.Group max={{ count: 3 }}>
        <Avatar>A</Avatar>
        <Avatar>B</Avatar>
        <Avatar>C</Avatar>
        <Avatar>D</Avatar>
        <Avatar>E</Avatar>
      </Avatar.Group>
    </Flex>
  ),
};
