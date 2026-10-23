import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Flex } from 'antd';
import { Sidebar, type SidebarProps } from '../components/Sidebar';
import tenantAtp from '../components/Sidebar/assets/tenant-atp.svg';

const items: MenuProps['items'] = [
  { key: 'nav-1', icon: <MailOutlined />, label: 'Navigation Item' },
  { key: 'nav-2', icon: <MailOutlined />, label: 'Navigation Item' },
  {
    key: 'submenu',
    icon: <MailOutlined />,
    label: 'Submenu',
    children: [
      { key: 'sub-1', label: 'Navigation Item' },
      { key: 'sub-2', label: 'Navigation Item' },
      { key: 'sub-3', label: 'Navigation Item' },
    ],
  },
  { key: 'nav-3', icon: <MailOutlined />, label: 'Navigation Item' },
  { key: 'nav-4', icon: <MailOutlined />, label: 'Navigation Item' },
];

// Interactive wrapper so the collapse buttons work in every story.
function StatefulSidebar(props: SidebarProps) {
  const [collapsed, setCollapsed] = useState(props.collapsed ?? false);
  return <Sidebar {...props} collapsed={collapsed} onCollapsedChange={setCollapsed} />;
}

const meta: Meta<typeof Sidebar> = {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  parameters: { layout: 'fullscreen' },
  args: {
    items,
    collapsed: false,
    datasetLabel: 'Dataset',
    tenantName: 'ATP',
    tenantLogo: <img src={tenantAtp} width={26.9692} height={8.00005} alt="" />,
    tenantColor: '#082f6f',
    userName: 'John McGinn',
    menuProps: { defaultSelectedKeys: ['sub-2'], defaultOpenKeys: ['submenu'] },
  },
  argTypes: {
    // Leave unset to follow the toolbar's colour mode.
    theme: { control: 'inline-radio', options: ['light', 'dark'] },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Playground: Story = {
  render: (args, { globals }) => (
    <StatefulSidebar key={String(args.collapsed)} {...args} theme={args.theme ?? (globals.mode === 'dark' ? 'dark' : 'light')} />
  ),
};

// Figma node 1213:28646: Theme=Dark, Mode=Inline, Collapsed=No.
export const Dark: Story = {
  ...Playground,
  globals: { mode: 'dark' },
  args: { menuProps: { defaultSelectedKeys: ['nav-1', 'sub-2'], defaultOpenKeys: ['submenu'] } },
};

// Open submenus render as popups when collapsed, so start them closed.
export const Collapsed: Story = {
  ...Playground,
  args: { collapsed: true, menuProps: { defaultSelectedKeys: [] } },
};

export const AllVariants: Story = {
  render: (args) => (
    <Flex gap="large" style={{ height: '100%' }}>
      <Sidebar {...args} theme="light" />
      <Sidebar {...args} theme="light" collapsed menuProps={{ defaultSelectedKeys: [] }} />
      <Sidebar {...args} theme="dark" menuProps={{ defaultSelectedKeys: ['nav-1', 'sub-2'], defaultOpenKeys: ['submenu'] }} />
      <Sidebar {...args} theme="dark" collapsed menuProps={{ defaultSelectedKeys: ['sub-2'] }} />
    </Flex>
  ),
};
