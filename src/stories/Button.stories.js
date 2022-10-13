import React from 'react';
import { Button } from './Button'

export default {
  title: 'Button',
  component: Button,
};


const Template = (args) => <Button {...args} />;

export const Darkmode = Template.bind({});
Darkmode.args = {
  color: 'darkmode',
  label: 'Dark mode'
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'disabled',
  label: 'Disabled'
};

export const HoverScale = Template.bind({});
HoverScale.args = {
  hoverscale: true,
  color: 'primary',
  label: 'Hover scale',
};

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  label: 'Large',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  label: 'Small',
};