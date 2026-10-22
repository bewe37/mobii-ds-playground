import type { Meta, StoryObj } from '@storybook/react-vite';
import { BorderBeam, Card, Flex } from 'antd';

const card = (label: string) => (
  <Card style={{ width: 240 }}>{label}</Card>
);

const meta: Meta<typeof BorderBeam> = {
  title: 'Other/BorderBeam',
  component: BorderBeam,
  args: { children: card('Card with a border beam') },
};
export default meta;

type Story = StoryObj<typeof BorderBeam>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap>
      <BorderBeam>{card('Default')}</BorderBeam>
      <BorderBeam color="#1F6FEB">{card('Custom colour')}</BorderBeam>
      <BorderBeam color={[{ color: '#1F6FEB', percent: 0 }, { color: '#52C41A', percent: 100 }]}>
        {card('Gradient')}
      </BorderBeam>
      <BorderBeam count={2} duration={4}>{card('Two beams, slower')}</BorderBeam>
      <BorderBeam lineWidth={3} size={120}>{card('Thicker, longer')}</BorderBeam>
    </Flex>
  ),
};
