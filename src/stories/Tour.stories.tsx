import type { Meta, StoryObj } from '@storybook/react-vite';
import { useRef, useState } from 'react';
import type { TourProps } from 'antd';
import { Button, Flex, Tour } from 'antd';

// antd's internal panel renders a tour step inline, so all variants fit on one screen.
const TourPanel = Tour._InternalPanelDoNotUseOrYouWillBeFired;

function TourDemo(props: Omit<TourProps, 'steps' | 'open' | 'onClose'>) {
  const [open, setOpen] = useState(false);
  const saveRef = useRef<HTMLButtonElement>(null);
  const shareRef = useRef<HTMLButtonElement>(null);
  return (
    <Flex gap="middle">
      <Button type="primary" onClick={() => setOpen(true)}>Start tour</Button>
      <Button ref={saveRef}>Save</Button>
      <Button ref={shareRef}>Share</Button>
      <Tour
        {...props}
        open={open}
        onClose={() => setOpen(false)}
        steps={[
          { title: 'Save', description: 'Save your changes here.', target: () => saveRef.current! },
          { title: 'Share', description: 'Share the design with your team.', target: () => shareRef.current! },
        ]}
      />
    </Flex>
  );
}

const meta: Meta<typeof Tour> = {
  title: 'Data Display/Tour',
  component: Tour,
  args: { type: 'default' },
  render: (args) => <TourDemo {...args} />,
};
export default meta;

type Story = StoryObj<typeof Tour>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap align="flex-start">
      <TourPanel title="Default" description="A step in the tour." current={0} total={3} />
      <TourPanel title="Primary" description="A step in the tour." current={1} total={3} type="primary" />
      <TourPanel title="Last step" description="The final step." current={2} total={3} />
      <TourPanel
        title="With cover"
        description="A step with an image."
        current={0}
        total={1}
        cover={<div style={{ height: 80, background: 'currentColor', opacity: 0.15, borderRadius: 4 }} />}
      />
    </Flex>
  ),
};
