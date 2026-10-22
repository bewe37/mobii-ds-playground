import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex, Typography } from 'antd';

const { Title, Text, Paragraph, Link } = Typography;

const meta: Meta<typeof Text> = {
  title: 'General/Typography',
  component: Text,
  args: { children: 'The quick brown fox jumps over the lazy dog' },
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Playground: Story = {};

export const AllVariants: Story = {
  render: () => (
    <Flex vertical gap="small" style={{ maxWidth: 640 }}>
      <Title level={1}>Heading 1</Title>
      <Title level={2}>Heading 2</Title>
      <Title level={3}>Heading 3</Title>
      <Title level={4}>Heading 4</Title>
      <Title level={5}>Heading 5</Title>
      <Flex gap="middle" wrap>
        <Text>Default</Text>
        <Text type="secondary">Secondary</Text>
        <Text type="success">Success</Text>
        <Text type="warning">Warning</Text>
        <Text type="danger">Danger</Text>
        <Text disabled>Disabled</Text>
      </Flex>
      <Flex gap="middle" wrap>
        <Text strong>Strong</Text>
        <Text italic>Italic</Text>
        <Text underline>Underline</Text>
        <Text delete>Delete</Text>
        <Text mark>Mark</Text>
        <Text code>Code</Text>
        <Text keyboard>Keyboard</Text>
        <Link href="https://ant.design" target="_blank">Link</Link>
      </Flex>
      <Paragraph>
        Paragraph text. Ant Design, a design language for background applications, is refined by the Ant UED team.
      </Paragraph>
      <Paragraph copyable>Copyable paragraph</Paragraph>
      <Paragraph editable>Editable paragraph</Paragraph>
      <Paragraph ellipsis={{ rows: 2 }} style={{ maxWidth: 320 }}>
        Ellipsis paragraph. Ant Design, a design language for background applications, is refined by the Ant UED
        team. Ant Design aims to uniform the user interface specs for internal background projects.
      </Paragraph>
    </Flex>
  ),
};
