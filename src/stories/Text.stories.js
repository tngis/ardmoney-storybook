import React from 'react';
import { Text } from './Text'

export default {
  title: 'Text',
  component: Text,
};


const Template = (args) => <Text {...args} />;

export const Darkmode = Template.bind({});
Darkmode.args = {
  darkmode: false,
  label: 'Text',
};

export const Title = Template.bind({});
Title.args = {
  textsize: 'large',
  darkmode: false,
  label: 'Title',
};

export const Description = Template.bind({});
Description.args = {
  textsize: 'medium',
  darkmode: false,
  label: 'Description',
};

export const Detail = Template.bind({});
Detail.args = {
  textsize: 'small',
  darkmode: false,
  label: 'Detail',
};
