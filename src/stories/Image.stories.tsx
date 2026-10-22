import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Image } from 'antd';
import hero from '../assets/hero.png';

const meta: Meta<typeof Image> = {
  title: 'Data Display/Image',
  component: Image,
  args: { src: hero, width: 170, alt: 'Hero' },
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex gap="large" wrap align="flex-start">
      <Image src={hero} width={120} alt="Default" />
      <Image src={hero} width={120} alt="No preview" preview={false} />
      <Image src="missing.png" width={120} height={126} alt="Broken" fallback={hero} />
      <Image.PreviewGroup>
        <Image src={hero} width={80} alt="Group 1" />
        <Image src={hero} width={80} alt="Group 2" />
      </Image.PreviewGroup>
    </Flex>
  ),
};
