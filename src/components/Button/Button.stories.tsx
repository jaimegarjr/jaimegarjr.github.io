import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button} from '@mui/material';

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button variant="text" {...args} >test</Button>;

export const FirstButton = Template.bind({});
FirstButton.args = {
    
};