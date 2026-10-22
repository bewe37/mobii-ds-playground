import type { Meta, StoryObj } from '@storybook/react-vite';
import type { MenuProps } from 'antd';
import { Flex, Menu } from 'antd';

const items: MenuProps['items'] = [
  { key: 'home', label: 'Home' },
  { key: 'projects', label: 'Projects' },
  {
    key: 'settings',
    label: 'Settings',
    children: [
      { key: 'profile', label: 'Profile' },
      { key: 'billing', label: 'Billing' },
      {
        key: 'group',
        type: 'group',
        label: 'Team',
        children: [
          { key: 'members', label: 'Members' },
          { key: 'roles', label: 'Roles' },
        ],
      },
    ],
  },
  { key: 'disabled', label: 'Disabled', disabled: true },
  { type: 'divider' },
  { key: 'logout', label: 'Log out', danger: true },
];

const meta: Meta<typeof Menu> = {
  title: 'Navigation/Menu',
  component: Menu,
  args: { items, mode: 'inline', defaultSelectedKeys: ['home'], style: { width: 256 } },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="large">
      <Menu mode="horizontal" items={items} defaultSelectedKeys={['home']} />
      <Menu mode="horizontal" theme="dark" items={items} defaultSelectedKeys={['home']} />
      <Flex gap="large" align="flex-start">
        <Menu mode="inline" items={items} defaultSelectedKeys={['profile']} defaultOpenKeys={['settings']} style={{ width: 240 }} />
        <Menu mode="inline" theme="dark" items={items} defaultSelectedKeys={['profile']} defaultOpenKeys={['settings']} style={{ width: 240 }} />
        <Menu mode="vertical" items={items} defaultSelectedKeys={['home']} style={{ width: 240 }} />
        <Menu mode="inline" inlineCollapsed items={items} defaultSelectedKeys={['home']} />
      </Flex>
    </Flex>
  ),
};
