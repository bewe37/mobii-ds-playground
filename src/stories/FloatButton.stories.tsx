import type { Meta, StoryObj } from '@storybook/react-vite';
import { FloatButton } from 'antd';

const meta: Meta<typeof FloatButton> = {
  title: 'General/FloatButton',
  component: FloatButton,
  args: { type: 'primary', tooltip: 'Help' },
};
export default meta;

type Story = StoryObj<typeof FloatButton>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <div style={{ height: 320 }}>
      <FloatButton style={{ insetInlineEnd: 24 }} />
      <FloatButton type="primary" style={{ insetInlineEnd: 88 }} />
      <FloatButton shape="square" style={{ insetInlineEnd: 152 }} />
      <FloatButton type="primary" shape="square" content="Docs" style={{ insetInlineEnd: 216 }} />
      <FloatButton badge={{ count: 5 }} style={{ insetInlineEnd: 280 }} />
      <FloatButton badge={{ dot: true }} type="primary" style={{ insetInlineEnd: 344 }} />
      <FloatButton.Group
        open
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 408 }}
      >
        <FloatButton />
        <FloatButton />
      </FloatButton.Group>
    </div>
  ),
};
