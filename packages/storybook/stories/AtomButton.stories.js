import React from "react";
import { Button } from '@acme/atoms';

export default {
  title: 'Atom Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const SimpleAtomButton = Template.bind({});
