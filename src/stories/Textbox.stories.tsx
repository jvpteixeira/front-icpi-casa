import { ComponentStory, ComponentMeta } from '@storybook/react';
import Textbox from '../components/Textbox';
import Layout from '../layout';

export default {
  title: 'Components/Textbox',
  component: Textbox,
} as ComponentMeta<typeof Textbox>;

const Template: ComponentStory<typeof Textbox> = (args) => (
  <Layout>
    <Textbox {...args} />
  </Layout>
);

export const Text = Template.bind({});
Text.args = {
  label: 'Example',
  type: 'text',
  id: 'textbox',
  size: 1.2,
  placeholder: 'Some text here...',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  isPassword: true,
  id: 'password',
  type: 'password',
  size: 1.2,
  placeholder: '•••••••••••',
};
